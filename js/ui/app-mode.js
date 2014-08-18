define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var ToggleButton = require('component/toggle-button');
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

	// Code Editor button
	var showEditor = function showEditor() {
		app.setAttribute('data-code-editor', '');
		RevealUtils.triggerLayoutChange(400);;
	};

	var hideEditor = function hideEditor() {
		app.removeAttribute('data-code-editor');
		RevealUtils.triggerLayoutChange(400);;
	};

	var toggle_editor = document.getElementById('toggle-editor');
	var toggle_editor_btn = new ToggleButton(toggle_editor, showEditor, hideEditor);

	// Sync Panel button
	var openSyncPanel = function openSyncPanel() {
		GlobalEvent.emit('sync-panel-open');
		app.setAttribute('data-sync-audio', '');
		RevealUtils.triggerLayoutChange(400);;
	};

	var hideSyncPanel = function hideSyncPanel() {
		app.removeAttribute('data-sync-audio');
		RevealUtils.triggerLayoutChange(400);;
	};

	var toggle_sync = document.getElementById('toggle-sync');
	var toggle_sync_btn = new ToggleButton(toggle_sync, openSyncPanel, hideSyncPanel);

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

	// Public API
	exports = {
		setMode : setMode
	};
});