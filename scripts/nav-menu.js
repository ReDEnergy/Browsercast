"use strict";

/**
 * Nav Menu Panels
 */

var panels = [];

// Reset Reveal layout
function triggerLayoutChange() {
	setTimeout(Reveal.layout, 400);
}

// NavPanel
function NavPanel(button) {
	var name = button.getAttribute('data-panel');
	this.panel = document.getElementById(name);
	this.state = false;
	this.button = button;

	var separator = document.createElement('div');
	separator.className = 'separator';

	var close = document.createElement('div');
	close.className = 'button';
	close.textContent = 'Close';
	close.addEventListener('click', this.hide.bind(this));
	button.addEventListener('click', this.toggle.bind(this));

	this.panel.appendChild(separator);
	this.panel.appendChild(close);
}

NavPanel.prototype.hideAll = function hideAll() {
	panels.forEach(function(panel) {
		panel.hide();
	});
};

NavPanel.prototype.show = function show() {
	this.hideAll();
	this.state = true;
	this.panel.setAttribute('data-active', '');
	this.button.setAttribute('data-active', '');
};

NavPanel.prototype.hide = function hide() {
	this.state = false;
	this.panel.removeAttribute('data-active');
	this.button.removeAttribute('data-active');
};

NavPanel.prototype.toggle = function toggle() {
	this.state ? this.hide() : this.show();
};

var nav = document.getElementById('nav');
for (var i=0; i < nav.children.length; i++) {
	if (nav.children[i].getAttribute('data-panel'))
		panels.push(new NavPanel(nav.children[i]));
}

// Preview

function enterPreview() {
	app.setAttribute('data-mode', 'preview');
	toggle_editor_btn.toggle(false);
	toggle_sync.toggle(false);
	panels[0].hideAll();
	triggerLayoutChange();
	// TODO - do not like this
	Reveal.getCurrentSlide().removeAttribute('contenteditable');
}

function leavePreview() {
	app.setAttribute('data-mode', 'editor');
	triggerLayoutChange();
}

var app = document.getElementById('app');
var enter_preview = document.getElementById('enter-preview');
var leave_preview = document.getElementById('leave-preview');
enter_preview.addEventListener('click', enterPreview);
leave_preview.addEventListener('click', leavePreview);


// Code Editor button
var showEditor = function showEditor() {
	app.setAttribute('data-code-editor', '');
	triggerLayoutChange();
};

var hideEditor = function hideEditor() {
	app.removeAttribute('data-code-editor');
	triggerLayoutChange();
};

var toggle_editor = document.getElementById('toggle-editor');
var toggle_editor_btn = new ToggleButton(toggle_editor, showEditor, hideEditor);

// Sync Panel button
var openSyncPanel = function openSyncPanel() {
	console.log('try to open SyncPanel');
	app.setAttribute('data-sync-audio', '');
	triggerLayoutChange();
};

var hideSyncPanel = function hideSyncPanel() {
	console.log('try to close SyncPanel');
	app.removeAttribute('data-sync-audio');
	triggerLayoutChange();
};

var toggle_sync = document.getElementById('toggle-sync');
var toggle_sync_btn = new ToggleButton(toggle_sync, openSyncPanel, hideSyncPanel);


