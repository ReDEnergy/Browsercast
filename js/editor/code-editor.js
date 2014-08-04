define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var Ace = require('editor/ace');
	var ToggleButton = require('component/toggle-button');
	var AppMode = require('ui/app-mode');
	var BeautifyHTML = require('beautify-html');
	var VisualEditor = require('editor/visual-editor');
	var RevealUtils = require('reveal/reveal-utils');

	var app;
	var HTMLEditor;
	var CSSEditor;
	var last_change;

	var editorShow = function editorShow() {
		RevealUtils.triggerLayoutChange(300);
		app.setAttribute('data-code-editor', '');
		Reveal.addEventListener('slidechanged', updateHtmlEditor);
		Reveal.addEventListener('fragmentshown', updateHtmlEditor);
		Reveal.addEventListener('fragmenthidden', updateHtmlEditor);
		HTMLEditor.addEventListener('change', updateSlidePreview);
		updateHtmlEditor();
	};

	var editorHide = function editorHide() {
		RevealUtils.triggerLayoutChange(300);
		app.removeAttribute('data-code-editor');
		Reveal.removeEventListener('slidechanged', updateHtmlEditor);
		Reveal.removeEventListener('fragmentshown', updateHtmlEditor);
		Reveal.removeEventListener('fragmenthidden', updateHtmlEditor);
		HTMLEditor.removeEventListener('change', updateSlidePreview);
	};

	function updateSlidePreview() {
		if (VisualEditor.getState()) return;
		if (((new Date()) - last_change) > 1000) {
			Reveal.getCurrentSlide().innerHTML = HTMLEditor.getValue();
		}
	}

	function updateHtmlEditor() {
		last_change = new Date();
		HTMLEditor.setValue(BeautifyHTML.html_beautify(Reveal.getCurrentSlide().innerHTML));
		HTMLEditor.clearSelection();
	}

	var getState = function getState() {
		return CEC;
	};

	var init = function init() {
		app = document.getElementById('app');

		HTMLEditor = Ace.create('slide-editor-html', 'html');
		CSSEditor = Ace.create('slide-editor-css', 'css');

		var toggle_editor = document.getElementById('toggle-editor');
		toggle_editor = new ToggleButton(toggle_editor, editorShow, editorHide);

	};

	// Public API
	exports.init = init;
	exports.getState = getState;
	exports.update = updateHtmlEditor;

});