define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var NavPanel = require('component/nav-panel');
	var _ = require('lodash');

	// Code
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

	return {
		init : initMenuPanels,
		closeAll : closeAllExcept.bind(null, null)
	};
});