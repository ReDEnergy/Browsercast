this["AppTemplate"] = this["AppTemplate"] || {};
this["AppTemplate"]["nav-panel"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span class=\"glyphicon glyphicon-";
  if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></span>\r\n<div class=\"text\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n";
  return buffer;
  });;
this["AppTemplate"] = this["AppTemplate"] || {};
this["AppTemplate"]["reveal-blank"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"slides\">\r\n	<section>\r\n		<br />\r\n		<h2>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\r\n		<br />\r\n		<p style=\"padding: 0 100px; text-align: right;\">\r\n			by\r\n			<span style=\"color: #13DAEC;\">";
  if (helper = helpers.author) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.author); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n		</p>\r\n	</section>\r\n</div>\r\n\r\n\r\n\r\n";
  return buffer;
  });;
this["AppTemplate"] = this["AppTemplate"] || {};
this["AppTemplate"]["reveal-export"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<!doctype html>\r\n<html>\r\n<head>\r\n	<meta charset=\"UTF-8\">\r\n	<title>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</title>\r\n\r\n	<meta name=\"description\" content=\"";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\r\n	<meta name=\"author\" content=\"";
  if (helper = helpers.author) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.author); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\r\n\r\n	<!-- libs stylesheets -->\r\n	<link rel=\"stylesheet\" href=\"js/reveal/css/theme/default.css\">\r\n	<link rel=\"stylesheet\" href=\"js/reveal/css/reveal.min.css\">\r\n	<link rel=\"stylesheet\" href=\"js/browsercast/browsercast.css\">\r\n	<link rel=\"stylesheet\" href=\"js/browsercast/timeline/timeline.css\">\r\n	<link rel=\"stylesheet\" href=\"js/browsercast/timeline/glyphicon.css\">\r\n	\r\n</head>\r\n\r\n<!-- Body -->\r\n<body>\r\n	<div id=\"browsercast\">\r\n		<div id=\"bc-audio\">\r\n			<code>\r\n				";
  if (helper = helpers.audio) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.audio); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n			</code>\r\n		</div>\r\n	</div>\r\n	<div class=\"reveal\">\r\n		<div class=\"slides\">\r\n			";
  if (helper = helpers.slides) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slides); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</div>\r\n	</div>\r\n\r\n	<script type=\"text/javascript\" src=\"js/reveal/lib/js/head.min.js\"></script>\r\n	<script type=\"text/javascript\" src=\"js/reveal/js/reveal.js\"></script>\r\n	<script type=\"text/javascript\" src=\"js/browsercast/browsercast-reveal.js\"></script>\r\n	<script type=\"text/javascript\" src=\"js/browsercast/timeline/EventEmitter.js\"></script>\r\n	<script type=\"text/javascript\" src=\"js/browsercast/timeline/timeline.js\"></script>\r\n	<script type=\"text/javascript\" src=\"js/init.js\"></script>\r\n</body>\r\n</html>";
  return buffer;
  });;
this["AppTemplate"] = this["AppTemplate"] || {};
this["AppTemplate"]["sync-panel"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"controls\">\r\n	<div id=\"load-audio\" class=\"button\">\r\n		<span class=\"glyphicon glyphicon-music\"> </span>\r\n		<div class=\"info\"> Add audio </div>\r\n		<div id=\"load-audio-body\" class=\"body\">\r\n			<input id=\"load-audio-source\" type=\"text\" placeholder=\"audio url\">\r\n			<div id=\"load-audio-ok\"> \r\n				<span class=\"glyphicon glyphicon-ok\"></span>\r\n			</div>\r\n			<!-- TODO: bug => hide when error -->\r\n			<audio id=\"load-audio-preview\" preload controls> </audio>\r\n			<div class=\"state\">\r\n				<div class=\"loading\"> Loading </div>\r\n				<div class=\"error\"> Error loading resource. Check again </div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div id=\"sync-save\" class=\"button\"> \r\n		<span class=\"glyphicon glyphicon-ok\"></span>\r\n		<span>Save sync</span>\r\n		<div class=\"info\">\r\n			saving...\r\n		</div>\r\n	</div>\r\n	<div id=\"sync-reset\" class=\"button\">\r\n		<span class=\"glyphicon glyphicon-repeat\"></span>\r\n		<span>Reset sync</span>\r\n	</div>\r\n	<div class=\"button totorial\">\r\n		<span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n		<div class=\"info\">\r\n			During playback press <b class=\"highlight\">T</b> to add a new transition point (advance to the next slide or fragment) </br>\r\n			You may delete a specific event by <b class=\"highlight\">hovering</b> over it and then press the delete button that appears </br>\r\n			<b class=\"highlight\">Save</b> : saves the audio synchronisation into the presentation </br>\r\n			<b class=\"highlight\">Reset</b> : resets the synchronisation process. Does not affect the presentation </br>\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n<div id=\"sync-area\">\r\n	<audio id=\"sync-audio-source\" preload> </audio>\r\n	<div id=\"sync-timeline\"></div>\r\n</div>";
  });;
