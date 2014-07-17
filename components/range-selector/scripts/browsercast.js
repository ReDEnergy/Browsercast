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

var Browsercast = (function Browsercast() {
	"use strict";

	var elem;
	var timeline;
	var prop;
	var selected;
	var mouseX;
	var posX = 0;
	var startX = 0;
	var size = 100;
	var sizeX = 100;
	var size_px = 100;

	var getMouseDeltaX = function getMouseDeltaX(e) {
		var deltaX = e.clientX - mouseX;
		return deltaX / size_px * 100;
	}

	var updateSelectionPosition = function updateSelectionPosition(e) {
		var delta = getMouseDeltaX(e)
		posX = startX + delta;
		if (posX < 0)
			posX = 0;
		if (posX + size > 100)
			posX = 100 - size;
		selected.style.left = posX + '%';
	}

	var updateLeftHandle = function updateLeftHandle(e) {
		var delta = -getMouseDeltaX(e)
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
	}

	var updateRightHandle = function updateRightHandle(e) {
		var delta = getMouseDeltaX(e)
		sizeX = size + delta;
		if (posX + sizeX > 100)
			sizeX = 100 - posX;
		if (sizeX < 0)
			sizeX = 0;
		selected.style.width = sizeX + '%';
	}

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
		length = options.length;
	}

	var update = function update() {
		console.log('resize');
		var bounding = timeline.getBoundingClientRect();
		size_px = bounding.right - bounding.left;
	}

	var create = function create(parentID) {
		elem = document.getElementById(parentID);

		timeline = Node('div', {class: 'timeline'});
		selected = Node('div', {class: 'section'});
		var handle_left = Node('div', {class: 'handle-left'});
		var handle_right = Node('div', {class: 'handle-right'});
		selected.appendChild(handle_left);
		selected.appendChild(handle_right);
		timeline.appendChild(selected);
		elem.appendChild(timeline);

		update();
		window.addEventListener('resize', update);

		trackMouse(selected, updateSelectionPosition, ClipSection.mouseDown, ClipSection.mouseUp);
		trackMouse(handle_left, updateLeftHandle, ClipSection.mouseDown, ClipSection.mouseUp);
		trackMouse(handle_right, updateRightHandle, ClipSection.mouseDown, ClipSection.mouseUp);
	};

	return {
		create : create,
		set : set
	}

})();