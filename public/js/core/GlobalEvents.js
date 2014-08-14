define(function(require, exports, module) {
	'use strict';

	// Load Modules
	var EventEmitter = require('core/EventEmitter');

	// API
	function GlobalEvent() {
		
	}
	
	GlobalEvent.prototype = Object.create(EventEmitter.prototype);

	var GEvent = new GlobalEvent();

	// PUBLIC API
	return GEvent;
});