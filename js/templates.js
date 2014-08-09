this["AppTemplate"] = this["AppTemplate"] || {};
this["AppTemplate"]["reveal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
    + "\" />\r\n\r\n	<!-- libs stylesheets -->\r\n	<link rel=\"stylesheet\" href=\"js/reveal/css/theme/default.css\">\r\n	<link rel=\"stylesheet\" href=\"js/reveal/css/reveal.min.css\">\r\n	<link rel=\"stylesheet\" href=\"js/browsercast/browsercast.css\">\r\n	<link rel=\"stylesheet\" href=\"js/timeline/timeline.css\">\r\n	<link rel=\"stylesheet\" href=\"js/timeline/glyphicon.css\">\r\n	\r\n</head>\r\n\r\n<!-- Body -->\r\n<body>\r\n	<div id=\"browsercast\">\r\n		<div id=\"bc-audio\">\r\n			<code>\r\n				";
  if (helper = helpers.audio) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.audio); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n			</code>\r\n		</div>\r\n	</div>\r\n	<div class=\"reveal\">\r\n		<div class=\"slides\">\r\n			";
  if (helper = helpers.slides) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slides); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</div>\r\n	</div>\r\n\r\n	<script type=\"text/javascript\" src=\"js/reveal/lib/js/head.min.js\"></script>\r\n	<script type=\"text/javascript\" src=\"js/reveal/js/reveal.js\"></script>\r\n	<script type=\"text/javascript\" src=\"js/browsercast/browsercast-reveal.js\"></script>\r\n	<script type=\"text/javascript\" src=\"js/timeline/EventEmitter.js\"></script>\r\n	<script type=\"text/javascript\" src=\"js/timeline/timeline.js\"></script>\r\n	<script type=\"text/javascript\" src=\"js/init.js\"></script>\r\n</body>\r\n</html>";
  return buffer;
  });;