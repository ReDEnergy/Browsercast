"use strict";

var tracks = document.getElementById('bc-audio-tracks');

var load_audio = document.getElementById('load-audio');
var load_audio_body = document.getElementById('load-audio-body');
var load_audio_preview = document.getElementById('load-audio-preview');
var load_audio_source = document.getElementById('load-audio-source');
var load_audio_ok = document.getElementById('load-audio-ok');
var last_audio_source_value = '';

load_audio_source.addEventListener('keyup', loadAudioSource);

load_audio_preview.addEventListener('loadeddata', function() {
	load_audio.setAttribute('data-state', 'ok');
});

load_audio_preview.addEventListener('error', function() {
	load_audio.setAttribute('data-state', 'error');
});

load_audio_body.addEventListener('click', stopPropagation);

load_audio_ok.addEventListener('click', function() {
	load_audio_btn.toggle(false);
	var audio = tracks.getElementsByTagName('audio')[0];
	audio.src = load_audio_preview.src;
	console.log(audio, load_audio_preview.duration);
	timeline.setTimeFrame(load_audio_preview.duration);
});

function loadAudioSource() {
	if (last_audio_source_value !== load_audio_source.value) {
		last_audio_source_value = load_audio_source.value;
		load_audio.setAttribute('data-state', 'loading');
		load_audio_preview.src = load_audio_source.value;
	}
}

function openLoadAudio() {
	sync_audio_btn.toggle(false);
	unsetDeleteEvent();
}

function closeLoadAudio() {
	load_audio.removeAttribute('data-state');
	setDeleteEvent();
}

var load_audio_btn = new ToggleButton(load_audio, openLoadAudio, closeLoadAudio);

/*
 * Sync audio
 */

function openSync() {
	load_audio_btn.toggle(false);
	sync_audio_source.src = load_audio_preview.src;
}

function resetSync() {
	timeline.removeAllMarks();
	Reveal.slide(0, 0, -1);
}

function startSync() {
	Reveal.removeEventListeners();
	document.addEventListener('keydown', markTransition);
	sync_audio_source.currentTime = timeline.currentTime;
	timeline.play();
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

function markTransition(e) {
	if (e.keyCode === 84) {
		if (Reveal.isLastSlide() && Reveal.availableFragments().next === false) {
			sync_play_btn.toggle(false);
		}
		timeline.addMark(sync_audio_source.currentTime, Reveal.getIndices());
	}
}

function transitionEvent(data) {
	Reveal.slide(data.h, data.v, data.f);
	if (Reveal.isLastSlide() && Reveal.availableFragments().next === false) {
		sync_play_btn.toggle(false);
	}
}

function transitionEventNext(data) {
	if (Reveal.isLastSlide() && Reveal.availableFragments().next === false) {
		sync_play_btn.toggle(false);
	}
	Reveal.slide(data.h, data.v, data.f);
	Reveal.next();
}

var sync_area = document.getElementById('sync-area');
var sync_audio = document.getElementById('sync-audio');
var sync_audio_btn = new ToggleButton(sync_audio, openSync, endSync);
var sync_audio_source = document.getElementById('sync-audio-source');
var sync_timeline = document.getElementById('sync-timeline');
var sync_reset = document.getElementById('sync-reset');
var sync_play = document.getElementById('sync-play');

var timeline = new Timeline();
sync_timeline.appendChild(timeline.timeline);

timeline.computeLayout();

sync_area.addEventListener('click', stopPropagation);
sync_reset.addEventListener('click', resetSync);

var sync_play_btn = new ToggleButton(sync_play, startSync, endSync);


timeline.on('pastMark', transitionEventNext);
timeline.on('futureMark', transitionEvent);
timeline.on('mark', transitionEventNext);
timeline.on('pause', function() {
	sync_play_btn.toggle(false);
});

