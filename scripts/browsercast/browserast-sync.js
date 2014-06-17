function trackMouse(elem, callback, startFunc, endFunc) {
	startFunc = startFunc || function(e) {};
	endFunc = endFunc || function(e) {};

	elem.addEventListener('mousedown', function(e) {
		e.stopPropagation();
		e.preventDefault();
		startFunc(e);

		document.addEventListener('mousemove', callback);
		document.addEventListener('mouseup', function up(e) {
			document.removeEventListener('mousemove', callback);
			document.removeEventListener('mouseup', up);
			endFunc(e);
		});
	});
}

function Node(type, attrs) {
	var elem = document.createElement(type);

	attrs && Object.keys(attrs).forEach(function(attr) {
		elem.setAttribute(attr, attrs[attr]);
	});

	return elem;
}

// TODO - should units be px or % ?
// TODO - make this a Class
// TODO - use better variable names

var BcSync = (function BrowsercastSync() {
	"use strict";

	var timeline;
	var prop;
	var selected;
	var tooltip_left;
	var tooltip_right;
	var mouseX;
	var posX = 0;
	var startX = 0;
	var size = 100;
	var sizeX = 100;
	var size_px = 100;
	var scale = 1;

	var getMouseDeltaX = function getMouseDeltaX(e) {
		var deltaX = e.clientX - mouseX;
		return deltaX / size_px * 100;
	};

	var updateSelectionPosition = function updateSelectionPosition(e) {
		var delta = getMouseDeltaX(e);
		posX = startX + delta;
		if (posX < 0)
			posX = 0;
		if (posX + size > 100)
			posX = 100 - size;
		selected.style.left = posX + '%';
		tooltip_left.textContent = (scale * posX).toFixed(2);
		tooltip_right.textContent = (scale * (posX + sizeX)).toFixed(2);
	};

	var updateLeftHandle = function updateLeftHandle(e) {
		var delta = -getMouseDeltaX(e);
		posX = startX - delta;
		sizeX = size + delta;

		if (posX < 0) {
			posX = 0;
			sizeX = size + startX;
		}
		if (sizeX < 0) {
			sizeX = 0;
			posX = startX + size;
		}
		selected.style.left = posX + '%';
		selected.style.width = sizeX + '%';
		tooltip_left.textContent = (scale * posX).toFixed(2);
	};

	var updateRightHandle = function updateRightHandle(e) {
		var delta = getMouseDeltaX(e);
		sizeX = size + delta;
		if (startX + sizeX > 100)
			sizeX = 100 - startX;
		if (sizeX < 0)
			sizeX = 0;
		selected.style.width = sizeX + '%';
		tooltip_right.textContent = (scale * (startX + sizeX)).toFixed(2);
	};

	var update = function update() {
		posX = startX;
		sizeX = size;
		selected.style.left = startX + '%';
		selected.style.width = size + '%';
		tooltip_left.textContent = (scale * startX).toFixed(2);
		tooltip_right.textContent = (scale * (startX + size)).toFixed(2);
	};

	var ClipSection = {};
	ClipSection.mouseDown = function mouseDown(e) {
		mouseX = e.clientX;
	};

	ClipSection.mouseMove = function mouseMove(e) {
	};

	ClipSection.mouseUp = function mouseUp(e) {
		startX = posX;
		size = sizeX;
	};

	var set = function set(options) {
		if (options.scale) {
			scale = options.scale / 100;
		}
		if (options.hasOwnProperty('start')) {
			startX = parseFloat(options.start) / scale;
		}
		if (options.hasOwnProperty('length')) {
			size = parseFloat(options.length) / scale;
		}
		update();
	};

	var get = function get() {
		return {
			start: (startX * scale).toFixed(2),
			length: (size * scale).toFixed(2)
		};
	};

	var onResize = function onResize() {
		console.log('resize');
		var bounding = timeline.getBoundingClientRect();
		size_px = bounding.right - bounding.left;
	};

	var create = function create() {
		timeline = Node('div', {class: 'timeline'});
		selected = Node('div', {class: 'section'});
		var handle_left = Node('div', {class: 'handle-left'});
		var handle_right = Node('div', {class: 'handle-right'});
		tooltip_left = Node('div', {class: 'tooltip-left'});
		tooltip_right = Node('div', {class: 'tooltip-right'});
		selected.appendChild(tooltip_left);
		selected.appendChild(tooltip_right);
		selected.appendChild(handle_left);
		selected.appendChild(handle_right);
		timeline.appendChild(selected);

		onResize();
		window.addEventListener('resize', onResize);

		trackMouse(selected, updateSelectionPosition, ClipSection.mouseDown, ClipSection.mouseUp);
		trackMouse(handle_left, updateLeftHandle, ClipSection.mouseDown, ClipSection.mouseUp);
		trackMouse(handle_right, updateRightHandle, ClipSection.mouseDown, ClipSection.mouseUp);
		return timeline;
	};

	return {
		set : set,
		get : get,
		onResize : onResize,
		create : create
	};

})();