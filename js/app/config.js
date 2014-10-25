define(function(require, exports, module) {
	'use strict';

	// Load Modules
	// var Module = require('path/to/module');

	// API

	var Presentation = {
		title: 'Browsercast',
		author: 'Browsercast',
		description: ''
	};

	var setProperty = function setProperty(property, value) {
		if (Presentation.hasOwnProperty(property)) {
			Presentation[property] = value;
		}
	};

	var setProperty = function setProperty(property, value) {
		if (Presentation.hasOwnProperty(property)) {
			Presentation[property] = value;
		}
	};

	var getProperty = function getProperty(property) {
		if (Presentation.hasOwnProperty(property)) {
			return Presentation[property];
		}
		return null;
	};

	// PUBLIC API
	exports.Presentation = Presentation;
	exports.setProperty = setProperty;
	exports.getProperty = getProperty;
});