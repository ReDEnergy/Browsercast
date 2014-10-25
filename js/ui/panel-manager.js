define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var DownloadPanel = require('ui/panels/download');
	var ImportPanel = require('ui/panels/import');
	var CreateNew = require('ui/panels/create-new');
	var HistoryPanel = require('ui/panels/history');
	var CodeEditor = require('editor/code-editor');
	var SyncPanel = require('sync/sync-panel');
	var NavMenu = require('ui/nav-menu');
	var _ = require('lodash');

	// API
	var panels = [];

	var closeAllExcept = function closeAllExcept(Panel) {
		_.each(panels, function(panel) {
			if (panel !== Panel)
				panel.hide();
		});
	};

	var register = function register(Panel) {
		panels.push(Panel);
	};

	var init = function init () {
		NavMenu.init();
		CreateNew.init();
		ImportPanel.init();
		DownloadPanel.init();
		HistoryPanel.init();
		SyncPanel.init();
		CodeEditor.init();
	};

	// Public API
	exports.init = init;
	exports.register = register;
	exports.closeAll = closeAllExcept.bind(null, null);
	exports.closeAllExcept = closeAllExcept;
});