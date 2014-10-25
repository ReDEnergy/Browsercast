define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var AppTemplate = require('templates');
	var SlideExporter = require('reveal/reveal-export');
	var GlobalEvent = require('core/GlobalEvents');
	var Presentation = require('app/config');
	var NavPanel = require('component/NavPanel');

	function updateProperty(property) {
		Presentation.setProperty(property, this.value);
	};

	// API
	var init = function init() {
		var options = {
			panelID: 'download',
			title : 'Download',
			icon : 'save',
			content : AppTemplate['download-panel']()
		};
		var Panel = new NavPanel(options);

		// Nodes
		var container = Panel.panel;
		var title = container.querySelector('.title');
		var author = container.querySelector('.author');
		var description = container.querySelector('.description');
		var info = container.querySelector('.info');
		var percentage = container.querySelector('.percentage');
		var progress = container.querySelector('.progress');
		var saveBtn = container.querySelector('.download-btn');

		// Events
		title.addEventListener('change', updateProperty.bind(title, 'title'));
		author.addEventListener('change', updateProperty.bind(author, 'author'));
		description.addEventListener('change', updateProperty.bind(description, 'description'));

		saveBtn.addEventListener('click', function() {
			progress.value = 0;
			percentage.textContent = '0%';
			SlideExporter.download();
		});

		GlobalEvent.on('download-end', function() {
			info.removeAttribute('data-visible');
		});
		GlobalEvent.on('download-start', function() {
			info.setAttribute('data-visible', '');
		});

		GlobalEvent.on('download-progress', function(value) {
			progress.value = value;
			percentage.textContent = value.toFixed(0) + '%';
		});

		Panel.on('open', function() {
			title.value = Presentation.getProperty('title');
			author.value = Presentation.getProperty('author');
			description.value = Presentation.getProperty('description');
		});
	};

	// Public API
	exports.init = init;
});