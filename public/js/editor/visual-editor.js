define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var CodeEditor = require('editor/code-editor');

	// Code
	var CEC = null;

	function setEditable(target) {
		CEC = target;

		target.setAttribute('contenteditable', 'true');
		target.addEventListener('input', CodeEditor.update);
		Reveal.removeEventListeners();
	};

	function disableEdit() {
		if (!CEC) return;
		CEC.removeAttribute('contenteditable');
		CEC.removeEventListener('input', CodeEditor.update);
		CEC = null;
		Reveal.addEventListeners();
	};

	var handleClick = function handleClick(e) {
		// If section enter edit mode
		var target = e.target;
		while(target) {
			if (target.tagName === 'SECTION' && target.className === 'present') {
				e.stopPropagation();
				setEditable(target);
				return;
			}
			target = target.parentElement;
		}

		// If not a section try to exit edit mode
		disableEdit();
	};

	var getState = function getState() {
		return CEC !== null;
	};

	var enable = function enable() {
		document.addEventListener('click', handleClick);
	};

	var disable = function disable() {
		disableEdit();
		document.removeEventListener('click', handleClick);
	};

	var init = function init() {
		enable();
	};


	// Public API
	exports.init = init;
	exports.enable = enable;
	exports.disable = disable;
	exports.getState = getState;
});