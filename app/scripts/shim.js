window.isOptimized = false;
if (!Function.prototype.bind) {
	Function.prototype.bind = function (oThis) {
	if (typeof this !== "function") {
		// closest thing possible to the ECMAScript 5 internal IsCallable function
		throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
	}

	var aArgs = Array.prototype.slice.call(arguments, 1),
		fToBind = this,
		fNOP = function () {},
		fBound = function () {
			return fToBind.apply(this instanceof fNOP && oThis
								? this
								: oThis,
								aArgs.concat(Array.prototype.slice.call(arguments)));
		};

	fNOP.prototype = this.prototype;
	fBound.prototype = new fNOP();

	return fBound;
  };
}

if (!Array.prototype.some) {
	Array.prototype.some = function(fun /*, thisp */) {
		'use strict';
	
		if (this == null) {
			throw new TypeError();
		}
	
		var thisp, i,
			t = Object(this),
			len = t.length >>> 0;
		if (typeof fun !== 'function') {
			throw new TypeError();
		}
	
		thisp = arguments[1];
		for (i = 0; i < len; i++) {
			if (i in t && fun.call(thisp, t[i], i, t)) {
				return true;
			}
		}
	
		return false;
	};
}

if (!Array.prototype.forEach) {
	Array.prototype.forEach = function (fn, scope) {
		'use strict';
		var i, len;
		for (i = 0, len = this.length; i < len; ++i) {
			if (i in this) {
				fn.call(scope, this[i], i, this);
			}
		}
	};
}

var head = document.getElementsByTagName('head')[0];
function appendScript(src) {
	var s = document.createElement("script");
	s.type = "text/javascript";
	s.src = src;
	head.appendChild(s);
}

if (window.location.href.indexOf("preview=true") == -1) {
	window.dlSupported = 'download' in document.createElement('a');
	window.hasFlash = swfobject.hasFlashPlayerVersion(9);
	if (!dlSupported && window.hasFlash) {
		appendScript('preview_export/download_assist/downloadify.min.js');
	}
}