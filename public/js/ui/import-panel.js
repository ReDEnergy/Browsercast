define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var CodeEditor = require('editor/ace');
	var SlideManager = require('reveal/reveal-manager');
	var PanelManager = require('ui/panel-manager');
	var DelayedEvent = require('core/DelayedEvent');
	var Utils = require('utils');

	// Module API
	var import_editor;
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

	function findSlidesCount(rootElem) {
		var count = 0;
		var slides = Utils.getChildsByTag(rootElem, 'section');
		[].forEach.call(slides, function (slide) {
			var vslides = Utils.getChildsByTag(slide, 'section');
			if (vslides.length)
				count += vslides.length - 1;
		});
		count += slides.length;			
		return count;
	}

	function handleChange() {
		imported_content.innerHTML = import_editor.getValue();
		var slides = imported_content.querySelector('.slides');
		if (slides) {
			var count = findSlidesCount(slides);
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
		imported_content.innerHTML = import_editor.getValue();
		var scene = document.getElementById('scene');
		var reveal = scene.children[0];
		var slides = imported_content.querySelector('.slides');
		reveal.textContent = '';
		reveal.appendChild(slides);

		PanelManager.closeAll();
		SlideManager.initSlides();
		Reveal.slide(0);		
	}

	var init = function init() {
		var container = document.getElementById('import-panel');
		container.innerHTML = AppTemplate['import-panel']();

		import_editor = CodeEditor.create('import-editor', 'html');
		import_slides_count = document.getElementById('import-slides-count');
		imported_content = document.createElement('div');
		import_info = document.getElementById('import-info');

		var import_button = document.getElementById('import-slides');
		import_button.addEventListener('click', handleClick);

		var ChangeEvent = new DelayedEvent(handleChange, 300); 
		import_editor.addEventListener('change', function() {
			ChangeEvent.resetTimer();
		});
	};

	// Public API
	exports.init = init;
});