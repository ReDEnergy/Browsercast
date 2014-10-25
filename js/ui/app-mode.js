define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var PanelManager = require('ui/panel-manager');
	var RevealUtils = require('reveal/reveal-utils');
	var VisualEditor = require('editor/visual-editor');
	var GlobalEvent = require('core/GlobalEvents');

	// API
	var app;

	function enterPreview() {
		GlobalEvent.emit('enter-preview');
		setMode(MODES.PREVIEW);
		VisualEditor.disable();
		PanelManager.closeAll();
		RevealUtils.triggerLayoutChange(400);;

		// Solved the bug with vertical slides
		// TODO - might be a browsercast-reveal bug
		var reveal = document.querySelector('#scene .reveal');
		RevealUtils.cleanupReveal(reveal);
		RevealUtils.initReveal();


		var indices = Reveal.getIndices();

		Browsercast.initialize({
			framework: 'reveal.js'
		}, function() {
			Reveal.slide(indices.h, indices.v, indices.f);
		});
	}

	function leavePreview() {
		GlobalEvent.emit('leave-preview');
		setMode(MODES.EDITOR);
		VisualEditor.enable();
		RevealUtils.triggerLayoutChange(400);;
		Browsercast.uninitialize();
	}

	var MODES = {
		AUDIO_SYNC: 'sync-audio',
		PREVIEW: 'preview',
		EDITOR: 'editor'
	};

	var setMode = function setMode(mode) {
		app.setAttribute('data-mode', mode);
	};

	var app = document.getElementById('app');
	var enter_preview = document.getElementById('enter-preview');
	var leave_preview = document.getElementById('leave-preview');
	enter_preview.addEventListener('click', enterPreview);
	leave_preview.addEventListener('click', leavePreview);

	GlobalEvent.on('code-editor', function(value) {
		value ? app.setAttribute('data-code-editor', '') : app.removeAttribute('data-code-editor');
	});

	GlobalEvent.on('sync-panel', function(value) {
		value ? app.setAttribute('data-sync-audio', '') : app.removeAttribute('data-sync-audio');
	});

	// Public API
	exports.setMode = setMode;
});