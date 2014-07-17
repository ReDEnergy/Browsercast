"use strict";

var ce_container = null;
var app = document.getElementById('app');

function setContenteEditable(target) {
	ce_container = target;

	target.setAttribute('contenteditable', 'true');
	target.addEventListener('input', updateHtmlEditor);
	html_editor.removeEventListener('change', updateSlidePreview);
	document.removeEventListener('keydown', listenKeyDeleteEvent);
	Reveal.removeEventListeners();
};

function unsetContentEditable() {
	ce_container.removeAttribute('contenteditable');
	ce_container.removeEventListener('input', updateHtmlEditor);
	ce_container = null;
	html_editor.addEventListener('change', updateSlidePreview);
	Reveal.addEventListeners();
};

function handleContentEditable(e) {
	// If section enter edit mode
	var target = e.target;
	while(target) {
		if (target.tagName === 'SECTION' && target.className === 'present') {
			e.stopPropagation();
			setContenteEditable(target);
			return;
		}
		target = target.parentElement;
	}

	// If not a section try to exit edit mode
	if (ce_container) {
		unsetContentEditable();
	}
};

document.addEventListener('click', handleContentEditable);

/**
 * Code Editor
 */

// Code Editor button
var editorShow = function editorShow() {
	setTimeout(Reveal.layout, 300);
	app.setAttribute('data-code-editor', '');
	Reveal.addEventListener('slidechanged', updateHtmlEditor);
	Reveal.addEventListener('fragmentshown', updateHtmlEditor);
	Reveal.addEventListener('fragmenthidden', updateHtmlEditor);
	updateHtmlEditor();
};

var editorHide = function editorHide() {
	setTimeout(Reveal.layout, 300);
	app.removeAttribute('data-code-editor');
	Reveal.removeEventListener('slidechanged', updateHtmlEditor);
	Reveal.removeEventListener('fragmentshown', updateHtmlEditor);
	Reveal.removeEventListener('fragmenthidden', updateHtmlEditor);
};

function updateSlidePreview() {
	if (((new Date()) - ignore_change) > 1000) {
		Reveal.getCurrentSlide().innerHTML = html_editor.getValue();
	}
}

function updateHtmlEditor() {
	console.log('updateHtmlEditor');
	ignore_change = new Date();
	html_editor.setValue(html_beautify(Reveal.getCurrentSlide().innerHTML));
}

var toggle_editor = document.getElementById('toggle-editor');
toggle_editor = new ToggleButton(toggle_editor, editorShow, editorHide);

var ignore_change;
var html_editor = initAceEditor('slide-editor-html', 'html');
var css_editor = initAceEditor('slide-editor-css', 'css');