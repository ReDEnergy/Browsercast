define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var ToggleButton = require('component/toggle-button');
	var Timeline = require('component/timeline');
	var DelayedEvent = require('core/DelayedEvent');
	var GlobalEvent = require('core/GlobalEvents');
	var RevealUtils = require('reveal/reveal-utils');
	var SaveSync = require('sync/save-sync');
	var DomUtils = require('utils');
	var NavMenu = require('ui/nav-menu');

	// API
	var load_audio;
	var load_audio_body;
	var load_audio_preview;
	var load_audio_source;
	var load_audio_ok;
	var last_audio_source_value = '';
	var load_audio_btn;
	var LoadEvent;
	var sync_area;
	var sync_audio;
	var sync_audio_source;
	var sync_timeline;
	var sync_reset;
	var sync_save;
	var timeline;

	/**************************************************************************/

	function setEvents() {
		load_audio_source.addEventListener('keyup', function() {
			LoadEvent.resetTimer();
		});

		load_audio_preview.addEventListener('loadeddata', function() {
			load_audio.setAttribute('data-state', 'ok');
		});

		load_audio_preview.addEventListener('error', function() {
			load_audio.setAttribute('data-state', 'error');
		});

		load_audio_body.addEventListener('click', DomUtils.stopPropagation);

		load_audio_ok.addEventListener('click', function() {
			load_audio_btn.toggle(false);
			load_audio_preview.pause();
			setAudioSource(load_audio_preview.src);
		});

		sync_area.addEventListener('click', DomUtils.stopPropagation);
		sync_reset.addEventListener('click', resetSync);

		sync_save.addEventListener('click', function() {
			var info = this.querySelector('.info');
			info.textContent = 'saving...';
			info.setAttribute('data-visible', '');

			var tracks = [];

			// Get each track
			var track = [];
			track.push(sync_audio_source.src);
			track.push([0, sync_audio_source.duration, 0]);

			tracks.push(track);

			var container = document.querySelector('#bc-audio code');
			container.textContent = JSON.stringify(tracks);
			console.log(JSON.stringify(tracks));


			SaveSync.save(timeline.events, function() {
				info.textContent = 'done';
				setTimeout(function() {
					info.removeAttribute('data-visible');
				}, 1000);
			});
		});
	}

	function setAudioSource(source) {
		load_audio_source.value = source;
		sync_audio_source.src = source;
		sync_audio_source.addEventListener('loadeddata', function() {
			timeline.setTimeFrame(sync_audio_source.duration);
		});
	}

	function loadAudioSource() {
		if (last_audio_source_value !== load_audio_source.value) {
			last_audio_source_value = load_audio_source.value;
			load_audio.setAttribute('data-state', 'loading');
			load_audio_preview.src = load_audio_source.value;
		}
	}

	function openLoadAudio() {
		// TODO - unset Delete Key binding;
	}

	function closeLoadAudio() {
		load_audio.removeAttribute('data-state');
		// TODO - can set Delete Key binding;
	}


	/**
	 * Sync audio
	 */

	function resetSync() {
		timeline.pause();
		timeline.clearEvents();
		Reveal.slide(0, 0, -1);
	}

	function startSync() {
		Reveal.removeEventListeners();
		document.addEventListener('keydown', markTransition);
		sync_audio_source.currentTime = timeline.currentTime;
		sync_audio_source.play();
		// timeline.off('pastMark', transitionEvent);
		// timeline.off('futureMark', transitionEvent);
	}

	function endSync() {
		Reveal.addEventListeners();
		document.removeEventListener('keydown', markTransition);
		timeline.pause();
		sync_audio_source.pause();
	}

	function testIfSyncEnd() {
		if (Reveal.isLastSlide() && Reveal.availableFragments().next === false) {
			timeline.pause();
		}
	}

	function markTransition(e) {
		if (e.keyCode === 84) {
			testIfSyncEnd();
			timeline.addEvent(sync_audio_source.currentTime, Reveal.getIndices());
		}
	}

	function transitionEvent(data) {
		Reveal.slide(data.h, data.v, data.f);
		testIfSyncEnd();
	}

	function transitionEventNext(data) {
		testIfSyncEnd();
		Reveal.slide(data.h, data.v, data.f);
		Reveal.next();
	}

	// Sync Panel button
	var openSyncPanel = function openSyncPanel() {
		GlobalEvent.emit('sync-panel', true);
		RevealUtils.triggerLayoutChange(400);;
	};

	var hideSyncPanel = function hideSyncPanel() {
		GlobalEvent.emit('sync-panel', false);
		RevealUtils.triggerLayoutChange(400);;
	};

	/*
	 * Module Init
	 */
	var init = function init() {

		var options = {
			title: 'Audio Panel',
			icon: 'music',
			toggleOn: openSyncPanel,
			toggleOff: hideSyncPanel
		};
		NavMenu.createButton(options);

		var container = document.getElementById('sync-panel');
		container.innerHTML = AppTemplate['sync-panel']();

		load_audio = document.getElementById('load-audio');
		load_audio_body = document.getElementById('load-audio-body');
		load_audio_preview = document.getElementById('load-audio-preview');
		load_audio_source = document.getElementById('load-audio-source');
		load_audio_ok = document.getElementById('load-audio-ok');
		last_audio_source_value = '';

		LoadEvent = new DelayedEvent(loadAudioSource, 300);
		load_audio_btn = new ToggleButton(load_audio, openLoadAudio, closeLoadAudio);

		sync_area = document.getElementById('sync-area');
		sync_audio = document.getElementById('sync-audio');
		sync_audio_source = document.getElementById('sync-audio-source');
		sync_timeline = document.getElementById('sync-timeline');
		sync_reset = document.getElementById('sync-reset');
		sync_save = document.getElementById('sync-save');

		timeline = new Timeline(sync_timeline);

		timeline.on('play', startSync);
		timeline.on('pause', endSync);
		timeline.on('pastEvent', transitionEventNext);
		timeline.on('futureEvent', transitionEvent);
		timeline.on('event', transitionEventNext);

		setEvents();
	};

	// Public API
	exports.init = init;
	exports.setAudioSource = setAudioSource;
});