this["AppTemplate"] = this["AppTemplate"] || {};
this["AppTemplate"]["download-panel"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"properties\">\r\n	<div>\r\n		<label>Title</label>\r\n		<input type=\"text\" class=\"title\" placeholder=\"Browsercast\" />\r\n	</div>\r\n	<div>\r\n		<label>Author</label>\r\n		<input type=\"text\" class=\"author\" placeholder=\"Browsercast\" />\r\n	</div>\r\n	<div>\r\n		<label>Description</label>\r\n		<textarea class=\"description\"></textarea>\r\n	</div>\r\n</div>\r\n<div class=\"info\">\r\n	<div class=\"text\">\r\n		Downloading resources: <span class=\"percentage\"></span>\r\n	</div>\r\n	<progress class=\"progress\" max=\"100\" value=\"0\"></progress>\r\n</div>\r\n<div class=\"download-btn button\">Download</div>\r\n";
  });;
this["AppTemplate"] = this["AppTemplate"] || {};
this["AppTemplate"]["history-panel"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"properties\">\r\n	<div>\r\n		<label>Title</label>\r\n		<input type=\"text\" class=\"title\" placeholder=\"@title\" />\r\n	</div>\r\n</div>\r\n<div class=\"restore-btn button\"> Restore </div>\r\n";
  });;
this["AppTemplate"] = this["AppTemplate"] || {};
this["AppTemplate"]["import-panel"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"info\"> Paste the HTML source of a reveal.js presentation below to import all contained slides. </div>\r\n<div id=\"import-editor\"></div>\r\n<div class=\"import-info\">\r\n	<span class=\"glyphicon glyphicon-ok\"></span>\r\n	<div class=\"import-slides-count\"></div>\r\n	<div class=\"import-btn button\"> import </div>\r\n</div>";
  });;
this["AppTemplate"] = this["AppTemplate"] || {};
this["AppTemplate"]["new-presentation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"properties\">\r\n	<div>\r\n		<label>Title</label>\r\n		<input type=\"text\" class=\"title\" placeholder=\"@title\" value=\"Title\"/>\r\n	</div>\r\n	<div>\r\n		<label>Author</label>\r\n		<input type=\"text\" class=\"author\" placeholder=\"@author\" value=\"@author\"/>\r\n	</div>\r\n	<div>\r\n		<label>Description</label>\r\n		<textarea class=\"description\"></textarea>\r\n	</div>\r\n</div>\r\n<div class=\"create-btn button\">Create</div>\r\n";
  });;
this["AppTemplate"] = this["AppTemplate"] || {};
this["AppTemplate"]["demo-about-audio"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "[[\"demo/audio/browsercast.ogg\",[0,111.258412,0]]]";
  });;
