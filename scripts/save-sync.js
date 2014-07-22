"use strict";

function saveSync() {
	var start = 0;
	var end;
	var isFragment = false;
	var transitions = timeline.marks;
	var index = 0;

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
		if (index === transitions.length) {
			endSave();
			return;
		}

		var ind = transitions[index].data;
		end = transitions[index].time;
		isFragment = (ind.f >= 0);
		index++;
		Reveal.slide(ind.h, ind.v, ind.f);
	}

	// TODO - try not to base on events

	startSave();
}

var sync_save = document.getElementById('sync-save');
sync_save.addEventListener('click', saveSync);
