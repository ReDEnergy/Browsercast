define(function(require, exports, module) {
	"use strict";

	// Load Modules
	var EventEmitter = require('core/EventEmitter');

	// Code
	function NavPanel(button) {
		var name = button.getAttribute('data-panel');
		this.panel = document.getElementById(name);
		this.state = false;
		this.button = button;

		var separator = document.createElement('div');
		separator.className = 'separator';

		var close = document.createElement('div');
		close.className = 'close button';
		close.textContent = 'Close';
		close.addEventListener('click', this.hide.bind(this));
		button.addEventListener('click', this.toggle.bind(this));

		this.panel.appendChild(separator);
		this.panel.appendChild(close);
	}

	NavPanel.prototype = Object.create(EventEmitter.prototype);

	NavPanel.prototype.hideAll = function hideAll() {
		panels.forEach(function(panel) {
			panel.hide();
		});
	};

	NavPanel.prototype.show = function show() {
		this.state = true;
		this.panel.setAttribute('data-active', '');
		this.button.setAttribute('data-active', '');
		this.emit('open', this);
	};

	NavPanel.prototype.hide = function hide() {
		this.state = false;
		this.panel.removeAttribute('data-active');
		this.button.removeAttribute('data-active');
		this.emit('close', this);
	};

	NavPanel.prototype.toggle = function toggle() {
		this.state ? this.hide() : this.show();
	};

	return NavPanel;
});
