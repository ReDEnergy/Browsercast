define(function(require, exports, module) {
	'use strict';

	var SlideManager = require('reveal/reveal-manager');
	var SyncPanel = require('sync/sync-panel');
	var AppTemplate = require('templates');

	var init = function init() {
		var reveal = document.querySelector('#scene .reveal');
		reveal.innerHTML = AppTemplate['reveal-demo']();
		SlideManager.initSlides();
		SyncPanel.setAudioSource('demo/audio/audio.ogg');
	};

	// Public API
	exports.init = init;	

});