define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var DownloadPanel = require('ui/download-panel');
	var ImportPanel = require('ui/import-panel');
	var SyncPanel = require('sync/sync-panel');
	var NavPanel = require('component/nav-panel');
	var _ = require('lodash');

	// API
	var panels = [];

	var closeAllExcept = function closeAllExcept(Panel) {
		_.each(panels, function(panel) {
			if (panel !== Panel)
				panel.hide();
		});
	};

	var initMenuPanels = function initMenuPanels() {
		var nav = document.getElementById('nav');
		[].forEach.call(nav.children, function(elem) {
			if (elem.getAttribute('data-panel')) {
				var panel = new NavPanel(elem);
				panel.on('open', closeAllExcept);
				panels.push(panel);
			}
		});
	};
	
	var init = function init () {
		DownloadPanel.init();
		ImportPanel.init();
		SyncPanel.init();
		initMenuPanels();
	};

	// Public API
	exports.init = init;
	exports.closeAll = closeAllExcept.bind(null, null);
});