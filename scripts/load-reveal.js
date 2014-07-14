function loadReveal() {
	Reveal.initialize({
		controls: true,
		progress: true,
		history: true,
		center: true,
		overview: true,

		theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
		transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

	    // Optional libraries used to extend on reveal.js
	    dependencies: [
	      { src: 'libs/reveal/lib/js/classList.js', condition: function() { return !document.body.classList; } },
	      { src: 'libs/reveal/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
	      { src: 'libs/reveal/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
	    ]
	});
}