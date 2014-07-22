'use strict';


function Mark(timeline, time, data) {
	var elem = document.createElement('div');
	elem.className = 'mark';

	this.timeline = timeline;
	this.time = time;
	this.past = false;
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
		this.timeline.updateMarks();
	}

	function handleDoubleClick(e) {
		e.stopPropagation();
		this.remove();
	}

	function handleMouseDown() {

	}

	function handleMouseUp() {

	}

	function handleMouseMove() {

	}

	timeline.timeline.appendChild(elem);
}

Mark.prototype.computePosition = function computePosition() {
	if (this.time < 0) this.time = 0;
	if (this.time > timeline.timeframe) this.time = timeline.timeframe;

	this.pos = (this.time / timeline.timeframe) * timeline.size;
	this.elem.style.left = this.pos + 'px';
};

Mark.prototype.remove = function remove() {
	var index = timeline.marks.indexOf(this);
	timeline.marks.splice(index, 1);
	timeline.timeline.removeChild(this.elem);
};

Mark.prototype.setFuture = function setFuture() {
	if (this.past === true) {
		this.past = false;
		this.timeline.emit('futureMark', this.data);
		return true;
	}
	return false;
};

Mark.prototype.setPast = function setPast() {
	if (this.past === false) {
		this.past = true;
		this.timeline.emit('pastMark', this.data);
		return true;
	}
	return false;
};


function Timeline() {
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
	this.timeframe = 60;
	this.dir = 0;
	this.marks = [];
	this.current_mark_id = null;

	this.advance = this.advance.bind(this);
	this.pause = this.pause.bind(this);
	this.play = this.play.bind(this);
	this.handleMouseDown = this.handleMouseDown.bind(this);
	this.handleMouseMove = this.handleMouseMove.bind(this);
	this.handleMouseUp = this.handleMouseUp.bind(this);
	this.setEvents();
}

Timeline.prototype = Object.create(EventEmitter.prototype);

Timeline.prototype.updateLayout = function updateLayout(pos) {
	this.box = this.timeline.getBoundingClientRect();
	this.size = this.box.right - this.box.left;
	this.layout = true;
};

Timeline.prototype.setTimeFrame = function setTimeFrame(timeframe) {
	this.timeframe = timeframe;
	for (var i=0; i<this.marks.length; i++) {
		this.marks[i].computePosition();
	}
};

Timeline.prototype.setCurrentTime = function setCurrentTime(time) {
	if (time < 0) time = 0;
	if (time > this.timeframe) time = this.timeframe;
	this.currentTime = time;
	var pos = (time / this.timeframe) * this.size;
	this.setPointerPosition(pos);
};

Timeline.prototype.computeLayout = function computeLayout(pos) {
	this.box = this.timeline.getBoundingClientRect();
	this.size = this.box.right - this.box.left;
	this.layout = true;
};

Timeline.prototype.updateTimeInfo = function updateTimeInfo() {
	var time = (this.tpos/this.size * this.timeframe);
	var seconds = ((time % 60) | 0);
	var minutes = ((time / 60) | 0);
	if (seconds < 10)
		seconds = '0' + seconds;
	this.time_info.textContent = minutes + ':' + seconds;
	this.currentTime = time;
};

Timeline.prototype.setPointerPosition = function setPointerPosition(pos) {
	if (pos < 0)	pos = 0;
	if (pos > this.size) {
		pos = this.size;
		this.pause();
	}
	pos > this.tpos ? (this.dir = 1) : (this.dir = -1);
	this.tpos = pos;
	this.time_pointer.style.left = pos + 'px';
	this.fill.style.width = pos + 'px';
	this.updateTimeInfo();
	this.updateMarks();
};

Timeline.prototype.addMark = function addMark(time, data) {
	var mark = new Mark(this, time, data);
	this.marks.push(mark);
	this.sortMarks();
};

Timeline.prototype.removeAllMarks = function removeAllMarks() {
	for (var i=0; i<this.marks.length; i++)
		this.timeline.removeChild(this.marks[i].elem);
	this.marks = [];

};

Timeline.prototype.sortMarks = function sortMarks() {
	this.marks.sort(function(a, b) {
		return a.pos - b.pos;
	});
};

// TODO - explain this ... looks really strage
Timeline.prototype.updateMarks = function updateMarks() {
	var len = this.marks.length;
	if (len === 0)
		return;

	var index = -1;
	var change = false;
	for (var i = len - 1; i >= 0; i--) {
		if (this.marks[i].pos < this.tpos) {
			index = i;
			break;
		}
		else
			change = change | this.marks[i].setFuture();
	}

	for (var i = 0; i <= index; i++) {
		change = change | this.marks[i].setPast();
	}

	if (index === -1) {
		change = change | this.marks[0].setFuture();
	}

	if (change) {
		if (this.dir > 0) {
			this.marks[index].setPast();
		}
		else {
			if ((index + 1) < len)
				this.marks[index + 1].setFuture();
		}

		// log type
		// var s = '';
		// for (var i = 0; i < len; i++) {
			// s += (this.marks[i].past ? '1' : '0') + ' ';
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
};

Timeline.prototype.advance = function advance() {
	var diff = new Date() - this.startDate;
	this.setCurrentTime(this.startTime + diff / 1000);
};

Timeline.prototype.play = function play(e) {
	if (e) e.stopPropagation();
	if (!this.layout) this.updateLayout();
	if (this.playing) return;
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
	if (!this.layout) this.updateLayout();
	if (this.playing) this.pause(e);
	var delta = e.clientX - this.box.left;
	this.setPointerPosition(delta);
};

Timeline.prototype.handleMouseMove = function handleMouseMove(e) {
	var posX = e.clientX - this.startX;
	this.setPointerPosition(posX);
};

Timeline.prototype.handleMouseDown = function handleMouseDown(e) {
	if (!this.layout) this.updateLayout();
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
