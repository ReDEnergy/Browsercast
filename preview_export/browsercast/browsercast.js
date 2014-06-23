// TODO - autoplay feature + stop on space + resume

(function Browsercast(global, document) {
	"use strict";

	var slide_map = {};
	var last_marker;
	var last_slide;
	var markers;

	var Config = {
		reveal: false,
		impress: false,
		hide_marker: true,
		hide_marker_after: 2000, // (hide slide marker in miliseconds)

		// Add fade effect for markers
		setFadeMarker : function setFadeMarker() {
			var timeout = null;
			function resetTimeout() {
				clearTimeout(timeout);
				timeout = setTimeout(function() {
					markers.setAttribute('data-hidden', true);
				}, Config.hide_marker_after);
			}

			document.addEventListener('mousemove', function(e) {
				markers.removeAttribute('data-hidden');
				resetTimeout();
			});
		},

		// TODO add config obj
		init : function init(obj) {
			console.log(obj);

			markers = document.createElement('div');
			markers.id = "bc-markers";
			var browsercast = document.getElementById("browsercast");
			browsercast.appendChild(markers);

			if (obj.framework === 'reveal.js')
				this.reveal = true;
			if (obj.framework === 'impress.js')
				this.impress = true;
			if (this.hide_marker)
				this.setFadeMarker();

			console.log(Config);
		},
	};

	//*************************************************************************
	//*************************************************************************

	var nextSlide = function nextSlide() {
		Audio.clearEvents();
		if (Config.reveal) Reveal.next();
		if (Config.impress) impress().next();
	};

	/*
	 * Slide Object
	 */
	function Slide(slide_dom, index) {
//		console.log("========================== Slide ", index, "==========================");
		this.index = index;
		this.elem = slide_dom;
		this.marker = new Marker(this);
		this.getAudioFragments();

		// TODO treat fragments

		if (Config.impress) {
			slide_map[this.elem.id] = this;
		}

		if (Config.reveal) {
			this.reveal = Reveal.getIndices();
			slide_map['' + this.reveal.h + this.reveal.v] = this;
			while(Reveal.nextFragment());
		}
	}

	Slide.prototype.navigateTo = function navigateTo() {
		if (Config.impress)
			impress().goto(this.index);
		if (Config.reveal)
			Reveal.navigateTo(this.reveal.h, this.reveal.v);
	};

	Slide.prototype.focus = function focus() {
		if (last_slide instanceof Slide)
			last_slide.blur();

		last_slide = this;
		this.marker.setActive();

		for (var i=0; i<this.fragments.length; i++) {
			this.fragments[i].play();
		}

		// TODO - Auto playback
		// If no audio is present it loops between all slides
		// Stop when after last slide
		// Do not start automaticaly - add an option
//		console.log("Auto advance in", this.playback_time);
		// Audio.registerEvent(nextSlide, this.playback_time);
	};

	Slide.prototype.blur = function blur() {
		Audio.clearEvents();
		this.marker.setInactive();
	};

	Slide.prototype.getAudioFragments = function getAudioFragments() {
		var frags = this.elem.children;
		this.fragments = [];
		for (var i=0; i<frags.length; i++) {
			if (frags[i].className != 'bc')
				continue;
			this.fragments.push(new AudioFragment(frags[i]));
		}

		// Compute Slide Playback Length
		this.playback_time = 0;
		for (var i=0; i<this.fragments.length; i++) {
			if (this.fragments[i].total > this.playback_time)
				this.playback_time = this.fragments[i].total;
		}
	};

	/**
	 * TODO: Slide Fragment
	 */

	function SlideFragment() {

	}

	/**
	 * Marker Object - UI element
	 */
	function Marker(slide) {
		this.slide = slide;
		this.marker = document.createElement('div');
		this.marker.className = 'cue';
		this.marker.addEventListener('click', function focus() {
			slide.navigateTo();
		});
		markers.appendChild(this.marker);
	}

	Marker.prototype.setActive = function setActive() {
		if (last_marker instanceof Marker)
			last_marker.setInactive();
		this.marker.setAttribute('data-active', 'true');
		last_marker = this;
	};

	Marker.prototype.setInactive = function setInactive() {
		this.marker.removeAttribute('data-active');
	};

	Marker.prototype.setSize = function setSize(size) {
		this.marker.style.width = size + '%';
	};

	//*************************************************************************
	//*************************************************************************

	/**
	 * Audio fragment
	 */
	function AudioFragment(elem) {
		this.startTime = parseFloat(elem.getAttribute('data-cue'));
		this.length = parseFloat(elem.getAttribute('data-length')) * 1000;
		this.delay = parseFloat(elem.getAttribute('data-delay')) * 1000;

		if (isNaN(this.startTime) || isNaN(this.length)) {
			return;
		}
		if (isNaN(this.delay)) {
			this.delay = 0;
		}

		this.total = this.length + this.delay;

		var trackID = elem.getAttribute('data-track') | 0;
		var name = elem.getAttribute('data-trackname');

		this.audiocast = Audio.getCast(trackID, name);
	}

	AudioFragment.prototype.play = function play() {

		var start = function start() {
			console.log("Play Fragment", this);
			this.audiocast.currentTime(this.startTime);
			this.audiocast.play();
			Audio.registerEvent(stop, this.length);
		}.bind(this);

		var stop = function stop() {
			console.log("Stop Fragment", this);
			this.audiocast.pause();
		}.bind(this);

		Audio.registerEvent(start, this.delay);
	};

	/**
	 * Browsercast Audio Manager
	 */

	var Audio = (function Audio() {
		var audiocasts = [];
		var audio_map = {};
		var audio_events = [];

		var getCast = function getCast(id, name) {
			if (audiocasts[id] instanceof Popcorn)
				return audiocasts[id];
			if (audio_map[name] instanceof Popcorn)
				return audiocasts[id];
			return audiocasts[0];
		};

		var init = function init() {
			var container = document.getElementById('bc-audio-tracks');
			var elems = container.querySelectorAll('audio');
			for (var i=0; i<elems.length; i++) {
				audiocasts.push(Popcorn(elems[i]));
				var name = elems[i].getAttribute('data-name');
				if (name) {
					audio_map[name] = i;
				}
			}
		};

		var pauseAll = function pauseAll() {
			for (var i=0; i<audiocasts.length; i++) {
				audiocasts[i].pause();
			}
		};

		var registerEvent = function(callback, delay) {
			var event = window.setTimeout(callback, delay);
			audio_events.push(event);
			console.log("Event: ID", event, "trigger in:", delay);
		};

		var clearEvents = function() {
			pauseAll();
			for (var i=0; i<audio_events.length; i++) {
				clearTimeout(audio_events[i]);
			}
			audio_events = [];
		};

		return {
			init : init,
			getCast : getCast,
			registerEvent : registerEvent,
			clearEvents : clearEvents
		};
	})();

	//*************************************************************************
	//*************************************************************************

	/**
	 * Event listeners
	 */

	var Events = (function Events() {

		var init = function init() {
			if (Config.impress) {
				document.addEventListener("impress:stepenter", function (event) {
					if (slide_map[event.target.id] instanceof Slide)
						slide_map[event.target.id].focus();
				});

				document.addEventListener("impress:stepleave", function (event) {
					last_slide.blur();
				});
			}

			if (Config.reveal) {
				Reveal.addEventListener("slidechanged", function (event) {
					var info = Reveal.getIndices();
					var slide = slide_map[''+info.h+info.v];
					if (slide instanceof Slide)
						slide.focus();
				});
			}
		};

		return {
			init:  init
		};
	})();

	/**
	 * Start Browsercast
	 */

	function initPresentation(config) {

		Config.init(config);
		Audio.init();

		var i;
		var slides = [];

		if (Config.impress) {
			var impress = document.getElementById('impress');
			var slide_elems = impress.querySelectorAll('.step');
			for (i = 0; i < slide_elems.length; i++)
				slides[i] = new Slide(slide_elems[i], i);
		}

		if (Config.reveal) {
			Reveal.navigateTo(0);
			while(true) {
				slides.push(new Slide(Reveal.getCurrentSlide(), 0));
				if (Reveal.isLastSlide()) break;
				Reveal.next();
			}
			Reveal.navigateTo(0);
		}

		console.log("Slides", slides);
		var len = slides.length;
		for (i = 0; i <len; i++)
			slides[i].marker.setSize(100 / len);

		Events.init();
		slides[0].focus();
	}

	global.Browsercast = {
		initialize: initPresentation
	};

})(window, window.document);