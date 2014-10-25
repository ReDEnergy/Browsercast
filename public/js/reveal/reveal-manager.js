define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var ToggleButton = require('component/toggle-button');
	var Utils = require('utils');
	var RevealExport = require('reveal/reveal-export');
	var RevealUtils = require('reveal/reveal-utils');
	var GlobalEvent = require('core/GlobalEvents');
	var AppTemplate = require('templates');

	// Code
	var slides = document.querySelector('.reveal .slides');
	var slide_count = 0;

	// TODO - here or in Reveal Utils ?
	function createNewSlide() {
		slide_count++;
		if (slide_count > 1)
			setDeleteEvent();
		return document.createElement('section');
	}

	function createNewPresentation(Info) {
		var reveal = document.querySelector('#scene .reveal');
		reveal.innerHTML = AppTemplate['reveal-blank'](Info);
		initSlides();
		switchToSlide(0, 0, 100);
	}

	function switchToSlide(offsetH, offsetV, delay) {
		var index = Reveal.getIndices();
		Reveal.slide(index.h, index.v);
		window.setTimeout(function() {
			Reveal.slide(index.h + offsetH, index.v + offsetV);
		}, delay);
	};

	function addHorizontalSlide() {
		var current = Reveal.getCurrentSlide();
		var parent = current.parentElement;
		var slide = createNewSlide();
		if (parent.classList.contains('stack')) {
			current = parent;
		}
		slides.insertBefore(slide, current.nextElementSibling);

		switchToSlide(1, 0, 100);
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

		switchToSlide(0, 1, 100);
	}

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

			slide_count--;
			if (slide_count <= 1)
				unsetDeleteEvent();

			switchToSlide(0, 0, 100);
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
		if (slide_count <= 1)
			return;

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

	var add_horizontal_slide = document.getElementById('add-horizontal-slide');
	add_horizontal_slide.addEventListener('click', addHorizontalSlide);

	var add_vertical_slide = document.getElementById('add-vertical-slide');
	add_vertical_slide.addEventListener('click', addVerticalSlide);

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

	GlobalEvent.on('enter-preview', function() {
		delete_slide_button.toggle(false);
	});

	GlobalEvent.on('sync-panel-open', function() {
		delete_slide_button.toggle(false);
	});


	var initSlides = function initSlides() {
		RevealUtils.initReveal();
		slides = document.querySelector('.reveal .slides');
		slide_count = RevealUtils.countSlides(slides);
		if (slide_count <= 1)
			unsetDeleteEvent();
	};

	// Public API
	exports.initSlides = initSlides;
	exports.createNewPresentation = createNewPresentation;
});