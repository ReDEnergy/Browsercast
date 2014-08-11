// TODO - autoplay feature + stop on space + resume

(function Browsercast(global, document) {
	"use strict";

	var state_map = [];
	var activeState;
	var states = [];

	// Callback after library initialization
	var initCallback;

	// Timeline Object
	var timeline;

	var Browsercast = (function() {
		// Events
		var handleKeyDown = function handleKeyDown(e) {
			if (e.keyCode === 82 || e.keyCode === 83) {
				timeline.playing ? timeline.pause() : timeline.play();
			}
		};

		// Init presentation
		var getStates = function getStates() {
			function listenStateEvents() {
				Reveal.addEventListener("slidechanged", recordSlide);
				Reveal.addEventListener("fragmentshown", recordFragment);
			}

			function unlistenStateEvents() {
				Reveal.removeEventListener("slidechanged", recordSlide);
				Reveal.removeEventListener("fragmentshown", recordFragment);
			}

			function addState(domElem) {
				var slide = new State(domElem);
				var len = states.push(slide);
				if (len - 2 >= 0) {
					var prev = states[len - 2];
					prev.next = slide;
					slide.prev = prev;
				}
			} 

			function recordSlide(event) {
				addState(event.currentSlide);
				triggerEvent();
			}

			function recordFragment(event) {
				addState(event.fragment);
				triggerEvent();
			}

			function returnToFirstSlide() {
				Reveal.addEventListener("slidechanged", goLeftTop);
				goLeftTop();
			}
			
			function goLeftTop() {
				if (Reveal.isFirstSlide()) {
					Reveal.removeEventListener("slidechanged", goLeftTop);
					initCallback();
				}
				else {
					var idx = Reveal.getIndices();
					Reveal.slide(idx.h - 1, 0, -1);
				}
			}
			
			function finish() {
				unlistenStateEvents();
				returnToFirstSlide();
				checkStates();
				initTimeline();
			}
		
			function triggerEvent() {
				if (Reveal.isLastSlide() && Reveal.availableFragments().next === false) {
					finish();
				}
				else {
					Reveal.next();
				}
			}
			
			// TODO bug when just 1 slide
			Reveal.slide(10000, 0, -1);
			listenStateEvents();
			Reveal.slide(0, 0, -1);
		};

		var checkStates = function checkStates() {
			var len = states.length;
			var currentTime = 0;

			for (var i = 0; i <len; i++) {
				if (isNaN(states[i].startTime))
					states[i].startTime = currentTime;
				else
					currentTime = states[i].startTime; 

				if (isNaN(states[i].endTime)) {
					if (states[i + 1] && !isNaN(states[i+1].startTime))
						states[i].endTime = states[i+1].startTime;
					else
						states[i].endTime = currentTime; 
				}
			}
			// console.log("States", states);
			// console.log("States MAP", state_map);
		};

		var initTimeline = function initTimeline() {
			var browsercast = document.getElementById('browsercast');
			var timelineElem = document.createElement('div');
			timelineElem.id = 'bc-timeline';
			timelineElem.textContent = '';
			browsercast.appendChild(timelineElem);

			timeline = new Timeline(timelineElem);
			timeline.setTimeFrame(states[states.length - 1].endTime);
			
			states.forEach(function(slide) {
				timeline.addEvent(slide.startTime, slide);
			});

			function focusState(slide) {
				slide.focus();
			}

			function focusPrevState(slide) {
				if (slide.prev)
					slide.prev.focus();
			}
						
			timeline.on('event', focusState);
			timeline.on('futureEvent', focusPrevState);
			timeline.on('pastEvent', focusState);
			fadeTimeline(timeline);
		};		

		// Add fade effect for markers
		var fadeTimeline = function fadeTimeline(timeline) {
			var browsercast = document.getElementById('browsercast');
			var timeout = null;
			function resetTimeout() {
				clearTimeout(timeout);
				timeout = setTimeout(function() {
					browsercast.setAttribute('data-hidden', '');
				}, 3000);
				browsercast.removeAttribute('data-hidden');
			}

			var handleMouseMove = function handleMouseMove(e) {
				resetTimeout();
			};

			timeline.on('play', function() {
				document.addEventListener('mousemove', handleMouseMove);
				resetTimeout();
			});
			timeline.on('pause', function() {
				resetTimeout();
				clearTimeout(timeout);
				document.removeEventListener('mousemove', handleMouseMove);
			});
		};
		
		var reset = function reset() {
			Reveal.addEventListeners();
			states = [];
			state_map = [];
			document.removeEventListener('keydown', handleKeyDown);
			
			var timelineElem = document.getElementById('bc-timeline');
			if (timelineElem)
				timelineElem.parentElement.removeChild(timelineElem);
		};
				
		// TODO add config obj
		var init = function init(obj) {
			reset();
			getStates();
			document.addEventListener('keydown', handleKeyDown);
		};		

		return {
			init : init,
			reset : reset
		};

	})();

	//*************************************************************************
	//*************************************************************************

	/*
	 * State Object
	 */
	function State(elem) {
		this.index = elem.id;
		this.elem = elem;
		this.getTimeInfo();
		this.prev = null;
		this.next = null;

		this.index = Reveal.getIndices();
		state_map[[this.index.h, this.index.v, this.index.f]] = this;
	}

	State.prototype.activate = function activate() {
		if (activeState === this)
			return;
		activeState = this;
		if (timeline.currentTime < this.startTime || timeline.currentTime >= this.endTime) {
			timeline.pause();
			timeline.setCurrentTime(this.startTime);
		}
	};

	State.prototype.focus = function focus() {
		Reveal.slide(this.index.h, this.index.v, this.index.f);
	};

	State.prototype.getTimeInfo = function getTimeInfo() {
		this.startTime = parseFloat(this.elem.getAttribute('data-bc-start'));
		this.endTime = parseFloat(this.elem.getAttribute('data-bc-end'));
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

	//*************************************************************************
	//*************************************************************************

	/**
	 * Browsercast Audio Manager
	 */

	var TrackEvents = (function TrackEvents() {
		var events = [];
		
		var add = function add(audioFragmetn) {
			events.push(audioFragmetn);
		};
		
		var clear = function clear() {
			events = [];
		};

		var update = function update(time) {
			events.forEach(function(event) {
				event.play(time);
			});
		};

		var stop = function stop() {
			events.forEach(function(event) {
				event.pause();
			});
		};

		var init = function init() {
			timeline.on('play', function() {
				timeline.on('timeUpdate', update);
			});
			timeline.on('pause', function() {
				timeline.off('timeUpdate', update);
				stop();
			});
		};
		
		return {
			add: add,
			init: init,
			stop: stop,
			clear: clear,
			events: function () { return events;},
		};
	})();
	
	function AudioFragment(audio, info) {
		this.audio = audio;
		this.playFrom = parseFloat(info[0]);
		this.playTo = parseFloat(info[1]);
		this.startTime = parseFloat(info[2]);
		this.endTime = this.startTime + (this.playTo - this.playFrom);
		this.event = null;
	}
	
	AudioFragment.prototype.play = function play(time) {
		if (this.audio.paused === false)
			return;
		if ((time >= this.startTime) && (time < this.endTime)) {
			this.audio.currentTime = this.playFrom + (time - this.startTime);
			this.audio.play();
			this.event = new Event(this.pause.bind(this), (this.endTime - time) * 1000);
		}
	};

	AudioFragment.prototype.pause = function pause() {
		if (this.event)
			this.event.stop();
		this.audio.pause();
	};

	var Audio = (function Audio() {
		function registerAudio(audioInfo) {
			var audio = document.createElement('audio');
			audio.src = audioInfo[0];
			audio.addEventListener('loadeddata', function() {
			});
			
			for (var i=1; i<audioInfo.length; i++) {
				TrackEvents.add(new AudioFragment(audio, audioInfo[i]));
			}
		}

		var init = function init() {
			TrackEvents.clear();
			var container = document.querySelector('#bc-audio code');
			var tracks = JSON.parse(container.textContent);
			tracks.forEach(registerAudio);	
		};

		return {
			init : init
		};
	})();

	//*************************************************************************
	//*************************************************************************

	/**
	 * Event listeners
	 */

	var FrameworkEvents = (function FrameworkEvents() {

		// Reveal events
		function setState() {
			var indices = Reveal.getIndices();
			var slide = state_map[[indices.h, indices.v, indices.f]];
			slide.activate();
		}

		var init = function init() {
			Reveal.addEventListener("slidechanged", setState);
			Reveal.addEventListener("fragmentshown", setState);
			Reveal.addEventListener("fragmenthidden", setState);
		};

		var stop = function stop() {
			Reveal.removeEventListener("slidechanged", setState);
			Reveal.removeEventListener("fragmentshown", setState);
			Reveal.removeEventListener("fragmenthidden", setState);
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
		initCallback = typeof callback === 'function' ? callback : function() {};
		Audio.init();
		Browsercast.init(config);
		FrameworkEvents.init();
		TrackEvents.init();
	}

	function uninitialize() {
		timeline.pause();
		timeline.clearEvents();
		FrameworkEvents.stop();
		Browsercast.reset();
	}

	global.Browsercast = {
		initialize: initPresentation,
		uninitialize: uninitialize
	};

})(window, window.document);