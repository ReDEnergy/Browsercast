define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var Presentation = require('app/config');
	var AppTemplate = require('templates');
	var NavPanel = require('component/NavPanel');
	var DomUtils = require('utils');
	var History = require('app/history');

	// Module API
	var init = function init() {

		var options = {
			panelID: 'history',
			title : 'History',
			icon : 'book',
			content : AppTemplate['history-panel']()
		};
		var Panel = new NavPanel(options);

		var restore = Panel.panel.querySelector('.restore-btn');
		var title = Panel.panel.querySelector('.title');
		restore.addEventListener('click', function() {
			History.restore(title.value);
		});
	};

	// Public API
	exports.init = init;
});