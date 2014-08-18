define(function(require, exports, module) {
	'use strict';

	var SlideManager = require('reveal/reveal-manager');
	var SyncPanel = require('sync/sync-panel');
	var demoHTML = require('text!/demo/reveal/demo.html');
	var demoAudio = require('text!/demo/reveal/audio.json');
	
	console.log(demoAudio);
	
	var init = function init() {
		var reveal = document.querySelector('#scene .reveal');
		reveal.innerHTML = demoHTML;
		
		var audio = document.querySelector('#bc-audio code');
		audio.textContent = demoAudio;
		
		SlideManager.initSlides();
		SyncPanel.setAudioSource('demo/audio/audio.ogg');
	};

	// Public API
	exports.init = init;	

});