'use strict';
var loadPresentation = function(callback) {
	var presentation = JSON.parse(localStorage.getItem('preview-presentation'));
	console.log("Presentation:", presentation);
	if (presentation) {
		var impress = document.getElementById('impress');
		var browsercast = document.getElementById('browsercast');
		impress.innerHTML = presentation.impress;
		browsercast.innerHTML = presentation.browsercast;
		callback();
	}
};