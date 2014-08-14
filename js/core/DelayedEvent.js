define(function(require, exports, module) {
	'use strict';

	// API
	function DelayedEvent(callback, delay) {
		this.delay = delay;
		this.callback = callback;
	}
	
	DelayedEvent.prototype.start = function start() {
		this.timer = window.setTimeout(this.callback, this.delay);
	};

	DelayedEvent.prototype.resetTimer = function resetTimer() {
		this.clear();
		this.start();
	};
	
	DelayedEvent.prototype.clear = function clear() {
		window.clearTimeout(this.timer);
	};

	// PUBLIC API
	return DelayedEvent;
});