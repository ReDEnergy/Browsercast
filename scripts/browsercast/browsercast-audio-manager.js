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
		var AudioManagercasts = [];
		var AudioManager_map = {};
		var AudioManager_events = [];

		var getCast = function getCast(id, name) {
			if (AudioManagercasts[id] instanceof Popcorn)
				return AudioManagercasts[id];
			if (AudioManager_map[name] instanceof Popcorn)
				return AudioManagercasts[id];
			return AudioManagercasts[0];
		};

		var init = function init() {
			var container = document.getElementById('bc-audio-tracks');
			var elems = container.querySelectorAll('audio');
			for (var i=0; i<elems.length; i++) {
				AudioManagercasts.push(Popcorn(elems[i]));
				var name = elems[i].getAttribute('data-name');
				if (name) {
					AudioManager_map[name] = i;
				}
			}
		};

		var pauseAll = function pauseAll() {
			for (var i=0; i<AudioManagercasts.length; i++) {
				AudioManagercasts[i].pause();
			}
		};

		var registerEvent = function(callback, delay) {
			var event = window.setTimeout(callback, delay);
			AudioManager_events.push(event);
			console.log("Event: ID", event, "trigger in:", delay);
		};

		var clearEvents = function() {
			pauseAll();
			for (var i=0; i<AudioManager_events.length; i++) {
				clearTimeout(AudioManager_events[i]);
			}
			AudioManager_events = [];
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
	var TestFragment;

	var init = function init() {
		AudioManager.init();
		TestFragment = new AudioFragment(0, 5, 0);
	};

	var getTrackInfo = function getTrackInfo(id) {
		return AudioManager.getCast(id);
	};

	var set = function set(start, length, delay) {
		TestFragment.update(start, length, delay);
	};

	var play = function play() {
		AudioManager.clearEvents();
		TestFragment.play();
	};

	var stop = function stop() {
		AudioManager.clearEvents();
	};

	global.BcAudio = {
		set: set,
		init: init,
		play: play,
		stop: stop,
		getTrackInfo: getTrackInfo,
		Fragment: AudioFragment
	};

})(window, window.document);