this["AppTemplate"] = this["AppTemplate"] || {};
this["AppTemplate"]["demo-about"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"slides\">\r\n	<section>\r\n		<br />\r\n		<h2>Browsercast</h2>\r\n		<br /><br />\r\n		<p>Browsercast is an HTML5 slideshow composition tool with support for voice-over synchronization</p>\r\n		<div style=\"text-align: left; padding: 30px 100px\">\r\n		    <p>Features:</p>\r\n		    <ul>\r\n		        <li>slide editor</li>\r\n		        <li>voice-over synchronization</li>\r\n		        <li>full playback functionality - play/stop/pause/resume</li>\r\n		        <li>presentations are index-able by search engines</li>\r\n		        <li>import and export</li>\r\n		        <li>no server required</li>\r\n		    </ul>\r\n		</div>\r\n	</section>\r\n\r\n	<section>\r\n		<br>\r\n		<h2>The Editor</h2>\r\n		<br>\r\n		<p>Use the <b>HTML code editor</b> provided to edit slide content</p>\r\n		<p>You can <b>add</b> new vertical/horizontal slides or delete them</p>\r\n		<p>Basic support for HTML5 <b>contenteditable</b>. <b>Click on the slide!</b></p>\r\n		<p>Add an audiocast and synchronize it with the slides</p>\r\n		<p>try <a href=\"https://raw.githubusercontent.com/ReDEnergy/Browsercast/master/public/demo/audio/audio.ogg\">this</a> audio-file <span style=\"color: red\">(use the link)</span></p>\r\n		<br>\r\n		<p data-fragment-index=\"0\" class=\"fragment visible\">You can use fragments too!</p>\r\n	</section>\r\n\r\n	<section>\r\n		<br />\r\n		<h3> Preview mode </h3>\r\n		<br /><br />\r\n		<p>Navigate with <b>arrows</b></p>\r\n		<p><b>ESC</b> to go to overview mode</p>\r\n		<p>Press <b>S or R</b> to Pause/Resume the presentation</p>\r\n	</section>\r\n\r\n	<section>\r\n		<p><img src=\"design/logo2.png\" /></p>\r\n		<p>Gabriel Ivanica</p>\r\n		<p><img src=\"demo/images/gsoc2014.png\" width=\"480\" /></p>\r\n		<p>Google Summer of Code 2014</p>\r\n		<aside class=\"notes\">\r\n			<p>Browsercast was developed by Gabriel Ivanica as part of Google Summer of Code 2014 based on earlier prototypes by David Seifried, Jeremy Banks, David Wolever, and Tavish Armstrong.</p>\r\n		</p>\r\n	</section>\r\n</div>";
  });;
this["AppTemplate"] = this["AppTemplate"] || {};
this["AppTemplate"]["demo-browsercast-audio"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "[[\"demo/audio/browsercast.ogg\",[0, 126, 0]]]";
  });;
