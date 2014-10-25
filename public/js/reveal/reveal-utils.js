define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var Utils = require('utils');

	// Module API
	/**
	 * Call Reveal initialization
	 */
	function initReveal() {
		Reveal.initialize({
			controls: true,
			progress: true,
			history: true,
			center: false,
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
	function cleanupReveal(reveal) {
		var slides = reveal.querySelector('.slides');
		reveal.className = 'reveal';
		reveal.removeAttribute('style');
		reveal.removeAttribute('data-transition-speed');
		reveal.removeAttribute('data-background-transition');
		reveal.textContent = '';
		cleanupSlides(slides);
		reveal.appendChild(slides);
	}

	/**
	 * @param {DOM Object} class="slides"
	 * TODO: remove only reveal.js specific attributes
	 */
	function cleanupSlides(slides) {
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

	/**
	 * @param {DOM Object} class="slides"
	 * ABOUT: Remove only browsercast specific attributes
	 */
	function cleanupBrowsercast(slides, browsercast) {
		function removeBrowsercastData(elem) {
			elem.removeAttribute('data-bc-start');
			elem.removeAttribute('data-bc-end');
		}

		var sections = slides.querySelectorAll('section');
		[].forEach.call(sections, removeBrowsercastData);

		var fragments = slides.querySelectorAll('.fragment');
		[].forEach.call(fragments, removeBrowsercastData);
	}

	/**
	 * @param {DOM Object} class="slides"
	 * ABOUT: Returns the number of reveal.js slides
	 */
	function countSlides(slidesDOMElem) {
		var count = 0;
		var slides = Utils.getChildsByTag(slidesDOMElem, 'section');
		[].forEach.call(slides, function (slide) {
			var vslides = Utils.getChildsByTag(slide, 'section');
			if (vslides.length)
				count += vslides.length - 1;
		});
		count += slides.length;
		return count;
	}

	/**
	 * ABOUT: Returns whole presentation as a string
	 */
	function getPresentationBackUp() {
	 	var slides = document.querySelector('#scene .reveal .slides').cloneNode(true);
		cleanupSlides(slides);
		return slides.innerHTML;
	}


	/**
	 * @param {delay} miliseconds to wait before layout refresh
	 * ABOUT: Returns whole presentation as a string
	 */
	function triggerLayoutChange(delay) {
		setTimeout(Reveal.layout, delay);
	}

	// Public API
	exports.initReveal = initReveal;
	exports.triggerLayoutChange = triggerLayoutChange;

	exports.cleanupSlides = cleanupSlides;
	exports.cleanupReveal = cleanupReveal;
	exports.cleanupBrowsercast = cleanupBrowsercast;

	exports.countSlides = countSlides;
	exports.getPresentationBackUp = getPresentationBackUp;
});