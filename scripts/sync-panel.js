"use strict";

var load_audio = document.getElementById('load-audio');
var load_audio_body = document.getElementById('load-audio-body');
var load_audio_preview = document.getElementById('load-audio-preview');
var load_audio_source = document.getElementById('load-audio-source');
var load_audio_ok = document.getElementById('load-audio-ok');
var last_audio_source_value = '';

load_audio_source.addEventListener('keyup', loadAudioSource);

load_audio_preview.addEventListener('loadeddata', function() {
	load_audio.setAttribute('data-ok', '');
});

load_audio_body.addEventListener('click', stopPropagation);

load_audio_ok.addEventListener('click', function() {
	load_audio_btn.toggle(false);
});

function loadAudioSource() {
	if (last_audio_source_value !== load_audio_source.value) {
		last_audio_source_value = load_audio_source.value;
		load_audio.removeAttribute('data-ok');
	}
	load_audio_preview.src = load_audio_source.value;
}

function openLoadAudio() {
	sync_audio_btn.toggle(false);
	unsetDeleteEvent();
}

function closeLoadAudio() {
	load_audio.removeAttribute('data-ok');
	setDeleteEvent();
}

var load_audio_btn = new ToggleButton(load_audio, openLoadAudio, closeLoadAudio);

/*
 * Sync audio
 */

function markTransition(e) {
	if (e.keyCode === 84) {
		Reveal.next();
	}
};

function startSync() {
	load_audio_btn.toggle(false);
	Reveal.slide(0, 0);
	document.addEventListener('keydown', markTransition);
}

function endSync() {
	document.removeEventListener('keydown', markTransition);
}

var sync_audio = document.getElementById('sync-audio');
var sync_audio_btn = new ToggleButton(sync_audio, startSync, endSync);

var sync_area = document.getElementById('sync-area');
sync_area.addEventListener('click', stopPropagation);



