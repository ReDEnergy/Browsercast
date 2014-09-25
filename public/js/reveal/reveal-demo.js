define(function(require, exports, module) {
	'use strict';

	var SlideManager = require('reveal/reveal-manager');
	var SyncPanel = require('sync/sync-panel');
	var AppTemplate = require('templates');

	var init = function init(demo) {
		console.log("awesome", demo);
		var reveal = document.querySelector('#scene .reveal');
		reveal.innerHTML = AppTemplate[demo]();

		var audio = document.querySelector('#bc-audio code');
		audio.textContent = AppTemplate[demo + '-audio']();

		SlideManager.initSlides();
		SyncPanel.setAudioSource('demo/audio/' + demo + '.ogg');
	};

	var initDemo = function initDemo(demo) {
		if (AppTemplate[demo] === undefined)
			 demo = 'demo-browsercast';
		init(demo);
	};

	// Public API
	exports.initDemo = initDemo;
});