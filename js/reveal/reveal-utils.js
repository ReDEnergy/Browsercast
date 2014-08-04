define(function(require, exports, module) {
	'use strict';

	var _ = require('lodash');

	/**
	 * Call Reveal initialization 
	 */
	function initReveal() {
		console.log('initialized Reveal');
		Reveal.initialize({
			controls: true,
			progress: true,
			history: true,
			center: true,
			overview: true,

			theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
			transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

		    // Optional libraries used to extend on reveal.js
		    dependencies: [
		      { src: 'libs/reveal/lib/js/classList.js', condition: function() { return !document.body.classList; } },
		      { src: 'libs/reveal/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
		      { src: 'libs/reveal/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
		    ]
		});
	}


	/**
	 * @param {DOM Object} class="reveal"
	 * TODO: remove only reveal.js specific attributes
	 */
	function cleanUpReveal(reveal) {
		var slides = reveal.querySelector('.slides');
		reveal.className = 'reveal';
		reveal.removeAttribute('style');
		reveal.removeAttribute('data-transition-speed');
		reveal.removeAttribute('data-background-transition');
		reveal.textContent = '';
		cleanUpSlides(slides);
		reveal.appendChild(slides);
	}

	/**
	 * @param {DOM Object} class="slides"
	 * TODO: remove only reveal.js specific attributes
	 */
	function cleanUpSlides(slides) {
		slides.removeAttribute('style');
			
		var sections = slides.querySelectorAll('section');
		// TODO - remove just for the first 2 levels
		[].forEach.call(sections, function (section) {
			section.removeAttribute('data-index-h');
			section.removeAttribute('data-index-v');
			section.removeAttribute('data-previous-indexv');
			section.removeAttribute('hidden');
			section.removeAttribute('class');
			section.removeAttribute('style');
		});
		var fragments = slides.querySelectorAll('.fragment');
		[].forEach.call(fragments, function (fragment) {
			fragment.removeAttribute('data-fragment-index');
		});
	}

	function triggerLayoutChange(delay) {
		setTimeout(Reveal.layout, delay);
	}

	// Public API
	exports.cleanUpSlides = cleanUpSlides;
	exports.cleanUpReveal = cleanUpReveal;
	exports.initReveal = initReveal;
	exports.triggerLayoutChange = triggerLayoutChange;
	
	window.cleanUpReveal = cleanUpReveal;
});