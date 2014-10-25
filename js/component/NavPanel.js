define(function(require, exports, module) {
	"use strict";

	// Load Modules
	var EventEmitter = require('core/EventEmitter');
	var AppTemplate = require('templates');
	var PanelManager = require('ui/panel-manager');
	var NavMenu = require('ui/nav-menu');
	var DomUtils = require('utils');

	// Module API
	var Panel = function Panel(NavPanel, options) {
		var panel = DomUtils.createNode('div', {class: 'menu-expand', 'data-panel': options.panelID});
		var separator = DomUtils.createNode('div', {class: 'separator'});
		var close = DomUtils.createNode('div', {class: 'close button'});
		close.textContent = 'Close';
		close.addEventListener('click', function() {
			NavPanel.hide();
		});

		panel.innerHTML = options.content;
		panel.appendChild(separator);
		panel.appendChild(close);
		return panel;
	};

	function NavPanel(options) {

		this.state = false;

		options.onClick = this.toggle.bind(this);
		this.button = NavMenu.createButton(options);

		this.panel = Panel(this, options);
		var nav_panels = document.getElementById('nav-panels');
		nav_panels.appendChild(this.panel);

		PanelManager.register(this);
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
		PanelManager.closeAllExcept(this);
		this.emit('open');
	};

	NavPanel.prototype.hide = function hide() {
		this.state = false;
		this.panel.removeAttribute('data-active');
		this.button.removeAttribute('data-active');
		this.emit('close');
	};

	NavPanel.prototype.toggle = function toggle() {
		this.state ? this.hide() : this.show();
	};

	return NavPanel;
});
