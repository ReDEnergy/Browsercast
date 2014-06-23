// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,
	overview: true,

	theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
	transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

	// Parallax scrolling
	// parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
	// parallaxBackgroundSize: '2100px 900px',
	
    // Optional libraries used to extend on reveal.js
    dependencies: [
      { src: 'reveal/lib/js/classList.js', condition: function() { return !document.body.classList; } },
      { src: 'reveal/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      { src: 'reveal/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      { src: 'reveal/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
      { src: 'reveal/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
      { src: 'reveal/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
    ]
});

Reveal.toggleOverview();

Browsercast.initialize({
	framework: 'reveal.js'
});