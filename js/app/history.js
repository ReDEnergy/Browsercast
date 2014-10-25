define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var Presentation = require('app/config');
	var RevealUtils = require('reveal/reveal-utils');
	var ImportPanel = require('ui/panels/import');

	// Module API
	var savePresentation = function savePresentation() {
		var title = Presentation.getProperty('title');

		var state = {
			date:  new Date().getTime(),
			title: title,
			author: Presentation.getProperty('author'),
			description: Presentation.getProperty('description'),
			content: RevealUtils.getPresentationBackUp()
		};

		localStorage.setItem(title, JSON.stringify(state));
	};

	var restore = function restore(title) {
		var presentation = localStorage.getItem(title);
		if (presentation) {
			presentation = JSON.parse(presentation);
			ImportPanel.setImport('<div class="slides">' + presentation.content + '</div>');
		}
	};

	var init = function init() {
		setInterval(savePresentation, 20000);
	};

	window.restorePresentation = restore;

	// Public API
	exports.init = init;
	exports.restore = restore;
});