define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var AppTemplate = require('templates');
	var NavPanel = require('component/NavPanel');
	var RevealManager = require('reveal/reveal-manager');
	var Presentation = require('app/config');

	var getInfo = function getInfo(container) {
		var title = container.querySelector('.title').value;
		var author = container.querySelector('.author').value;
		var description = container.querySelector('.description').value;

		Presentation.setProperty('title', title);
		Presentation.setProperty('author', author);
		Presentation.setProperty('description', description);

		return {
			title: title,
			author: author,
			description: description
		};
	};

	// API
	var init = function init() {
		var options = {
			panelID: 'create',
			title : 'New presentation',
			icon : 'plus',
			content : AppTemplate['new-presentation']()
		};
		var Panel = new NavPanel(options);

		var btn = Panel.panel.querySelector('.create-btn');
		btn.addEventListener('click', function() {
			var Info = getInfo(Panel.panel);
			RevealManager.createNewPresentation(Info);
			Panel.hide();
		});

	};

	// Public API
	exports.init = init;
});