this["AppTemplate"] = this["AppTemplate"] || {};
this["AppTemplate"]["demo-browsercast"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"slides\">\r\n	<section data-bc-start=\"0.00\" data-bc-end=\"2.96\">\r\n		<p><img src=\"demo/images/haiku.jpg\"></p>\r\n		<aside class=\"notes\">\r\n			<p>The Japanese wrote haikus.</p>\r\n		</aside>\r\n	</section>\r\n	<section data-bc-start=\"2.96\" data-bc-end=\"6.03\">\r\n		<p><img src=\"demo/images/sonnet.jpg\"></p>\r\n		<aside class=\"notes\">\r\n			<p>Shakespeare wrote sonnets.</p>\r\n		</aside>\r\n	</section>\r\n\r\n	<section data-bc-start=\"6.03\" data-bc-end=\"8.88\">\r\n		<p><img src=\"demo/images/worst-powerpoint.jpg\"></p>\r\n		<aside class=\"notes\">\r\n			<p>And we... write PowerPoint.</p>\r\n		</aside>\r\n	</section>\r\n\r\n	<section data-bc-start=\"8.88\" data-bc-end=\"13.69\">\r\n		<p><img src=\"demo/images/tufte.png\"></p>\r\n		<aside class=\"notes\">\r\n			<p>A lot of people blame PowerPoint for bad presentations...</p>\r\n		</aside>\r\n	</section>\r\n\r\n	<section data-bc-start=\"13.69\" data-bc-end=\"18.32\">\r\n		<p><img src=\"demo/images/fountain-pen.jpg\"></p>\r\n		<aside class=\"notes\">\r\n			<p>...but that's like blaming fountain pens for bad poetry</p>\r\n		</aside>\r\n	</section>\r\n\r\n	<section data-bc-start=\"18.32\" data-bc-end=\"22.10\">\r\n		<div style=\"vertical-align: middle\">\r\n			<img src=\"demo/images/powerpoint.png\">\r\n			<img src=\"demo/images/libreoffice.png\">\r\n		</div>\r\n		<div class=\"fragment\" data-bc-start=\"22.10\" data-bc-end=\"24.90\">\r\n			<img src=\"demo/images/internet-cat.jpg\">\r\n		</div>\r\n		<aside class=\"notes\">\r\n			<p>The <em>real</em> problem with today's slideshow tools is that they aren't web-friendly.</p>\r\n		</aside>\r\n	</section>\r\n\r\n	<section data-bc-start=\"24.90\" data-bc-end=\"30.84\">\r\n		<img src=\"demo/images/save-as-1.png\">\r\n		<img src=\"demo/images/save-as-2.png\">\r\n		<div class=\"fragment\" data-bc-start=\"30.84\" data-bc-end=\"33.10\">\r\n			<img src=\"demo/images/save-as-3.png\">\r\n		</div>\r\n		<aside class=\"notes\">\r\n			<p>When you export a slideshow to present on the web, what you actually get is a bunch of images.</p>\r\n		</aside>\r\n	</section>\r\n\r\n	<section data-bc-start=\"33.10\" data-bc-end=\"35.27\">\r\n		<img src=\"demo/images/pixels.png\" width=\"400\">\r\n		<div class=\"fragment\" data-bc-start=\"35.27\" data-bc-end=\"36.31\">\r\n			<p><strike>Hyperlinks</strike></p>\r\n		</div>\r\n		<div class=\"fragment\" data-bc-start=\"36.31\" data-bc-end=\"40.05\">\r\n			<p><strike>Searchability</strike> / <strike>accessibility</strike></p>\r\n		</div>\r\n		<aside class=\"notes\">\r\n			<p>There's no text, just pixels: no hyperlinks, and nothing search engines or disability aids can read.</p>\r\n		</aside>\r\n	</section>\r\n\r\n	<section data-bc-start=\"40.05\" data-bc-end=\"56.65\">\r\n		<img src=\"demo/images/camtasia.jpg\">\r\n		<aside class=\"notes\">\r\n			<p>If you want something people can replay, you have to make a screencast, which is also opaque to search engines and disability aids and probably several times larger than your original slides.</p>\r\n		</aside>\r\n	</section>\r\n\r\n	<section data-bc-start=\"56.65\" data-bc-end=\"66.35\">\r\n		<img src=\"demo/images/browsercast-editor.png\" width=\"480\">\r\n		<aside class=\"notes\">\r\n			<p>Browsercast is our solution to this problem.  It lets you edit a slideshow and synchronize it with a pre-recorded soundtrack.</p>\r\n		</aside>\r\n	</section>\r\n\r\n	<section data-bc-start=\"66.35\" data-bc-end=\"72.19\">\r\n		<div>\r\n			<img src=\"demo/images/export.png\" width=\"480\">\r\n		</div>\r\n		<div>\r\n			<img src=\"demo/images/browsers.png\" width=\"480\">\r\n		</div>\r\n		<aside class=\"notes\">\r\n			<p>Then export the slideshow to be replayed inside any modern browser.</p>\r\n		</aside>\r\n	</section>\r\n\r\n	<section data-bc-start=\"72.19\" data-bc-end=\"79.77\">\r\n		<img src=\"demo/images/html-source.png\">\r\n		<aside class=\"notes\">\r\n			<p>The slideshow is 100% HTML, so links, \"View Source\", and search work as they should.</p>\r\n		</aside>\r\n	</section>\r\n\r\n	<section data-bc-start=\"79.77\" data-bc-end=\"93.06\">\r\n		<img src=\"demo/images/planets.png\" width=\"480\">\r\n		<aside class=\"notes\">\r\n			<p>What's more, since a browsercast is just HTML and audio, you can restyle it with CSS, and it's a fraction of the size of a video screencast.</p>\r\n		</aside>\r\n	</section>\r\n\r\n	<section data-bc-start=\"93.06\" data-bc-end=\"97.42\">\r\n		<img src=\"demo/images/phone.jpg\" width=\"480\">\r\n		<aside class=\"notes\">\r\n			<p>All this makes it ideal for mobile devices.</p>\r\n		</aside>\r\n	</section>\r\n\r\n	<section data-bc-start=\"97.42\" data-bc-end=\"115.23\">\r\n		<br />\r\n		<p><img src=\"demo/images/gsoc2014.png\" width=\"480\"></p>\r\n		<p>Gabriel Ivanica</p>\r\n		<br />\r\n		<p><img src=\"design/logo2.png\"></p>\r\n		<ul>\r\n			<li>David Seifried</li>\r\n			<li>Jeremy Banks</li>\r\n			<li>David Wolever</li>\r\n			<li>Tavish Armstrong</li>\r\n		</ul>\r\n		<br />\r\n		<aside class=\"notes\">\r\n			<p>Browsercast was developed by Gabriel Ivanica as part of Google Summer of Code 2014 based on earlier prototypes by David Seifried, Jeremy Banks, David Wolever, and Tavish Armstrong.</p>\r\n			<p></p>\r\n		</aside>\r\n	</section>\r\n\r\n	<section data-bc-start=\"115.23\" data-bc-end=\"122\">\r\n		<a href=\"https://github.com/ReDEnergy/Browsercast\" target=\"_blank\"><img src=\"design/logo.png\"></a>\r\n		<p>\r\n			open source - <a href=\"https://github.com/ReDEnergy/Browsercast\">GitHub repository</a>\r\n		</p>\r\n		<br />\r\n		<br />\r\n		<p class=\"fragment\" style=\"color: #FF6734\" data-bc-start=\"122\" data-bc-end=\"126\">thanks for listening</p>\r\n	</section>\r\n\r\n</div>\r\n";
  });;
