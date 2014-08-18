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
this["AppTemplate"]["import-panel"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"info\"> Paste the HTML source of a reveal.js presentation below to import all contained slides. </div>\r\n<div id=\"import-editor\"></div>\r\n<div id=\"import-info\">\r\n	<span class=\"glyphicon glyphicon-ok\"></span>\r\n	<div id=\"import-slides-count\"></div>\r\n	<div id=\"import-slides\" class=\"button import\"> import </div>\r\n</div>";
  });;
this["AppTemplate"] = this["AppTemplate"] || {};
this["AppTemplate"]["audio"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "[[\"demo/audio/audio.ogg\",[0,111.258412,0]]]";
  });;
this["AppTemplate"] = this["AppTemplate"] || {};
this["AppTemplate"]["browsercast"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"slides\">\r\n	<section data-bc-start=\"0.00\" data-bc-end=\"2.70\">\r\n		<img src=\"/demo/images/haiku.jpg\" />\r\n		<p>The Japanese wrote haikus</p>\r\n	</section>\r\n	\r\n	<section data-bc-start=\"2.70\" data-bc-end=\"5.25\">\r\n		<img src=\"/demo/images/sonnet.jpg\" />\r\n		<p>Shakespeare wrote sonnets</p>\r\n	</section>\r\n	\r\n	<section data-bc-start=\"5.25\" data-bc-end=\"8.10\">\r\n		<img src=\"/demo/images/worst-powerpoint.jpg\" />\r\n		<p>And we... write PowerPoint</p>\r\n	</section>\r\n	\r\n	<section data-bc-start=\"8.10\" data-bc-end=\"12.20\">\r\n		<img src=\"/demo/images/tufte.png\" />\r\n		<p>A lot of people blame PowerPoint for bad presentations...</p>\r\n	</section>\r\n	\r\n	<section data-bc-start=\"12.20\" data-bc-end=\"15.90\">\r\n		<img src=\"/demo/images/fountain-pen.jpg\" />\r\n		<p>...but that's like blaming fountain pens for bad poetry</p>\r\n	</section>\r\n	\r\n	<section data-bc-start=\"15.90\" data-bc-end=\"19.60\">\r\n		<div style=\"vertical-align: middle\">\r\n			<img src=\"/demo/images/powerpoint.png\" />\r\n			<img src=\"/demo/images/libreoffice.png\" />\r\n		</div>\r\n		<p>The <em>real</em> problem with today's slideshow tools...</p>\r\n		<div class=\"fragment\" data-bc-start=\"19.60\" data-bc-end=\"22.10\">\r\n			<img src=\"/demo/images/internet-cat.jpg\" />\r\n			<p>...is that they aren't web-friendly</p>\r\n		</div>\r\n	</section>\r\n	\r\n	<section data-bc-start=\"22.10\" data-bc-end=\"26.50\">\r\n		<img src=\"/demo/images/save-as-1.png\" />\r\n		<img src=\"/demo/images/save-as-2.png\" />\r\n		<p>When you export a slideshow to present on the web...</p>\r\n		<div class=\"fragment\" data-bc-start=\"26.50\" data-bc-end=\"29.40\">\r\n			<img src=\"/demo/images/save-as-3.png\" />\r\n			<p>...what you actually get is a bunch of images</p>\r\n		</div>\r\n	</section>\r\n	\r\n	<section>\r\n		<img src=\"/demo/images/pixels.png\" width=\"400\"/>\r\n		<p>There's no text, just pixels</p>\r\n		<p class=\"fragment\">No hyperlinks</p>\r\n		<p class=\"fragment\">Nothing search engines or disability aids can read</p>\r\n	</section>\r\n	\r\n	<section>\r\n		<img src=\"/demo/images/camtasia.jpg\" />\r\n		<p> If you want something people can replay, <br />  you have to make a screencast...</p>\r\n		<br /> \r\n		<p class=\"fragment\"> ...which is also opaque to search engines and disability aids <br /> and probably several times larger than your original slides</p>\r\n	</section>\r\n	\r\n	<section>\r\n		<section>\r\n			<img src=\"/demo/images/browsercast-editor.png\" width=\"480\"/>\r\n			<p>Browsercast is our solution to this problem </p>\r\n			<p class=\"fragment\">It lets you edit a slideshow and synchronize it with a pre-recorded soundtrack</p>\r\n		</section>\r\n	\r\n		<section>\r\n			<img src=\"/demo/images/export.png\" width=\"480\"/>\r\n			<p>Then export the slideshow to be replayed inside any modern browser</p>\r\n			<img src=\"/demo/images/browsers.png\" width=\"320\"/>\r\n		</section>\r\n\r\n		<section>\r\n			<img src=\"/demo/images/html-source.png\" />\r\n			<p>The slideshow is 100% HTML, so links, \"View Source\", <br /> and search work as they should</p>\r\n		</section>\r\n\r\n		<section>\r\n			<img src=\"/demo/images/planets.png\" width=\"480\" />\r\n			<p>\r\n			What's more, since a browsercast is just HTML and audio <br /> \r\n			you can restyle it with CSS\r\n			</p>\r\n			<p class=\"fragment\">\r\n				... and it's a fraction of the size of a video screencast.\r\n			</p>\r\n		</section>\r\n	</section>\r\n	\r\n	<section>\r\n		<img src=\"/demo/images/phone.jpg\" width=\"480\" />\r\n		<p>All this makes it ideal for mobile devices.</p>\r\n	</section>\r\n	\r\n	<section>\r\n		<p>\r\n			<a href=\"https://github.com/ReDEnergy/Browsercast\" target=\"_blank\">\r\n				<img src=\"/design/logo.png\" />\r\n			</a>\r\n		</p>\r\n		<p>\r\n			Browsercast is open source. If you would like to help us <br /> \r\n			make it better, please <a href=\"https://github.com/ReDEnergy/Browsercast\">fork our repo</a>.\r\n		</p>\r\n		<br />\r\n		<p>We hope you like it; thanks for listening</p>\r\n	</section>\r\n\r\n	<section>\r\n		<p>Browsercast was developed by <a href=\"\">Gabriel Ivanica</a> <br /> as part of Google Summer of Code 2014</p>\r\n		<img src=\"/demo/images/gsoc2014.png\" width=\"480\" />\r\n		<br />\r\n		<br />\r\n		<p>The project is based on earlier prototypes by <br /> \r\n			<a href=\"\">David Seifried</a>, \r\n			<a href=\"\">Jeremy Banks</a>, \r\n			<a href=\"\">David Wolever</a> and <br /> \r\n			<a href=\"\">Tavish Armstrong</a>\r\n		</p>\r\n		<img src=\"/design/logo2.png\" style=\"margin: 100px 0 0 0;\" />\r\n	</section>\r\n</div>\r\n";
  });;
