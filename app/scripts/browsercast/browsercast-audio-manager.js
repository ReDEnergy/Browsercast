(function BrowsercastAudioManager(global, document) {
	"use strict";

	/**
	 * AudioManager fragment
	 */
	function AudioFragment(start, length, delay) {
		this.startTime = start;
		this.length = length * 1000;
		this.delay = delay * 1000;
		this.total = this.length + this.delay;

		// TODO - add support for more than 1 audio cast
		var trackID = 0;
		this.audiocast = AudioManager.getCast(trackID, undefined);
	}

	AudioFragment.prototype.play = function play() {

		var start = function start() {
			console.log("Play Fragment", this);
			this.audiocast.currentTime(this.startTime);
			this.audiocast.play();
			AudioManager.registerEvent(stop, this.length);
		}.bind(this);

		var stop = function stop() {
			console.log("Stop Fragment", this);
			this.audiocast.pause();
		}.bind(this);

		AudioManager.registerEvent(start, this.delay);
	};

	AudioFragment.prototype.update = function update(start, length, delay) {
		this.startTime = start;
		this.length = length * 1000;
		this.delay = delay * 1000;
		this.total = this.length + this.delay;
	};

	/**
	 * Browsercast Audio Manager
	 */

	var AudioManager = (function AudioManager() {
		var audiocasts = [];
		var audiocast_map = {};
		var events = [];

		var reset = function reset() {
			audiocasts = [];
			audiocast_map = {};
			events = [];
		};

		var getCast = function getCast(id, name) {
			if (audiocasts[id] instanceof Popcorn)
				return audiocasts[id];
			if (audiocast_map[name] instanceof Popcorn)
				return audiocasts[id];
			return audiocasts[0];
		};

		var init = function init() {
			clearEvents();
			var container = document.getElementById('bc-audio-tracks');
			var elems = container.querySelectorAll('audio');
			for (var i=0; i<elems.length; i++) {
				console.log("AUDIO SRC", elems[i].src);
				audiocasts.push(Popcorn(elems[i]));
				var name = elems[i].getAttribute('data-name');
				if (name) {
					audiocast_map[name] = i;
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
			events.push(event);
			console.log("Event: ID", event, "trigger in:", delay);
		};

		var clearEvents = function() {
			pauseAll();
			for (var i=0; i<events.length; i++) {
				clearTimeout(events[i]);
			}
			events = [];
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
	 * Start Browsercast
	 */
	var WorkingFragment;

	var init = function init() {
		AudioManager.init();
		WorkingFragment = new AudioFragment(0, 5, 0);
	};

	var getTrackInfo = function getTrackInfo(id) {
		return AudioManager.getCast(id);
	};

	var set = function set(start, length, delay) {
		WorkingFragment.update(start, length, delay);
	};

	var play = function play() {
		AudioManager.clearEvents();
		WorkingFragment.play();
	};

	var stop = function stop() {
		AudioManager.clearEvents();
	};

	global.BcAudio = {
		set: set,
		init: init,
		play: play,
		stop: stop,
		getTrackInfo: getTrackInfo
	};

})(window, window.document);