this["AppTemplate"] = this["AppTemplate"] || {};
this["AppTemplate"]["demo-browsercast2-audio"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "[[\"demo/audio/browsercast2.ogg\",[0, 111.25, 0]]]";
  });;
this["AppTemplate"] = this["AppTemplate"] || {};
this["AppTemplate"]["demo-browsercast2"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"slides\">\r\n	<section data-bc-start=\"0.00\" data-bc-end=\"2.70\">\r\n		<p><img src=\"demo/images/haiku.jpg\" /></p>\r\n		<aside class=\"notes\">\r\n			<p>The Japanese wrote haikus.</p>\r\n		</aside>\r\n	</section>\r\n	\r\n	<section data-bc-start=\"2.70\" data-bc-end=\"5.25\">\r\n		<p><img src=\"demo/images/sonnet.jpg\" /></p>\r\n		<aside class=\"notes\">\r\n			<p>Shakespeare wrote sonnets.</p>\r\n		</aside>\r\n	</section>\r\n	\r\n	<section data-bc-start=\"5.25\" data-bc-end=\"8.10\">\r\n		<p><img src=\"demo/images/worst-powerpoint.jpg\" /></p>\r\n		<aside class=\"notes\">\r\n			<p>And we... write PowerPoint.</p>\r\n		</aside>\r\n	</section>\r\n	\r\n	<section data-bc-start=\"8.10\" data-bc-end=\"12.20\">\r\n		<p><img src=\"demo/images/tufte.png\" /></p>\r\n		<aside class=\"notes\">\r\n			<p>A lot of people blame PowerPoint for bad presentations...</p>\r\n		</aside>\r\n	</section>\r\n	\r\n	<section data-bc-start=\"12.20\" data-bc-end=\"15.90\">\r\n		<p><img src=\"demo/images/fountain-pen.jpg\" /></p>\r\n		<aside class=\"notes\">\r\n			<p>...but that's like blaming fountain pens for bad poetry</p>\r\n		</aside>\r\n	</section>\r\n	\r\n	<section data-bc-start=\"15.90\" data-bc-end=\"19.60\">\r\n		<div style=\"vertical-align: middle\">\r\n			<img src=\"demo/images/powerpoint.png\" />\r\n			<img src=\"demo/images/libreoffice.png\" />\r\n		</div>\r\n		<div class=\"fragment\" data-bc-start=\"19.60\" data-bc-end=\"22.10\">\r\n			<img src=\"demo/images/internet-cat.jpg\" />\r\n		</div>\r\n		<aside class=\"notes\">\r\n			<p>The <em>real</em> problem with today's slideshow tools is that they aren't web-friendly.</p>\r\n		</aside>\r\n	</section>\r\n	\r\n	<section data-bc-start=\"22.10\" data-bc-end=\"26.50\">\r\n		<img src=\"demo/images/save-as-1.png\" />\r\n		<img src=\"demo/images/save-as-2.png\" />\r\n		<div class=\"fragment\" data-bc-start=\"26.50\" data-bc-end=\"29.40\">\r\n			<img src=\"demo/images/save-as-3.png\" />\r\n		</div>\r\n		<aside class=\"notes\">\r\n			<p>When you export a slideshow to present on the web, what you actually get is a bunch of images.</p>\r\n		</aside>\r\n	</section>\r\n	\r\n	<section data-bc-start=\"29.40\" data-bc-end=\"34.50\">\r\n		<img src=\"demo/images/pixels.png\" width=\"400\"/>\r\n		<div class=\"fragment\" data-bc-start=\"34.50\" data-bc-end=\"36.0\">\r\n			<p><strike>Hyperlinks</strike></p>\r\n		</div>\r\n		<div class=\"fragment\" data-bc-start=\"36.0\" data-bc-end=\"43.0\">\r\n			<p><strike>Searchability</strike> / <strike>accessibility</strike></p>\r\n		</div>\r\n		<aside class=\"notes\">\r\n			<p>There's no text, just pixels: no hyperlinks, and nothing search engines or disability aids can read.</p>\r\n		</aside>\r\n	</section>\r\n	\r\n	<section data-bc-start=\"43.0\" data-bc-end=\"58.5\">\r\n		<img src=\"demo/images/camtasia.jpg\" />\r\n		<aside class=\"notes\">\r\n			<p>If you want something people can replay, you have to make a screencast, which is also opaque to search engines and disability aids and probably several times larger than your original slides.</p>\r\n		</aside>\r\n	</section>\r\n	\r\n	<section data-bc-start=\"58.5\" data-bc-end=\"68.5\">\r\n		<img src=\"demo/images/browsercast-editor.png\" width=\"480\"/>\r\n		<aside class=\"notes\">\r\n			<p>Browsercast is our solution to this problem.  It lets you edit a slideshow and synchronize it with a pre-recorded soundtrack.</p>\r\n		</aside>\r\n	</section>\r\n	\r\n	<section data-bc-start=\"68.5\" data-bc-end=\"78.5\">\r\n		<div>\r\n			<img src=\"demo/images/export.png\" width=\"480\"/>\r\n		</div>\r\n		<div>\r\n			<img src=\"demo/images/browsers.png\" width=\"480\"/>\r\n		</div>\r\n		<aside class=\"notes\">\r\n			<p>Then export the slideshow to be replayed inside any modern browser.</p>\r\n		</aside>\r\n	</section>\r\n\r\n	<section>\r\n		<img src=\"demo/images/html-source.png\" />\r\n		<aside class=\"notes\">\r\n			<p>The slideshow is 100% HTML, so links, \"View Source\", and search work as they should.</p>\r\n		</aside>\r\n	</section>\r\n\r\n	<section>\r\n		<img src=\"demo/images/planets.png\" width=\"480\" />\r\n		<aside class=\"notes\">\r\n			<p>What's more, since a browsercast is just HTML and audio, you can restyle it with CSS, and it's a fraction of the size of a video screencast.</p>\r\n		</aside>\r\n	</section>\r\n	\r\n	<section>\r\n		<img src=\"demo/images/phone.jpg\" width=\"480\" />\r\n		<aside class=\"notes\">\r\n			<p>All this makes it ideal for mobile devices.</p>\r\n		</aside>\r\n	</section>\r\n	\r\n	<section>\r\n		<a href=\"https://github.com/ReDEnergy/Browsercast\" target=\"_blank\"><img src=\"design/logo.png\" /></a>\r\n		<aside class=\"notes\">\r\n			<p>Browsercast is open source. If you would like to help us make it better, please <a href=\"https://github.com/ReDEnergy/Browsercast\">fork our repo</a>.</p>\r\n			<p>We hope you like it; thanks for listening.</p>\r\n		</aside>\r\n	</section>\r\n\r\n	<section>\r\n		<p><img src=\"design/logo2.png\" /></p>\r\n		<p>Gabriel Ivanica</p>\r\n		<p><img src=\"demo/images/gsoc2014.png\" width=\"480\" /></p>\r\n		<p>Google Summer of Code 2014</p>\r\n		<aside class=\"notes\">\r\n			<p>Browsercast was developed by Gabriel Ivanica as part of Google Summer of Code 2014 based on earlier prototypes by David Seifried, Jeremy Banks, David Wolever, and Tavish Armstrong.</p>\r\n		</p>\r\n	</section>\r\n</div>\r\n";
  });;