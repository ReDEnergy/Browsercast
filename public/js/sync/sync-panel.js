define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var ToggleButton = require('component/toggle-button');
	// var Timeline = require('component/timeline');
	var DelayedEvent = require('core/delayed-event');
	var SaveSync = require('sync/save-sync');
	var Utils = require('utils');

	// API
	var load_audio = document.getElementById('load-audio');
	var load_audio_body = document.getElementById('load-audio-body');
	var load_audio_preview = document.getElementById('load-audio-preview');
	var load_audio_source = document.getElementById('load-audio-source');
	var load_audio_ok = document.getElementById('load-audio-ok');
	var last_audio_source_value = '';
	
	var LoadEvent = new DelayedEvent(loadAudioSource, 300);

	load_audio_source.addEventListener('keyup', function() {
		LoadEvent.resetTimer();
	});

	load_audio_preview.addEventListener('loadeddata', function() {
		load_audio.setAttribute('data-state', 'ok');
	});

	load_audio_preview.addEventListener('error', function() {
		load_audio.setAttribute('data-state', 'error');
	});

	load_audio_body.addEventListener('click', Utils.stopPropagation);


	load_audio_ok.addEventListener('click', function() {
		load_audio_btn.toggle(false);
		timeline.setTimeFrame(load_audio_preview.duration);
		load_audio_preview.pause();
		sync_audio_source.src = load_audio_preview.src;
	});

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

	var load_audio_btn = new ToggleButton(load_audio, openLoadAudio, closeLoadAudio);

	/*
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

	var sync_area = document.getElementById('sync-area');
	var sync_audio = document.getElementById('sync-audio');
	var sync_audio_source = document.getElementById('sync-audio-source');
	var sync_timeline = document.getElementById('sync-timeline');
	var sync_reset = document.getElementById('sync-reset');
	var sync_save = document.getElementById('sync-save');

	var timeline = new Timeline(sync_timeline);

	sync_area.addEventListener('click', Utils.stopPropagation);
	sync_reset.addEventListener('click', resetSync);
	sync_save.addEventListener('click', function() {
		var tracks = [];
		
		// Get each track
		var track = [];
		track.push(sync_audio_source.src);
		track.push([0, sync_audio_source.duration, 0]);
		
		tracks.push(track);

		var container = document.querySelector('#bc-audio code');
		container.textContent = JSON.stringify(tracks);
		console.log(JSON.stringify(tracks)); 

		SaveSync.save(timeline.events);
	});

	timeline.on('play', startSync);
	timeline.on('pause', endSync);
	timeline.on('pastEvent', transitionEventNext);
	timeline.on('futureEvent', transitionEvent);
	timeline.on('event', transitionEventNext);
});
