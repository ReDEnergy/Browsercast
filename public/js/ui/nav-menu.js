define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var DomUtils = require('utils');
	var ToggleButton = require('component/toggle-button');

	// Private API

	var menu;

	var isFunction = function isFunction(value) {
		return (typeof value === 'function');
	};

	var createButton = function createButton(options) {
		var button = DomUtils.createNode('div', {class: 'button'});
		button.innerHTML = AppTemplate["nav-panel"]({label: options.title, icon: options.icon});
		menu.appendChild(button);

		if (isFunction(options.onClick)) {
			button.addEventListener('click', options.onClick);
		}
		if (isFunction(options.toggleOn) && isFunction(options.toggleOff)) {
			new ToggleButton(button, options.toggleOn, options.toggleOff);
		}

		return button;
	};

	// API

	var init = function init () {
		menu = document.getElementById('nav');
	};

	// Public API
	exports.init = init;
	exports.createButton = createButton;
});