this["AppTemplate"] = this["AppTemplate"] || {};
this["AppTemplate"]["demo"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"slides\">\r\n	<section>\r\n		<br />\r\n		<h2>Browsercast</h2>\r\n		<br /><br />\r\n		<p>The project aims to offer a web based slideshow composition tool with support for voice-over synchronization</p>\r\n		<div style=\"text-align: left; padding: 30px 100px\">\r\n		    <p>Features:</p>\r\n		    <ul>\r\n		        <li>slide editor</li>\r\n		        <li>perfect voice-over synchronization</li>\r\n		        <li>playback functions - play/stop/pause/resume</li>\r\n		        <li>presentations are index-able by search engines</li>\r\n		        <li>import and export</li>\r\n		    </ul>\r\n		</div>\r\n	</section>\r\n\r\n	<section>\r\n		<br>\r\n		<h2>The Editor</h2>\r\n		<br>\r\n		<br>\r\n		<p>Use the <b>HTML code editor</b> provided to edit slide content</p>\r\n		<p>You can <b>add</b> new vertical/horizontal slides or delete them</p>\r\n		<p>Basic support for HTML5 <b>contenteditable</b>. <b>Click on the slide!</b></p>\r\n		<p>Add an audiocast and synchronize it with the slides</p>\r\n		<p>try <a href=\"https://dl.dropboxusercontent.com/u/14586656/Browsercast/audio.ogg\">this</a> audio-file <span style=\"color: red\">(use the link)</span></p>\r\n		<br>\r\n		<p data-fragment-index=\"0\" class=\"fragment visible\">You can use fragments too!</p>\r\n	</section>\r\n\r\n	<section>\r\n		<br />\r\n		<h3> Preview mode </h3>\r\n		<br /><br />\r\n		<p style=\"color: red\"> This slide has no audio</p>\r\n		<p>Navigate with <b>arrows</b></p>\r\n		<p><b>ESC</b> to go to overview mode</p>\r\n		<p>Press <b>S or R</b> to Pause/Resume the presentation</p>\r\n		<p  style=\"color: red\"> Next slides are synchronized with audio </p>\r\n	</section>\r\n\r\n	<section>\r\n		<section data-bc-start=\"0.00\">\r\n			<img src=\"https://dl.dropboxusercontent.com/u/14586656/Browsercast/haiku.jpg\" />\r\n			<p>The Japanese wrote haikus...</p>\r\n		</section>\r\n\r\n		<section data-bc-start=\"2.44\">\r\n			<img src=\"demo/images/sonnet.jpg\" />\r\n			<p>Shakespeare wrote sonnets...</p>\r\n		</section>\r\n	</section>\r\n	\r\n	<section data-bc-start=\"4.90\">\r\n		<img src=\"demo/images/worst-powerpoint.jpg\" />\r\n		<br/>\r\n		<p>And we... write PowerPoint</p>\r\n	</section>\r\n\r\n	<section data-bc-start=\"7.72\">\r\n		<img src=\"demo/images/tufte.jpg\" />\r\n		<p>A lot of people blame PowerPoint for bad presentations...</p>\r\n	</section>\r\n\r\n	<section data-bc-start=\"12.20\">\r\n		<img src=\"demo/images/fountain-pen.jpg\" />\r\n		<p>...but that's like blaming fountain pens for bad poetry.</p>\r\n	</section>\r\n\r\n	<section data-bc-start=\"16.20\">\r\n		<div style=\"vertical-align: middle\">\r\n			<img src=\"demo/images/powerpoint.png\" />\r\n			<img src=\"demo/images/libreoffice.png\" />\r\n		</div>\r\n		<p>The <em>real</em> problem with tools like PowerPoint...</p>\r\n		<div class=\"fragment\" data-bc-start=\"19.61\" data-bc-end=\"22\">\r\n			<img src=\"demo/images/internet-cat.jpg\" />\r\n			<p>...is that they aren't web-friendly.</p>\r\n		</div>\r\n	</section>\r\n</div>";
  });;