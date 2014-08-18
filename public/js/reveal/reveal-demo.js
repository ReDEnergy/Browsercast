define(function(require, exports, module) {
	'use strict';

	var SlideManager = require('reveal/reveal-manager');
	var SyncPanel = require('sync/sync-panel');
	var AppTemplate = require('templates');
	
	var init = function init() {
		var reveal = document.querySelector('#scene .reveal');
		reveal.innerHTML = AppTemplate['browsercast']();
		
		var audio = document.querySelector('#bc-audio code');
		audio.textContent = AppTemplate['audio']();
		
		SlideManager.initSlides();
		SyncPanel.setAudioSource('demo/audio/audio.ogg');
	};

	// Public API
	exports.init = init;	

});