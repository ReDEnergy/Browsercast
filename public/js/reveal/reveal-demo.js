define(function(require, exports, module) {
	'use strict';

	var SlideManager = require('reveal/reveal-manager');
	var AppTemplate = require('templates');

	var init = function init() {
		var reveal = document.querySelector('#scene .reveal');
		reveal.innerHTML = AppTemplate.demo();
		console.log('AppTemplate', AppTemplate);
		SlideManager.initSlides();
		
	};

	// Public API
	exports.init = init;	

});