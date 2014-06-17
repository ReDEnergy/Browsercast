loadPresentation(function() {
	impress().init();
	impress().goto('overview');

	Browsercast.initialize({
		framework: 'impress.js'
	});

	if ("ontouchstart" in document.documentElement) {
		document.querySelector(".hint").innerHTML =
			"<p>Tap on the left or right to navigate</p>";
	}
});

document.addEventListener("keydown", function(e) {
	if (e.keyCode == 27) {
		impress().goto('overview');
	}
});