impress().init();

document.addEventListener("keydown", function(e) {
	if (e.keyCode == 27) {
		impress().goto('overview');
	}
});

Browsercast.initialize({
	framework: 'impress.js'
});
