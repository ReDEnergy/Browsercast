// TODO - autoplay feature + stop on space + resume

(function Browsercast(global, document) {
	"use strict";

	var slide_map = [];
	var last_marker;
	var last_slide;
	var markers;
	var overlay;
	var overview;
	var slides = [];
	var initCallback = function() {};

	var Browsercast = (function() {
		var reveal = false;
		var impress = false;
		var hide_marker = true;
		var nr_slides = 0;
		var hide_marker_after = 2000; // (hide slide marker in miliseconds)
		var playback = true;

		// Add fade effect for markers
		var setFadeMarker = function setFadeMarker() {
			var timeout = null;
			function resetTimeout() {
				clearTimeout(timeout);
				timeout = setTimeout(function() {
					markers.setAttribute('data-hidden', true);
				}, hide_marker_after);
			}

			var handleMouseMove = function handleMouseMove(e) {
				markers.removeAttribute('data-hidden');
				resetTimeout();
			};
			document.addEventListener('mousemove', handleMouseMove);
		};

		// Events

		var handleKeyDown = function handleKeyDown(e) {
			if (e.keyCode === 19) {
				togglePlayback();
			}
			// Debug logging
			if (e.keyCode === 68) {
				console.log('slides', slides);
			}
		};

		// Init presentation
		var initImpress = function initImpress() {
			var impress = document.getElementById('impress');
			var slide_elems = impress.querySelectorAll('.step');
			for (var i = 0; i < slide_elems.length; i++)
				slides[i] = new Slide(slide_elems[i]);

			checkForErrors();
		};

		var initReveal = function initReveal() {
			function listenSlideEvents() {
				Reveal.addEventListener("slidechanged", recordSlide);
				Reveal.addEventListener("fragmentshown", recordFragment);
			}

			function unlistenSlideEvents() {
				Reveal.removeEventListener("slidechanged", recordSlide);
				Reveal.removeEventListener("fragmentshown", recordFragment);
			}

			function recordSlide(event) {
				slides.push(new Slide(event.currentSlide));
				triggerEvent();
			}

			function recordFragment(event) {
				slides.push(new Slide(event.fragment));
				triggerEvent();
			}

			function triggerEvent() {
				if (Reveal.isLastSlide() && Reveal.availableFragments().next === false) {
					unlistenSlideEvents();
					Reveal.slide(0, 0, -1);
					checkMarks();
					initCallback();
					return;
				}
				Reveal.next();
			}

			// TODO bug when just 1 slide
			Reveal.slide(10000);
			listenSlideEvents();
			Reveal.slide(0, 0, -1);
		};

		var checkMarks = function checkMarks() {
			var len = slides.length;
			for (var i = 0; i <len - 1; i++) {
				if (isNaN(slides[i].end))
					slides[i].end = slides[i+1].start;
				slides[i].marker.setSize(100 / len);
			}
			console.log("Slides", slides);
			console.log("Slides MAP", slide_map);
		};

		var createOverlay = function createOverlay() {
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
		};

		var createMarkers = function createMarkers() {
			markers = document.getElementById('bc-markers');
			if (markers) {
				markers.textContent = null;
				return;
			}

			markers = document.createElement('div');
			markers.id = "bc-markers";
			var browsercast = document.getElementById("browsercast");
			browsercast.appendChild(markers);
		};

		// Control presentation
		var pause = function pause() {
			Audio.pause();
			overlay.setAttribute('active', 'true');
			playback = false;
			if (reveal)
				Reveal.removeEventListeners();
		};

		var resume = function resume() {
			playback = true;
			overlay.removeAttribute('active');
			if (reveal)
				Reveal.addEventListeners();
			if (!overview)
				Audio.resume();
		};

		var togglePlayback = function togglePlayback() {
			playback ? pause() : resume();
			return playback;
		};

		var toggleOverview = function toggleOverview(state) {
			if(state !== undefined)
				state = !overview;
			overview = state;
			overview ? Audio.pause() : Audio.resume();
		};

		// TODO - If no audio is present it will skip the slide
		var advance = function advance() {
			if (slides[slides.length - 1] == last_slide)
				return;
			if (reveal) Reveal.next();
			if (impress) impress().next();
		};

		var canPlay = function canPlay() {
			return playback && !overview;
		};

		var reset = function reset() {
			playback = true;
			overview = true;
			Audio.stop();
			if (reveal) {
				overview = Reveal.isOverview();
				Reveal.addEventListeners();
			}
			if (overlay)
				overlay.removeAttribute('active');
			slides = [];
			slide_map = [];
			document.removeEventListener('keydown', handleKeyDown);

		};

		// TODO add config obj
		var init = function init(obj) {
			if (obj.framework === 'reveal.js')	reveal = true;
			if (obj.framework === 'impress.js')	impress = true;

			reset();
			createOverlay();
			createMarkers();

			if (hide_marker)
				setFadeMarker();

			document.addEventListener('keydown', handleKeyDown);

			if (impress)	initImpress();
			if (reveal)		initReveal();
		};

		return {
			init : init,
			reset : reset,
			pause : pause,
			resume : resume,
			advance : advance,
			isReveal : function isReveal() {
				return reveal;
			},
			isImpress : function isImpress() {
				return impress;
			},
			canPlay : function canPlay() {
				return playback && !overview;
			},
			toggleOverview : toggleOverview
		};

	})();

	//*************************************************************************
	//*************************************************************************

	/*
	 * Slide Object
	 */
	function Slide(elem) {
		this.index = elem.id;
		this.elem = elem;
		this.marker = new Marker(this);
		this.getAudioInfo();

		if (Browsercast.isImpress()) {
			slide_map[this.elem.id] = this;
		}
		if (Browsercast.isReveal()) {
			this.index = Reveal.getIndices();
			slide_map[[this.index.h, this.index.v, this.index.f]] = this;
		}
	}

	Slide.prototype.goto = function goto() {
		if (Browsercast.isImpress())
			impress().goto(this.index);
		if (Browsercast.isReveal())
			Reveal.slide(this.index.h, this.index.v, this.index.f);
		console.log(Browsercast.isReveal());
	};

	Slide.prototype.focus = function focus(state) {
		if (last_slide instanceof Slide)
			last_slide.blur();

		last_slide = this;
		this.marker.setActive();
		if (state !== false)
			this.goto();
		this.playAudio();
	};

	Slide.prototype.playAudio = function playAudio() {
		Audio.stop();
		if (Browsercast.canPlay()) {
			if (isNaN(this.start) === false && isNaN(this.end) === false && (this.end - this.start) > 0)
				Audio.play(this.start, this.end);
		}
	};

	Slide.prototype.blur = function blur() {
		this.marker.setInactive();
	};

	Slide.prototype.getAudioInfo = function getAudioInfo() {
		this.start = parseFloat(this.elem.getAttribute('data-bc-start'));
		this.end = parseFloat(this.elem.getAttribute('data-bc-end'));
	};

	/**
	 * Marker Object - UI element
	 */
	function Marker(slide) {
		this.slide = slide;
		this.marker = document.createElement('div');
		this.marker.className = 'cue';
		this.marker.addEventListener('click', function focus() {
			slide.focus();
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


	//*************************************************************************
	//*************************************************************************

	/**
	 * Browsercast Audio Manager
	 */

	var Audio = (function Audio() {
		var audiocasts = [];
		var audio_map = {};
		var paused_tracks = [];
		var event = null;

		var pause = function pause() {
			for (var i=0; i<audiocasts.length; i++) {
				if (audiocasts[i].paused === false) {
					audiocasts[i].pause();
					paused_tracks.push(audiocasts[i]);
				}
			}
			if (event instanceof Event)
				event.pause();
		};

		var resume = function resume() {
			for (var i=0; i<paused_tracks.length; i++) {
				paused_tracks[i].play();
			}
			paused_tracks = [];
			if (event instanceof Event)
				event.resume();
		};

		var stop = function stop() {
			for (var i=0; i<audiocasts.length; i++) {
				audiocasts[i].pause();
			}
			if (event instanceof Event)
				event.stop();
		};

		var play = function play(start, end) {
			if (event instanceof Event)
				event.stop();
			audiocasts[0].currentTime = start;
			audiocasts[0].play();
			event = new Event(function() {
				audiocasts[0].pause();
				Browsercast.advance();
			}, (end - start) * 1000);
		};

		var init = function init() {
			var container = document.getElementById('bc-audio-tracks');
			var elems = container.querySelectorAll('audio');
			for (var i=0; i<elems.length; i++) {
				var len = audiocasts.push(elems[i]);
				var name = elems[i].getAttribute('data-bc-name');
				if (name) {
					audio_map[name] = audiocasts[len - 1];
				}
			}
		};

		return {
			init : init,
			stop : stop,
			play : play,
			pause : pause,
			resume : resume
		};
	})();

	//*************************************************************************
	//*************************************************************************

	/**
	 * Event listeners
	 */

	var FrameworkEvents = (function FrameworkEvents() {

		// Impress events
		function stepEnter(event) {
			if (slide_map[event.target.id] instanceof Slide)
				slide_map[event.target.id].focus();
		}

		function stepLeave(event) {
			last_slide.blur();
		}

		// Reveal events
		function getSlideInfo() {
			var indices = Reveal.getIndices();
			var slide = slide_map[[indices.h, indices.v, indices.f]];
			if (slide instanceof Slide)
				slide.focus(false);
		}

		function overviewShown(event) {
			Browsercast.toggleOverview(true);
		}

		function overviewHidden(event) {
			Browsercast.toggleOverview(false);
			getSlideInfo();
		}

		var init = function init() {
			if (Browsercast.isImpress()) {
				document.addEventListener("impress:stepenter", stepEnter);
				document.addEventListener("impress:stepleave", stepLeave);
			}

			if (Browsercast.isReveal()) {
				Reveal.addEventListener("slidechanged", getSlideInfo);
				Reveal.addEventListener("fragmentshown", getSlideInfo);
				Reveal.addEventListener("fragmenthidden", getSlideInfo);
				Reveal.addEventListener("overviewshown", overviewShown);
				Reveal.addEventListener("overviewhidden", overviewHidden);
			}
		};

		var stop = function stop() {
			if (Browsercast.isImpress()) {
				document.removeEventListener("impress:stepenter", stepEnter);
				document.removeEventListener("impress:stepleave", stepLeave);
			}

			if (Browsercast.isReveal()) {
				Reveal.removeEventListener("slidechanged", getSlideInfo);
				Reveal.removeEventListener("fragmentshown", getSlideInfo);
				Reveal.removeEventListener("fragmenthidden", getSlideInfo);
				Reveal.removeEventListener("overviewshown", overviewShown);
				Reveal.removeEventListener("overviewhidden", overviewHidden);
			}
		};

		return {
			init : init,
			stop : stop
		};
	})();

	/**
	 * Start Browsercast
	 */

	function initPresentation(config, callback) {
		initCallback = callback;
		Audio.init();
		Browsercast.init(config);
		FrameworkEvents.init();
	}

	function uninitialize() {
		Audio.stop();
		FrameworkEvents.stop();
		Browsercast.reset();
	}

	global.Browsercast = {
		initialize: initPresentation,
		uninitialize: uninitialize
	};

})(window, window.document);