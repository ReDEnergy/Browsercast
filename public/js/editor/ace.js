define(function(require, exports, module) {
	'use strict';

	// Load Modules

	// TODO - BUG
	// it exports 'ace' global and not the assignment 'Ace'
	// var Ace = require('ace-editor');
	// console.log('ace', ace);

	function initAceEditor(id, mode) {
		var Editor = ace.edit(id);
		Editor.setTheme('ace/theme/chrome');
		Editor.getSession().setMode('ace/mode/' + mode);
		Editor.setWrapBehavioursEnabled(true);
		return Editor;
	}

	return {
		create : initAceEditor
	};
});