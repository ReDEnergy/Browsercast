define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var ToggleButton = require('component/toggle-button');
	var Utils = require('utils');
	var RevealExport = require('reveal/reveal-export');
	var RevealUtils = require('reveal/reveal-utils');

	// Code
	var slides = document.querySelector('.reveal .slides');

	function createNewSlide() {
		return document.createElement('section');
	}

	function addHorizontalSlide() {
		var current = Reveal.getCurrentSlide();
		var parent = current.parentElement;
		var slide = createNewSlide();
		if (parent.classList.contains('stack')) {
			current = parent;
		}
		slides.insertBefore(slide, current.nextElementSibling);

		var index = Reveal.getIndices();
		Reveal.slide(index.h, index.v);
		window.setTimeout(function() {
			Reveal.slide(index.h + 1, index.v);
		}, 100);
	}

	function addVerticalSlide() {
		var current = Reveal.getCurrentSlide();
		var parent = current.parentElement;
		var slide = createNewSlide();
		if (parent.classList.contains('stack')) {
			parent.insertBefore(slide, current.nextElementSibling);
		}
		else {
			var stack = document.createElement('section');
			stack.className = 'stack';
			parent.insertBefore(stack, current);
			stack.appendChild(current);
			stack.appendChild(slide);
		}

		var index = Reveal.getIndices();
		Reveal.slide(index.h, index.v);
		window.setTimeout(function() {
			Reveal.slide(index.h, index.v + 1);
		}, 100);
	}

	var add_horizontal_slide = document.getElementById('add-horizontal-slide');
	add_horizontal_slide.addEventListener('click', addHorizontalSlide);

	var add_vertical_slide = document.getElementById('add-vertical-slide');
	add_vertical_slide.addEventListener('click', addVerticalSlide);

	/*
	 * Delete Slide
	 */

	function deleteCurrentSlide() {
		delete_slide_button.toggle(false);

		var slide =	Reveal.getCurrentSlide();
		if (slide) {
			var parent = slide.parentElement;
			parent.removeChild(slide);

			// Set as non stacked slide if last slide
			if (parent.childElementCount === 1 && parent.classList.contains('stack')) {
				slides.insertBefore(parent.firstElementChild, parent);
				slides.removeChild(parent);
			}

			var index = Reveal.getIndices();
			window.setTimeout(function() {
				Reveal.slide(index.h, index.v);
			}, 100);
		}
	}

	function listenConfirmBox(e) {
		if (e.keyCode === 13) {
			deleteCurrentSlide();
		}
		if (e.keyCode === 27) {
			delete_slide_button.toggle();
		}
	}

	function openDeleteConfirmBox() {
		delete_confirm.setAttribute('data-visible', '');
		document.addEventListener('keydown', listenConfirmBox);
		Reveal.removeEventListeners();
	}

	function closeDeleteConfirmBox() {
		delete_confirm.removeAttribute('data-visible');
		document.removeEventListener('keydown', listenConfirmBox);
		Reveal.addEventListeners();
	}

	function listenKeyDeleteEvent(e) {
		if (e.keyCode === 46) {
			delete_slide_button.toggle(true);
		}
	}

	function setDeleteEvent() {
		delete_btn.setAttribute('data-visible', '');
		document.addEventListener('keydown', listenKeyDeleteEvent);
	}

	function unsetDeleteEvent() {
		delete_slide_button.toggle(false);
		delete_btn.removeAttribute('data-visible');
		document.removeEventListener('keydown', listenKeyDeleteEvent);
	}

	var delete_confirm = document.getElementById('confirm-delete');
	var delete_confirm_ok = document.getElementById('confirm-delete-ok');
	var delete_confirm_cancel = document.getElementById('confirm-delete-cancel');
	var delete_btn = document.getElementById('delete-slide');
	var delete_slide_button = new ToggleButton(delete_btn, openDeleteConfirmBox, closeDeleteConfirmBox);

	delete_confirm.addEventListener('click', Utils.stopPropagation);

	delete_confirm_ok.addEventListener('click', deleteCurrentSlide);
	delete_confirm_cancel.addEventListener('click', function() {
		delete_slide_button.toggle();
	});
	
	// Public API
	exports.initSlides = function() {
		RevealUtils.initReveal();
		slides = document.querySelector('.reveal .slides');		
	};
});