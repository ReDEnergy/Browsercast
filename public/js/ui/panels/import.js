define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var CodeEditor = require('editor/ace');
	var SlideManager = require('reveal/reveal-manager');
	var PanelManager = require('ui/panel-manager');
	var DelayedEvent = require('core/DelayedEvent');
	var RevealUtils = require('reveal/reveal-utils');
	var NavPanel = require('component/NavPanel');
	var Utils = require('utils');

	// Module API
	var ImportEditor;
	var import_slides_count;
	var imported_content;
	var import_info;

	// TODO -? how to create templated localization ?
	var MSG = {
		'not-found' : ':( No slides found',
		'found' : function(count) {
			return 'Found ' + count + ' slides';
		},
		'error' : ':( Unable to find element with class="slides"'
	};

	function setMessage(message, type) {
		import_info.setAttribute('state', type);
		import_slides_count.textContent = message;
	}

	function handleChange() {
		imported_content.innerHTML = ImportEditor.getValue();
		var slides = imported_content.querySelector('.slides');
		if (slides) {
			var count = RevealUtils.countSlides(slides);
			if (count > 0)
				setMessage(MSG['found'](count), 'ok');
			else
				setMessage(MSG['not-found'], 'error');
		}
		else {
			setMessage(MSG['error'], 'error');
		}
	}

	// TODO: Bug when import press 2 times
	function handleClick() {
		imported_content.innerHTML = ImportEditor.getValue();
		var scene = document.getElementById('scene');
		var reveal = scene.children[0];
		var slides = imported_content.querySelector('.slides');
		reveal.textContent = '';
		reveal.appendChild(slides);

		PanelManager.closeAll();
		SlideManager.initSlides();
		Reveal.slide(0);
	}

	var setImport = function setImport(content) {
		ImportEditor.setValue(content, 0);
		ImportEditor.clearSelection();
		handleClick();
	};

	var init = function init() {

		var options = {
			panelID: 'import',
			title : 'Import presentation',
			icon : 'import',
			content : AppTemplate['import-panel']()
		};
		var Panel = new NavPanel(options);

		ImportEditor = CodeEditor.create('import-editor', 'html');
		import_slides_count = Panel.panel.querySelector('.import-slides-count');
		imported_content = document.createElement('div');
		import_info = Panel.panel.querySelector('.import-info');

		var import_button = Panel.panel.querySelector('.import-btn');
		import_button.addEventListener('click', handleClick);

		var ChangeEvent = new DelayedEvent(handleChange, 300);
		ImportEditor.addEventListener('change', function() {
			ChangeEvent.resetTimer();
		});
	};

	// Public API
	exports.init = init;
	exports.setImport = setImport;
});