define(function(require, exports, module) {
	"use strict";


	function stopPropagation(e) {
		e.stopPropagation();
	}

	function getChildsByTag(rootElem, tagName) {
		var elems = [];
		[].forEach.call(rootElem.children, function (child) {
			if (child.tagName === tagName.toUpperCase())
				elems.push(child);
		});
		return elems;
	}

	return {
		stopPropagation: stopPropagation,		getChildsByTag: getChildsByTag

	};
});