define(function(require, exports, module) {
	"use strict";

	// Load Modules
	var EventEmitter = require('core/EventEmitter');

	// API
	function TimedEvent(timeline, time, data) {
		var elem = document.createElement('div');
		elem.className = 'mark';

		this.timeline = timeline;
		this.time = time;
		this.triggered = false;
		this.elem = elem;
		this.data = data;
		this.computePosition();

		elem.addEventListener('click', handleClick.bind(this));
		elem.addEventListener('dblclick', handleDoubleClick.bind(this));

		function handleClick(e) {
			e.stopPropagation();
			if (timeline.playing)
				timeline.pause();
			timeline.setPointerPosition(this.pos);
			this.timeline.emit('mark', this.data);
			this.timeline.updateEvents();
			console.log(this);
		}

		function handleDoubleClick(e) {
			e.stopPropagation();
			timeline.removeEvent(this);
		}

		timeline.timeline.appendChild(elem);
	}

	TimedEvent.prototype.computePosition = function computePosition() {
		if (this.time < 0) this.time = 0;
		if (this.time > this.timeline.duration) this.time = this.timeline.duration;

		this.pos = (this.time / this.timeline.duration) * this.timeline.size;
		this.elem.style.left = this.pos + 'px';
	};

	TimedEvent.prototype.clear = function clear() {
		this.data = null;
		this.timeline = null;
	};

	TimedEvent.prototype.setInFuture = function setInFuture() {
		if (this.triggered === true) {
			this.triggered = false;
			this.timeline.emit('futureEvent', this.data);
			return true;
		}
		return false;
	};

	TimedEvent.prototype.setInPast = function setInPast() {
		if (this.triggered === false) {
			this.triggered = true;
			this.timeline.emit('pastEvent', this.data);
			return true;
		}
		return false;
	};

	function Timeline(ParentNode) {
		var timeline = document.createElement('div');
		var fill = document.createElement('div');
		var time_pointer = document.createElement('div');
		var time_info =  document.createElement('div');
		var play_btn = document.createElement('div');

		timeline.className = 'timeline';
		fill.className = 'fill';
		time_pointer.className = 'time-pointer';
		time_info.className = 'time-info';
		time_info.textContent = '0:00';
		play_btn.className = 'play';

		time_pointer.appendChild(time_info);
		timeline.appendChild(play_btn);
		timeline.appendChild(fill);
		timeline.appendChild(time_pointer);
		ParentNode.appendChild(timeline);

		this.timeline = timeline;
		this.fill = fill;
		this.time_pointer = time_pointer;
		this.play_btn = play_btn;
		this.time_info = time_info;

		this.tpos = 0;
		this.startDate = new Date();
		this.currentTime = 0;
		this.size = 0;
		this.playing = false;
		this.layout = null;
		this.duration = 60;
		this.dir = 0;
		this.events = [];
		this.lastEventID = 0;
		this.current_mark_id = null;

		this.advance = this.advance.bind(this);
		this.pause = this.pause.bind(this);
		this.play = this.play.bind(this);
		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.handleMouseUp = this.handleMouseUp.bind(this);

		this.computeLayout();
		this.setEvents();
	}

	Timeline.prototype = Object.create(EventEmitter.prototype);

	Timeline.prototype.setTimeFrame = function setTimeFrame(duration) {
		this.duration = duration;
		for (var i=0; i<this.events.length; i++) {
			this.events[i].computePosition();
		}
	};

	Timeline.prototype.setCurrentTime = function setCurrentTime(time) {
		if (time < 0) time = 0;
		if (time > this.duration) time = this.duration;
		this.currentTime = time;
		this.updatePointerPosition();
		this.updateTimeInfo();
	};

	Timeline.prototype.computeLayout = function computeLayout(pos) {
		this.box = this.timeline.getBoundingClientRect();
		this.size = this.box.right - this.box.left;
		this.layout = true;
	};

	Timeline.prototype.updateTimeInfo = function updateTimeInfo() {
		var seconds = ((this.currentTime % 60) | 0);
		var minutes = ((this.currentTime / 60) | 0);
		if (seconds < 10)
			seconds = '0' + seconds;
		this.time_info.textContent = minutes + ':' + seconds;
	};
	
	Timeline.prototype.updatePointerPosition = function updatePointerPosition() {
		var pos = (this.currentTime / this.duration) * this.size;
		this.tpos = pos;
		this.time_pointer.style.left = pos + 'px';
		this.fill.style.width = pos + 'px';
	};

	Timeline.prototype.setPointerPosition = function setPointerPosition(pos) {
		this.tpos = pos;
		pos > this.tpos ? (this.dir = 1) : (this.dir = -1);
		var time = (pos/this.size * this.duration);
		this.setCurrentTime(time);
		this.updateEvents();
	};

	Timeline.prototype.addEvent = function addEvent(time, data) {
		var mark = new TimedEvent(this, time, data);
		this.events.push(mark);
		this.sortEvents();
	};
	
	Timeline.prototype.removeEvent = function removeEvent(event) {
		event.clear();
		var index = this.events.indexOf(event);
		this.events.splice(index, 1);
		this.timeline.removeChild(event.elem);
	};

	Timeline.prototype.clearEvents = function clearEvents() {
		for (var i=0; i<this.events.length; i++)
			this.timeline.removeChild(this.events[i].elem);
		this.events = [];
	};

	Timeline.prototype.getFirstPastEvent = function getFirstPastEvent() {
		for (var i = 0; i < this.events.length; i++) {
			if (this.events[i].time > this.currentTime)
				return (i - 1);
		}
		return i - 1;
	};

	Timeline.prototype.sortEvents = function sortEvents() {
		this.events.sort(function(a, b) {
			return a.time - b.time;
		});
	};

	// TODO - explain this ... looks really strage
	// TODO - make this more efficient
	Timeline.prototype.updateEvents = function updateEvents() {
		var len = this.events.length;
		if (len === 0)
			return;

		var index = -1;
		var change = false;
		for (var i = len - 1; i >= 0; i--) {
			if (this.events[i].pos < this.tpos) {
				index = i;
				break;
			}
			else
				change = change | this.events[i].setInFuture();
		}

		for (var i = 0; i <= index; i++) {
			change = change | this.events[i].setInPast();
		}

		if (index === -1) {
			change = change | this.events[0].setInFuture();
		}

		if (change) {
			if (this.dir > 0) {
				this.events[index].setInPast();
			}
			else {
				if ((index + 1) < len)
					this.events[index + 1].setInFuture();
			}

			// log type
			// var s = '';
			// for (var i = 0; i < len; i++) {
				// s += (this.events[i].triggered ? '1' : '0') + ' ';
			// }
			// console.log('Values', s);
		}
	};

	/*
	 * Events
	 */

	Timeline.prototype.setEvents = function() {
		this.timeline.addEventListener('click', this.handleClick.bind(this));
		this.play_btn.addEventListener('click', function(e) {
			this.playing ? this.pause(e) : this.play(e);
		}.bind(this));
		this.time_pointer.addEventListener('mousedown', this.handleMouseDown);
		window.addEventListener('resize', this.computeLayout.bind(this));
	};

	// Hold last event index and track when the next one is met
	Timeline.prototype.advance = function advance() {
		var diff = new Date() - this.startDate;
		this.setCurrentTime(this.startTime + diff / 1000);
		this.updateEvents();
	};

	Timeline.prototype.play = function play(e) {
		if (e) e.stopPropagation();
		if (this.playing) return;

		this.lastEventID = this.getFirstPastEvent();

		this.startDate = new Date();
		this.startTime = this.currentTime;
		this.playing = setInterval(this.advance, 200);
		
		this.play_btn.setAttribute('playing', 'true');
		this.emit('play');
	};

	Timeline.prototype.pause = function pause(e) {
		if (this.playing === false)
			return;
		if (e) e.stopPropagation();
		clearInterval(this.playing);
		this.playing = false;
		this.play_btn.removeAttribute('playing');
		this.emit('pause');
	};

	Timeline.prototype.handleClick = function handleClick(e) {
		if (this.playing) this.pause(e);
		var delta = e.clientX - this.box.left;
		this.setPointerPosition(delta);
	};

	Timeline.prototype.handleMouseMove = function handleMouseMove(e) {
		var posX = e.clientX - this.startX;
		this.setPointerPosition(posX);
	};

	Timeline.prototype.handleMouseDown = function handleMouseDown(e) {
		if (this.playing) this.pause(e);

		this.startX = e.clientX - this.tpos;
		document.addEventListener('mousemove', this.handleMouseMove);
		document.addEventListener('mouseup', this.handleMouseUp);
		this.removeTransitions();
	};

	Timeline.prototype.handleMouseUp = function handleMouseUp() {
		document.removeEventListener('mousemove', this.handleMouseMove);
		document.removeEventListener('mouseup', this.handleMouseUp);
		this.addTransitions();
		this.updateEvents();
	};

	Timeline.prototype.addTransitions = function addTransitions() {
		this.fill.style.transition = 'all 0.2s linear';
		this.time_pointer.style.transition = 'all 0.2s linear';
	};

	Timeline.prototype.removeTransitions = function removeTransitions() {
		this.fill.style.transition = 'none';
		this.time_pointer.style.transition = 'none';
	};

	// Public API
	return Timeline;

});
