define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var RevealUtils = require('reveal/reveal-utils');

	// API
	function saveSync(events, callback) {
		var start = 0;
		var end;
		var isFragment = false;
		var index = 0;
		callback = typeof(callback) === 'function' ? callback : function() {};

		function setAudioAttributes(elem) {
			elem.setAttribute('data-bc-start', start.toFixed(2));
			elem.setAttribute('data-bc-end', end.toFixed(2));
			start = end;
			triggerChange();
		}

		function setSlideAudio(e) {
			if (isFragment) return;
			setAudioAttributes(e.currentSlide);
		}

		function setFragmentAudio(e) {
			setAudioAttributes(e.fragment);
		}

		function startSave() {
			Reveal.addEventListener('slidechanged', setSlideAudio);
			Reveal.addEventListener('fragmentshown', setFragmentAudio);
			triggerChange();
		}

		function endSave() {
			Reveal.removeEventListener('slidechanged', setSlideAudio);
			Reveal.removeEventListener('fragmentshown', setFragmentAudio);
		}

		function triggerChange() {
			if (index === events.length) {
				endSave();
				callback();
				return;
			}

			var idx = events[index].data;
			end = events[index].time;
			isFragment = (idx.f >= 0);
			index++;
			Reveal.slide(idx.h, idx.v, idx.f);
		}

	 	var slides = document.querySelector('#scene .reveal .slides');
		RevealUtils.cleanupBrowsercast(slides);
		startSave();
	}

	// PUBLIC API
	exports.save = saveSync;
});