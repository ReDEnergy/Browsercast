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

	function getURLParam(val) {
	    var result = undefined,
	        tmp = [];
	    location.search
	    	.substr(1)
	        .split("&")
	        .forEach(function (item) {
	        tmp = item.split("=");
	        if (tmp[0] === val) result = decodeURIComponent(tmp[1]);
	    });
	    return result;
	}


	// Public API
	exports.stopPropagation = stopPropagation;
	exports.getChildsByTag = getChildsByTag;
	exports.getURLParam = getURLParam;
});