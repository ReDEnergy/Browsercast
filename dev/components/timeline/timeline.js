(function() {
	"use strict";

	// API
	function TimedEvent(timeline, time, data) {
		var elem = document.createElement('div');
		elem.className = 'event';

		this.timeline = timeline;
		this.time = time;
		this.triggered = false;
		this.elem = elem;
		this.data = data;
		this.computePosition();

		elem.addEventListener('click', handleClick.bind(this));

		function handleClick(e) {
			e.stopPropagation();
			if (timeline.playing)
				timeline.pause();
			timeline.setPointerPosition((this.pos * timeline.size / 100).toFixed(2));
			timeline.emitEvent('event', this.data);
			timeline.selectedEvent = this;
		}

		timeline.timeline.appendChild(elem);
	}

	TimedEvent.prototype.computePosition = function computePosition() {
		if (this.time < 0) this.time = 0;
		if (this.time > this.timeline.duration) this.time = this.timeline.duration;

		this.pos = (this.time / this.timeline.duration) * 100;
		this.elem.style.left = this.pos.toFixed(2) + '%';
	};

	TimedEvent.prototype.clear = function clear() {
		this.data = null;
		this.timeline = null;
	};

	TimedEvent.prototype.setInFuture = function setInFuture() {
		this.triggered = false;
		this.timeline.emitEvent('futureEvent', this.data);
		this.elem.removeAttribute('past');
	};

	TimedEvent.prototype.setInPast = function setInPast() {
		this.triggered = true;
		this.timeline.emitEvent('pastEvent', this.data);
		this.elem.setAttribute('past', '');
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
		play_btn.className = 'play-btn glyphicon';

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
		this.prevTime = 0;
		this.size = 0;
		this.playing = false;
		this.layout = null;
		this.duration = 60;

		this.events = [];
		this.prevEventID = -1;
		this.triggerEvents = true;
		this.selectedEvent = null;

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
		this.prevTime = this.currentTime;   
		if (time < 0) time = 0;
		if (time >= this.duration) {
			this.pause();
			time = this.duration;
		}
		this.currentTime = time;
		this.updatePointerPosition();
		this.updateTimeInfo();
		this.emitEvent('timeUpdate', this.currentTime);
		this.updateEvents();
	};

	Timeline.prototype.computeLayout = function computeLayout() {
		this.box = this.timeline.getBoundingClientRect();
		this.size = this.box.right - this.box.left;
		this.layout = true;
		this.setCurrentTime(this.currentTime);
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
		var time = (pos/this.size * this.duration);
		this.setCurrentTime(time);
	};
	

	/*
	 * Timeline Events
	 */

	Timeline.prototype.addEvent = function addEvent(startTime, Data) {
		var event = new TimedEvent(this, startTime, Data);
		this.events.push(event);
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
		this.prevEventID = -1;		
	};

	Timeline.prototype.logEvents = function logEvents() {
		var s = '';
		this.events.forEach(function(event) {
			s += (event.triggered ? '1' : '0') + ' ';
		});
		console.log('EVENTS', s);
	};

	Timeline.prototype.getPreviousEvent = function getPreviousEvent() {
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

	Timeline.prototype.updateEvents = function updateEvents() {
		if (this.prevTime === this.currentTime)
			return;

		var len = this.events.length;
		if (len === 0)
			return;
		
		var nextEventID = this.prevEventID + 1;
		if (nextEventID < len) {
			if (this.events[nextEventID].time > this.currentTime) {
				if (this.prevEventID === -1 || this.events[this.prevEventID].time < this.currentTime)
					return;
			}
		}

		var lastEvent = null;
		this.setEmitEvent(false);

		if (this.prevTime < this.currentTime) {
			if (this.prevEventID === len - 1)
				return;
			
			for (var i = this.prevEventID + 1; i < len; i++) {
				if (this.events[i].time > this.currentTime)
					break;
					
				this.events[i].setInPast();
				this.prevEventID = i;
				lastEvent = this.events[i]; 
			}
		}
		else {
			for (var i = this.prevEventID; i >= 0; i--) {
				if (this.events[i].time <= this.currentTime)
					break;

				this.events[i].setInFuture();
				this.prevEventID = i - 1;
				lastEvent = this.events[i]; 
			}
		}

		this.setEmitEvent(true);
		if (lastEvent)
			this.prevTime < this.currentTime ? lastEvent.setInPast() : lastEvent.setInFuture();
	};

	Timeline.prototype.setEmitEvent = function setEmitEvent(value) {
		this.triggerEvents = value;
	};
	
	Timeline.prototype.emitEvent = function emitEvent(name, data) {
		if (this.triggerEvents)
			this.emit(name, data);
	};

	Timeline.prototype.setEvents = function setEvents() {
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
	};

	Timeline.prototype.play = function play(e) {
		if (e) e.stopPropagation();
		if (this.playing) return;
		if (this.currentTime === this.duration) return;

		this.startDate = new Date();
		this.startTime = this.currentTime;
		this.playing = setInterval(this.advance, 100);
		
		this.play_btn.setAttribute('playing', '');
		this.emit('play');
	};

	Timeline.prototype.pause = function pause(e) {
		if (e) e.stopPropagation();
		if (!this.playing) return;
		
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
	window.Timeline = Timeline;
})();
