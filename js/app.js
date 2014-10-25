define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var _ = require('lodash');
	var $ = require('zepto');

	var NavManager = require('ui/panel-manager');
	var VisualEditor = require('editor/visual-editor');
	var Utils = require('utils');
	var History = require('app/history');
	var Demo = require('reveal/reveal-demo');

	// Module API
	var initialize = function initialize() {
		NavManager.init();
		VisualEditor.init();

		var demo = Utils.getURLParam('demo');
		Demo.initDemo(demo);

		History.init();
	};

	// Public API
	exports.initialize = initialize;
});
