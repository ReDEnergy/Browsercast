"use strict";

var last_contenteditable_container = null;

document.addEventListener('click', function(e) {
	var app = document.getElementById('app');
	if (app.getAttribute('data-mode') === 'preview') {
		return;
	}

	// If section enter edit mode
	var target = e.target;
	while(target) {
		if (target.tagName === 'SECTION' && target.className === 'present') {
			last_contenteditable_container = target;
			e.stopPropagation();
			target.setAttribute('contenteditable', 'true');
			target.addEventListener('input', updateHtmlEditor);
			html_editor.removeEventListener('change', updateSlidePreview);
			document.removeEventListener('keydown', listenKeyDeleteEvent);
			Reveal.removeEventListeners();
			return;
		}
		target = target.parentElement;
	}

	// If not section exit edit mode
	if (last_contenteditable_container) {
		last_contenteditable_container = null;
		Reveal.addEventListeners();
		Reveal.getCurrentSlide().removeAttribute('contenteditable');
		Reveal.getCurrentSlide().removeEventListener('input', updateHtmlEditor);
		html_editor.addEventListener('change', updateSlidePreview);
	}
});

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
	ignore_change = new Date();
	html_editor.setValue(html_beautify(Reveal.getCurrentSlide().innerHTML));
}

var toggle_editor = document.getElementById('toggle-editor');
toggle_editor = new ToggleButton(toggle_editor, editorShow, editorHide);

var ignore_change;
var html_editor = initAceEditor('slide-editor-html', 'html');
var css_editor = initAceEditor('slide-editor-css', 'css');