define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var _ = require('lodash');
	var $ = require('zepto');

	window.BE = {};

	var Demo = require('reveal/reveal-demo');
	var NavManager = require('ui/panel-manager');
	var VisualEditor = require('editor/visual-editor');
	var CodeEditor = require('editor/code-editor');

	return {
		initialize: function() {
			// SlideManager.initSlides();
			NavManager.init();
			CodeEditor.init();
			VisualEditor.init();
			Demo.init();
		}
	};
});
