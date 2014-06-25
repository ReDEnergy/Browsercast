// TODO - autoplay feature + stop on space + resume

(function Browsercast(global, document) {
	"use strict";

	var slide_map = {};
	var last_marker;
	var last_slide;
	var markers;
	var overlay;
	var slides = [];

	var Browsercast = {
		reveal: false,
		impress: false,
		hide_marker: true,
		hide_marker_after: 2000, // (hide slide marker in miliseconds)
		playback: true,

		// Add fade effect for markers
		setFadeMarker : function setFadeMarker() {
			var timeout = null;
			function resetTimeout() {
				clearTimeout(timeout);
				timeout = setTimeout(function() {
					markers.setAttribute('data-hidden', true);
				}, Browsercast.hide_marker_after);
			}

			document.addEventListener('mousemove', function(e) {
				markers.removeAttribute('data-hidden');
				resetTimeout();
			});
		},

		// TODO - If no audio is present it will skip the slide
		advance : function advance() {
			if (slides[slides.length - 1] == last_slide)
				return;
			Audio.clearEvents();
			if (Browsercast.reveal) Reveal.next();
			if (Browsercast.impress) impress().next();
		},

		initSlides : function initSlides() {
			var i;
			if (Browsercast.impress) {
				var impress = document.getElementById('impress');
				var slide_elems = impress.querySelectorAll('.step');
				for (i = 0; i < slide_elems.length; i++)
					slides[i] = new Slide(slide_elems[i], i);
			}

			if (Browsercast.reveal) {
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
		},

		createOverlay : function createOverlay() {
			overlay = document.getElementById('bc-overlay');
			if (overlay) return;

			overlay = document.createElement('div');
			overlay.id = 'bc-overlay';

			var state = document.createElement('div');
			state.className = 'state';

			var stateinfo = document.createElement('div');
			stateinfo.className = 'stateinfo';
			stateinfo.textContent = 'Paused';

			var help = document.createElement('div');
			help.className = 'help';
			help.textContent = 'Press P to resume';

			state.appendChild(stateinfo);
			state.appendChild(help);
			overlay.appendChild(state);

			var browsercast = document.getElementById("browsercast");
			browsercast.appendChild(overlay);
		},

		createMarkers : function createMarkers() {
			markers = document.getElementById('bc-markers');
			if (markers) {
				markers.textContent = null;
				return;
			}

			markers = document.createElement('div');
			markers.id = "bc-markers";
			var browsercast = document.getElementById("browsercast");
			browsercast.appendChild(markers);
		},
		pause: function pause() {
			Audio.pause();
			overlay.setAttribute('active', 'true');
			this.playback = false;
		},

		resume: function resume() {
			Audio.resume();
			overlay.removeAttribute('active');
			this.playback = true;
		},

		// TODO add config obj
		init : function init(obj) {
			console.log(obj);
			this.createOverlay();
			this.createMarkers();

			if (obj.framework === 'reveal.js')
				this.reveal = true;
			if (obj.framework === 'impress.js')
				this.impress = true;
			if (this.hide_marker)
				this.setFadeMarker();

			document.addEventListener('keydown', function(e) {
				if (e.keyCode === 80) {
					Browsercast.playback ? Browsercast.pause() : Browsercast.resume();
				}
			});
			console.log(this);
		}
	};

	//*************************************************************************
	//*************************************************************************

	/*
	 * Slide Object
	 */
	function Slide(slide_dom, index) {
		// console.log("================= Slide ", index, "==================");
		this.index = index;
		this.elem = slide_dom;
		this.marker = new Marker(this);
		this.getAudioFragments();

		// TODO treat fragments

		if (Browsercast.impress) {
			slide_map[this.elem.id] = this;
		}

		if (Browsercast.reveal) {
			this.reveal = Reveal.getIndices();
			slide_map['' + this.reveal.h + this.reveal.v] = this;
			while(Reveal.nextFragment());
		}
	}

	Slide.prototype.navigateTo = function navigateTo() {
		if (Browsercast.impress)
			impress().goto(this.index);
		if (Browsercast.reveal)
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

		Audio.registerEvent(Browsercast.advance, this.playback_time);
		if (Browsercast.playback === false) {
			Browsercast.pause();
		}
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

		if (this.delay)
			Audio.registerEvent(start, this.delay);
		else
			start();
	};

	//*************************************************************************
	//*************************************************************************

	/**
	 * Timeout Event Class
	 * allows to pause setTimeout events and resume them after
	 * TODO: can we trust JavaScript timing ?
	 * TODO: does it works for multiple audios ? Need to test
	 * TODO - what if I share the startTime between same class Events
	 */

	function Event(callback, delay) {
		// TODO - this.callback blocks GC from freeing memory
		this.callback = callback;
		this.delay = delay;
		this.startTime = new Date();
		this.ID = window.setTimeout(callback, delay);
		this.paused = false;
		this.triggered = false;
	}

	Event.prototype.pause = function pause() {
		if (this.paused || this.triggered) return;
		window.clearTimeout(this.ID);
		this.pauseTime = new Date();
		this.delay -= (this.pauseTime - this.startTime);
		this.paused = true;
	};

	Event.prototype.resume = function resume() {
		if (this.paused === false || this.triggered) return;
		this.startTime = new Date();
		this.ID = window.setTimeout(this.callback, this.delay);
		this.paused = false;
	};

	Event.prototype.stop = function stop() {
		clearTimeout(this.ID);
		this.callback = null;
	};

	Event.prototype.isTriggered = function isTriggered() {
		if (this.paused)
			return false;
		if (this.triggered === false) {
			var currentTime = new Date();
			var deltaTime = currentTime - this.startTime;
			if (deltaTime > this.delay) {
				this.triggered = true;
				this.callback = null;
			}
		}
		return this.triggered;
	};

	Event.prototype.log = function log() {
		console.log('Event ', this);
	};

	global.Event = Event;

	//*************************************************************************
	//*************************************************************************

	/**
	 * Browsercast Audio Manager
	 */

	var Audio = (function Audio() {
		var events = [];
		var audiocasts = [];
		var audio_map = {};
		var paused_tracks = [];

		var getCast = function getCast(id, name) {
			if (audiocasts[id] instanceof Popcorn)
				return audiocasts[id];
			if (audio_map[name] instanceof Popcorn)
				return audiocasts[id];
			return audiocasts[0];
		};

		var pause = function pause() {
			for (var i=0; i<events.length; i++) {
				events[i].pause();
			}
			for (var i=0; i<audiocasts.length; i++) {
				if (audiocasts[i].paused() === false) {
					audiocasts[i].pause();
					paused_tracks.push(audiocasts[i]);
				}
			}
			console.log('Pause: ', events, audiocasts);
		};

		var resume = function resume() {
			for (var i=0; i<events.length; i++) {
				events[i].resume();
			}
			for (var i=0; i<paused_tracks.length; i++) {
				paused_tracks[i].play();
			}
			paused_tracks = [];
			console.log('Resume: ', events, audiocasts);
		};

		var registerEvent = function(callback, delay) {
			events.push(new Event(callback, delay));
		};

		var clearEvents = function() {
			for (var i=0; i<audiocasts.length; i++) {
				audiocasts[i].pause();
			}
			for (var i=0; i<events.length; i++) {
				events[i].stop();
			}
			events = [];
			paused_tracks = [];
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

		return {
			init : init,
			pause : pause,
			resume : resume,
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

	var FrameworkEvents = (function FrameworkEvents() {

		var init = function init() {
			if (Browsercast.impress) {
				document.addEventListener("impress:stepenter", function (event) {
					if (slide_map[event.target.id] instanceof Slide)
						slide_map[event.target.id].focus();
				});

				document.addEventListener("impress:stepleave", function (event) {
					last_slide.blur();
				});
			}

			if (Browsercast.reveal) {
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
		Audio.init();
		Browsercast.init(config);
		Browsercast.initSlides();
		FrameworkEvents.init();
	}

	global.Browsercast = {
		initialize: initPresentation
	};

})(window, window.document);