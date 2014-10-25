define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var Ace = require('editor/ace');
	var AppMode = require('ui/app-mode');
	var BeautifyHTML = require('beautify-html');
	var VisualEditor = require('editor/visual-editor');
	var RevealUtils = require('reveal/reveal-utils');
	var ToggleButton = require('component/toggle-button');
	var GlobalEvent = require('core/GlobalEvents');
	var NavMenu = require('ui/nav-menu');

	// Private API
	var HTMLEditor;
	var CSSEditor;
	var last_change;

	var editorShow = function editorShow() {
		RevealUtils.triggerLayoutChange(400);;
		GlobalEvent.emit('code-editor', true);
		Reveal.addEventListener('slidechanged', updateHtmlEditor);
		Reveal.addEventListener('fragmentshown', updateHtmlEditor);
		Reveal.addEventListener('fragmenthidden', updateHtmlEditor);
		HTMLEditor.addEventListener('change', updateSlidePreview);
		updateHtmlEditor();
	};

	var editorHide = function editorHide() {
		RevealUtils.triggerLayoutChange(400);;
		GlobalEvent.emit('code-editor', false);
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

	var init = function init() {
		var options = {
			title: 'Code Editor',
			icon: 'list-alt',
			toggleOn: editorShow,
			toggleOff: editorHide
		};
		NavMenu.createButton(options);

		HTMLEditor = Ace.create('slide-editor-html', 'html');
		CSSEditor = Ace.create('slide-editor-css', 'css');
	};

	// Public API
	exports.init = init;
	exports.update = updateHtmlEditor;

});