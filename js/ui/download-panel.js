define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var AppTemplate = require('templates');
	var SlideExporter = require('reveal/reveal-export');
	var GlobalEvent = require('core/GlobalEvents');
	var Presentation = require('app/config').Presentation;

	function updateProperty(property) {
		Presentation[property] = this.value;
		console.log(Presentation);
	};

	var events = function events(container) {
		var title = container.querySelector('.title');
		var author = container.querySelector('.author');
		var description = container.querySelector('.description');

		window.asd = updateProperty.bind(null, 'title');

		title.addEventListener('change', updateProperty.bind(title, 'title'));
		author.addEventListener('change', updateProperty.bind(author, 'author'));
		description.addEventListener('change', updateProperty.bind(description, 'description'));
	};

	// API
	var init = function init() {
		var container = document.getElementById('download-panel');
		container.innerHTML = AppTemplate['download-panel']();
		
		events(container);
		var percentage = container.querySelector('.percentage');
		var progress = container.querySelector('.progress');
		var saveBtn = container.querySelector('.download-btn');
		var info = container.querySelector('.info');

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
	};

	// Public API
	exports.init = init;
});