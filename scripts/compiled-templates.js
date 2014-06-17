define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["browsercast/sync"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"stop-button\"></div>\r\n<div id=\"play-button\"></div>";
  });

this["JST"]["strut.etch_extension/align"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a href=\"#\" class=\"btn btn-small etch-";
  if (helper = helpers.button) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.button); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n	<i class=\"icon-align-";
  if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></i>\r\n</a>";
  return buffer;
  });

this["JST"]["strut.etch_extension/colorChooser"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<input class=\"color-chooser colorpicker etch-";
  if (helper = helpers.button) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.button); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />";
  return buffer;
  });

this["JST"]["strut.etch_extension/defaultButton"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a href=\"#\" \r\n	class=\"btn btn-small etch-";
  if (helper = helpers.button) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.button); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span>";
  if (helper = helpers.display) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.display); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></a>";
  return buffer;
  });

this["JST"]["strut.etch_extension/fontFamilySelection"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"btn-group\">\r\n	<button class=\"btn btn-inverse dropdown-toggle btn-small fontFamilyBtn\" data-toggle=\"dropdown\" title=\"Choose the font family\"><span class=\"text\">Lato</span><span class=\"caret\"></span></button>\r\n	<ul class=\"dropdown-menu menuBarOption\" data-option=\"fontFamily\">\r\n		<li>\r\n                  <a class=\"lato\" href=\"#\" data-value=\"'Lato', sans-serif\">Lato</a>\r\n                  <a class=\"leaguegothic\" href=\"#\" data-value=\"'League Gothic', sans-serif\">League Gothic</a>\r\n                  <a class=\"droidsansmono\" href=\"#\" data-value=\"'Droid Sans Mono', monospace\">Droid Sans Mono</a>\r\n                  <a class=\"ubuntu\" href=\"#\" data-value=\"'Ubuntu', sans-serif\">Ubuntu</a>\r\n                  <a class=\"abril\" href=\"#\" data-value=\"'Abril Fatface', cursive\">Abril</a>\r\n                  <a class=\"hammersmith\" href=\"#\" data-value=\"'Hammersmith One', sans-serif\">Hammersmith One</a>\r\n                  <a class=\"fredoka\" href=\"#\" data-value=\"'Fredoka One', cursive\">Fredoka One</a>\r\n                  <a class=\"gorditas\" href=\"#\" data-value=\"'Gorditas', cursive\">Gorditas</a>\r\n                  <a class=\"pressstart\" href=\"#\" data-value=\"'PressStart2P', cursive\">Press Start 2P</a>\r\n		</li>\r\n	</ul>\r\n</div>";
  });

this["JST"]["strut.etch_extension/fontSizeSelection"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"btn-group\">\r\n	<a class=\"btn btn-small btn-inverse dropdown-toggle\" data-toggle=\"dropdown\" title=\"Choose the font size\"><span class=\"text fontSizeReadout\">72</span>\r\n		<span class=\"caret\"></span></a>\r\n	<ul class=\"dropdown-menu menuBarOption\" data-option=\"fontSize\">\r\n		<li>\r\n			<a href=\"#\" data-value=\"144\">144</a>\r\n			<a href=\"#\" data-value=\"96\">96</a>\r\n			<a href=\"#\" data-value=\"72\">72</a>\r\n			<a href=\"#\" data-value=\"64\">64</a>\r\n			<a href=\"#\" data-value=\"36\">36</a>\r\n			<a href=\"#\" data-value=\"48\">48</a>\r\n			<a href=\"#\" data-value=\"24\">24</a>\r\n			<a href=\"#\" data-value=\"16\">16</a>\r\n			<a href=\"#\" data-value=\"12\">12</a>\r\n			<a href=\"#\" data-value=\"8\">8</a>\r\n		</li>\r\n	</ul>\r\n</div>";
  });

this["JST"]["strut.header/Header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"navbar navbar-inverse span12\">\r\n	<div class=\"navbar-inner\">\r\n		<ul class=\"nav\">\r\n			<li class=\"logo-holder\">\r\n			</li>\r\n			<li class=\"divider-vertical\">\r\n			</li>\r\n		</ul>\r\n		<ul class=\"nav\">\r\n			<li class=\"create-comp-buttons\">\r\n				<div class=\"btn-group iconBtns\">\r\n				</div>\r\n			</li>\r\n		</ul>\r\n		<ul class=\"nav theme-buttons\">\r\n		</ul>\r\n		<ul class=\"nav pull-right\">\r\n			<li class=\"divider-vertical\">\r\n			</li>\r\n			<li class=\"mode-buttons\">\r\n			</li>\r\n		</ul>\r\n	</div>\r\n</div>";
  });

this["JST"]["strut.logo_button/Logo"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<a class=\"btn logo btn-plast dropdown-toggle\" data-toggle=\"dropdown\">\r\n	<span class=\"logo-bg\"></span>\r\n    <span class=\"caret\"></span>\r\n</a>\r\n<ul class=\"dropdown-menu\">\r\n</ul>";
  });

this["JST"]["strut.presentation_generator.bespoke/BespokeTemplate"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n	<style>\r\n	";
  if (helper = helpers.customStylesheet) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.customStylesheet); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</style>\r\n	<style>\r\n	";
  stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.customBackgrounds)),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.bgs)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</style>\r\n	";
  stack1 = self.invokePartial(partials.PerSlideSurfaceStylesheet, 'PerSlideSurfaceStylesheet', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	<div id=\"main\" class=\"";
  stack1 = (helper = helpers.isBGClass || (depth0 && depth0.isBGClass),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.surface), options) : helperMissing.call(depth0, "isBGClass", (depth0 && depth0.surface), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "strut-surface ";
  if (helper = helpers.cannedTransition) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cannedTransition); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n		<article class=\"innerBg\">\r\n			";
  stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.slides)),stack1 == null || stack1 === false ? stack1 : stack1.models)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(6, program6, data, depth1),data:data}));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</article>\r\n	</div>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n		";
  stack1 = self.invokePartial(partials.CustomBgStylesheet, 'CustomBgStylesheet', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  if (helper = helpers.surface) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.surface); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  return buffer;
  }

function program6(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n				";
  options={hash:{},inverse:self.noop,fn:self.programWithDepth(7, program7, data, depth0, depth2),data:data}
  if (helper = helpers.attributes) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.attributes); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(7, program7, data, depth0, depth2),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			";
  return buffer;
  }
function program7(depth0,data,depth1,depth3) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n					<section class=\"";
  stack1 = (helper = helpers.determineBG || (depth1 && depth1.determineBG),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, depth1, depth3, options) : helperMissing.call(depth0, "determineBG", depth1, depth3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " slideContainer strut-slide-";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"width: 1024px; height: 768px;\" data-bespoke-state=\"strut-slide-";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  stack1 = (helper = helpers.determineSurface || (depth1 && depth1.determineSurface),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, depth1, depth3, options) : helperMissing.call(depth0, "determineSurface", depth1, depth3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n						<div class=\"themedArea\">\r\n              			";
  stack1 = (helper = helpers.marked || (depth0 && depth0.marked),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.markdown), options) : helperMissing.call(depth0, "marked", (depth0 && depth0.markdown), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n              			</div>\r\n						";
  options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data}
  if (helper = helpers.components) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.components); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.components) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n					</section>\r\n				";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n							";
  stack1 = (helper = helpers.renderComponent || (depth0 && depth0.renderComponent),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "renderComponent", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n						";
  return buffer;
  }

  options={hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data}
  if (helper = helpers.attributes) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.attributes); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });

this["JST"]["strut.presentation_generator.handouts/HandoutsTemplate"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, self=this, helperMissing=helpers.helperMissing, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n<style type=\"text/css\">\r\n";
  if (helper = helpers.customStylesheet) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.customStylesheet); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</style>\r\n\r\n<div class=\"notes-handout\">\r\n";
  stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.slides)),stack1 == null || stack1 === false ? stack1 : stack1.models)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth1),data:data}));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n";
  return buffer;
  }
function program2(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n";
  options={hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0, depth2),data:data}
  if (helper = helpers.attributes) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.attributes); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0, depth2),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n<div class=\"notes\">\r\n	Notes:\r\n</div>\r\n</div>\r\n";
  return buffer;
  }
function program3(depth0,data,depth1,depth3) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n<div class=\"slide-and-notes\">\r\n<div class=\"slide ";
  stack1 = (helper = helpers.determineBG || (depth1 && depth1.determineBG),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, depth1, depth3, options) : helperMissing.call(depth0, "determineBG", depth1, depth3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " slideContainer\" style=\"";
  stack1 = (helper = helpers.slideBGImg || (depth1 && depth1.slideBGImg),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, depth1, options) : helperMissing.call(depth0, "slideBGImg", depth1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n<div class=\"reveal themedArea\">\r\n";
  stack1 = (helper = helpers.marked || (depth0 && depth0.marked),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.markdown), options) : helperMissing.call(depth0, "marked", (depth0 && depth0.markdown), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n";
  options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data}
  if (helper = helpers.components) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.components); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.components) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n";
  stack1 = (helper = helpers.renderComponent || (depth0 && depth0.renderComponent),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "renderComponent", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }

  options={hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data}
  if (helper = helpers.attributes) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.attributes); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["strut.presentation_generator.impress/ComponentContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "rotate(";
  if (helper = helpers.rotate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.rotate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "rad)";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "skewX(";
  if (helper = helpers.skewX) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.skewX); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "rad)";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "skewY(";
  if (helper = helpers.skewY) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.skewY); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "rad)";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  stack1 = (helper = helpers.round || (depth0 && depth0.round),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.scale)),stack1 == null || stack1 === false ? stack1 : stack1.width), options) : helperMissing.call(depth0, "round", ((stack1 = (depth0 && depth0.scale)),stack1 == null || stack1 === false ? stack1 : stack1.width), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  stack1 = (helper = helpers.round || (depth0 && depth0.round),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.scale)),stack1 == null || stack1 === false ? stack1 : stack1.height), options) : helperMissing.call(depth0, "round", ((stack1 = (depth0 && depth0.scale)),stack1 == null || stack1 === false ? stack1 : stack1.height), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px";
  return buffer;
  }

  buffer += "<div class=\"componentContainer ";
  if (helper = helpers.customClasses) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.customClasses); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" \r\n	style=\"top: ";
  stack1 = (helper = helpers.round || (depth0 && depth0.round),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.y), options) : helperMissing.call(depth0, "round", (depth0 && depth0.y), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px; \r\n	left: ";
  stack1 = (helper = helpers.round || (depth0 && depth0.round),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.x), options) : helperMissing.call(depth0, "round", (depth0 && depth0.x), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px; \r\n	-webkit-transform: ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.rotate), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.skewX), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.skewY), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "; \r\n	-moz-transform: ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.rotate), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.skewX), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.skewY), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ";\r\n	transform: ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.rotate), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.skewX), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.skewY), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ";\r\n	width: ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.scale), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ";\r\n	height: ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.scale), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ";\">\r\n";
  stack1 = self.invokePartial(partials.TransformContainer, 'TransformContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["JST"]["strut.presentation_generator.impress/Image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, helper, options, self=this, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\r\n";
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<img src=\""
    + escapeExpression(((stack1 = (depth1 && depth1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></img>\r\n</div>\r\n</div>\r\n";
  return buffer;
  }

  options={hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data}
  if (helper = helpers.attributes) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.attributes); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["strut.presentation_generator.impress/ImpressTemplate"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "\r\n	<script>\r\n		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { \r\n		// Detect mobile browsers & use memory optimized styling if on mobile (hide all but the previous & next slides). \r\n		// Can prevent crashes when presentation contains many images and/or 3d elements.\r\n		  	var root = document.documentElement;\r\n			root.className += ' mobile';\r\n		} else {\r\n			var root = document.documentElement;\r\n			root.className += ' desktop';\r\n		}\r\n\r\n		function getPreviousSibling(element){\r\n			var p = element;\r\n			do p = p.previousSibling;\r\n			while (p && p.nodeType != 1);\r\n			return p;\r\n		}\r\n		\r\n		document.addEventListener('impress:stepleave',function(event) {\r\n			prev = document.getElementsByClassName('prev')[0];\r\n			if(typeof prev != 'undefined')\r\n				prev.classList.remove('prev'); // Remove prev class from old prev slide\r\n			current = document.getElementsByClassName('active')[0]; // Get current slide\r\n			prev = getPreviousSibling(current); // Get prev slide\r\n			prev.className += ' prev'; // Mark prev slide with class\r\n		});\r\n	</script>\r\n\r\n	<style>\r\n		.step { display:none; } /* Start by not showing slides to prevent mobile Crash at the start */\r\n		.desktop .step { display:block; } /* Desktops should be able to handle all slides */\r\n		.step.active,.step.present,.step.active + .step,.step.prev { display:block; } /* Limit mobile to only show the current slide, the next slide, and the previous slide */\r\n	</style>\r\n";
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n<style type=\"text/css\">\r\n";
  if (helper = helpers.customStylesheet) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.customStylesheet); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</style>\r\n<style>\r\n";
  stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.customBackgrounds)),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.bgs)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data}));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</style>\r\n";
  stack1 = self.invokePartial(partials.PerSlideSurfaceStylesheet, 'PerSlideSurfaceStylesheet', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<!-- This is a work around / hack to get the user's browser to download the fonts \r\n if they decide to save the presentation. -->\r\n<div style=\"visibility: hidden; width: 0px; height: 0px\">\r\n<img src=\"css/Lato-Bold.woff\" />\r\n<img src=\"css/HammersmithOne.woff\" />\r\n<img src=\"css/Droid-Sans-Mono.woff\" />\r\n<img src=\"css/Gorditas-Regular.woff\" />\r\n<img src=\"css/FredokaOne-Regular.woff\" />\r\n<img src=\"css/Ubuntu.woff\" />\r\n<img src=\"css/Ubuntu-Bold.woff\" />\r\n<img src=\"css/PressStart2P-Regular.woff\" />\r\n<img src=\"css/Lato-BoldItalic.woff\" />\r\n<img src=\"css/AbrilFatface-Regular.woff\" />\r\n<img src=\"css/Lato-Regular.woff\" />\r\n</div>\r\n\r\n<div class=\"fallback-message\">\r\n    <p>Your browser <b>doesn't support the features required</b> by impress.js, so you are presented with a simplified version of this presentation.</p>\r\n    <p>For the best experience please use the latest <b>Chrome</b>, <b>Safari</b> or <b>Firefox</b> browser.</p>\r\n</div>\r\n\r\n<div class=\"bg ";
  stack1 = (helper = helpers.isBGClass || (depth0 && depth0.isBGClass),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.surface), options) : helperMissing.call(depth0, "isBGClass", (depth0 && depth0.surface), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "strut-surface\">\r\n<div class=\"bg innerBg\">\r\n<div id=\"impress\">\r\n	";
  stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.slides)),stack1 == null || stack1 === false ? stack1 : stack1.models)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(8, program8, data, depth1),data:data}));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	<div id=\"overview\" class=\"step\" data-state=\"strut-slide-overview\" data-x=\"";
  stack1 = (helper = helpers.scaleX || (depth0 && depth0.scaleX),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.overviewX), options) : helperMissing.call(depth0, "scaleX", (depth0 && depth0.overviewX), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-y=\"";
  stack1 = (helper = helpers.scaleY || (depth0 && depth0.scaleY),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.overviewY), options) : helperMissing.call(depth0, "scaleY", (depth0 && depth0.overviewY), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-scale=\"9\"></div>\r\n	";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	";
  stack1 = self.invokePartial(partials.CustomBgStylesheet, 'CustomBgStylesheet', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  if (helper = helpers.surface) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.surface); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  return buffer;
  }

function program8(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n		";
  options={hash:{},inverse:self.noop,fn:self.programWithDepth(9, program9, data, depth0, depth2),data:data}
  if (helper = helpers.attributes) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.attributes); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(9, program9, data, depth0, depth2),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	";
  return buffer;
  }
function program9(depth0,data,depth1,depth3) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n			<div class=\"step\" \r\n				data-state=\"strut-slide-";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  stack1 = (helper = helpers.determineSurface || (depth1 && depth1.determineSurface),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, depth1, depth3, options) : helperMissing.call(depth0, "determineSurface", depth1, depth3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\r\n				data-x=\"";
  stack1 = (helper = helpers.scaleX || (depth0 && depth0.scaleX),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.x), options) : helperMissing.call(depth0, "scaleX", (depth0 && depth0.x), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\r\n				data-y=\"";
  stack1 = (helper = helpers.scaleY || (depth0 && depth0.scaleY),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.y), options) : helperMissing.call(depth0, "scaleY", (depth0 && depth0.y), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" \r\n				";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.rotateX), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \r\n				";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.rotateY), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \r\n				";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.rotateZ), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \r\n				";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.z), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \r\n				";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.impScale), {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n				";
  options={hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data}
  if (helper = helpers.browsercast) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.browsercast); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.browsercast) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "  \r\n				<div class=\"";
  stack1 = (helper = helpers.determineBG || (depth1 && depth1.determineBG),options={hash:{},inverse:self.noop,fn:self.program(24, program24, data),data:data},helper ? helper.call(depth0, depth1, depth3, options) : helperMissing.call(depth0, "determineBG", depth1, depth3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " slideContainer strut-slide-";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" \r\n					style=\"width: 1024px; height: 768px;\">\r\n					<div class=\"themedArea\">\r\n						";
  stack1 = (helper = helpers.marked || (depth0 && depth0.marked),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.markdown), options) : helperMissing.call(depth0, "marked", (depth0 && depth0.markdown), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n					</div>\r\n					";
  options={hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data}
  if (helper = helpers.components) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.components); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.components) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				</div>\r\n			</div>\r\n		";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += " data-rotate-x=\"";
  stack1 = (helper = helpers.toDeg || (depth0 && depth0.toDeg),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.rotateX), options) : helperMissing.call(depth0, "toDeg", (depth0 && depth0.rotateX), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += " data-rotate-y=\"";
  stack1 = (helper = helpers.toDeg || (depth0 && depth0.toDeg),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.rotateY), options) : helperMissing.call(depth0, "toDeg", (depth0 && depth0.rotateY), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += " data-rotate-z=\"";
  stack1 = (helper = helpers.toDeg || (depth0 && depth0.toDeg),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.rotateZ), options) : helperMissing.call(depth0, "toDeg", (depth0 && depth0.rotateZ), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += " data-z=\"";
  if (helper = helpers.z) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.z); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += " data-scale=\"";
  if (helper = helpers.impScale) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.impScale); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n				<div class=\"bc\" data-cue=\"";
  if (helper = helpers.start) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.start); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-length=\"";
  if (helper = helpers.length) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.length); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" delta-delay=\"";
  if (helper = helpers.delay) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.delay); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></div>\r\n				";
  return buffer;
  }

function program24(depth0,data) {
  
  
  return " ";
  }

function program26(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n						";
  stack1 = (helper = helpers.renderComponent || (depth0 && depth0.renderComponent),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "renderComponent", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n					";
  return buffer;
  }

  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.mobileVersion) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.mobileVersion); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.mobileVersion) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n";
  options={hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0),data:data}
  if (helper = helpers.attributes) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.attributes); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n<div class=\"hint\">\r\n    <p>Use a spacebar or arrow keys to navigate</p>\r\n</div>\r\n</div>\r\n</div>";
  return buffer;
  });

this["JST"]["strut.presentation_generator.impress/SVGContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<div class=\"componentContainer\" \r\n	style=\"top: ";
  if (helper = helpers.y) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.y); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "px; left: ";
  if (helper = helpers.x) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.x); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "px;\r\n	width: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.scale)),stack1 == null || stack1 === false ? stack1 : stack1.width)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "px; height: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.scale)),stack1 == null || stack1 === false ? stack1 : stack1.height)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "px;\">\r\n";
  stack1 = self.invokePartial(partials.TransformContainer, 'TransformContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["JST"]["strut.presentation_generator.impress/SVGImage"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;


  stack1 = self.invokePartial(partials.SVGContainer, 'SVGContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<img src=\"";
  if (helper = helpers.src) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.src); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"width: 100%; height: 100%\"></img>\r\n</div>\r\n</div>";
  return buffer;
  });

this["JST"]["strut.presentation_generator.impress/Shape"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, helper, options, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n	";
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	";
  options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}
  if (helper = helpers.shapeSvg) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.shapeSvg); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.shapeSvg) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</div>\r\n</div>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.attributes) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.attributes); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["strut.presentation_generator.impress/TextBox"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, helper, options, self=this, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n";
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<div style=\"font-size: ";
  if (helper = helpers.size) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.size); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "px;\" class=\"antialias\">\r\n";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n</div>\r\n</div>\r\n";
  return buffer;
  }

  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.attributes) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.attributes); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["strut.presentation_generator.impress/TransformContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "scale(";
  stack1 = (helper = helpers.round || (depth0 && depth0.round),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.scale)),stack1 == null || stack1 === false ? stack1 : stack1.x), options) : helperMissing.call(depth0, "round", ((stack1 = (depth0 && depth0.scale)),stack1 == null || stack1 === false ? stack1 : stack1.x), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ", ";
  stack1 = (helper = helpers.round || (depth0 && depth0.round),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.scale)),stack1 == null || stack1 === false ? stack1 : stack1.y), options) : helperMissing.call(depth0, "round", ((stack1 = (depth0 && depth0.scale)),stack1 == null || stack1 === false ? stack1 : stack1.y), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<div class=\"transformContainer\" style=\"-webkit-transform: ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.scale), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ";\r\n-moz-transform: ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.scale), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ";\r\ntransform: ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.scale), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  return buffer;
  });

this["JST"]["strut.presentation_generator.impress/Video"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, helper, options, self=this, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n";
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<video controls>\r\n	<source src=\"";
  if (helper = helpers.src) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.src); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type=\"";
  if (helper = helpers.srcType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.srcType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" preload=\"metadata\"></source>\r\n</video>\r\n</div>\r\n</div>\r\n";
  return buffer;
  }

  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.attributes) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.attributes); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["strut.presentation_generator.impress/WebFrame"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, helper, options, self=this, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n";
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<iframe width=\"960\" height=\"768\" src=\"";
  if (helper = helpers.src) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.src); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></iframe>\r\n</div>\r\n</div>\r\n";
  return buffer;
  }

  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.attributes) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.attributes); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["strut.presentation_generator.impress/Youtube"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;


  stack1 = self.invokePartial(partials.SVGContainer, 'SVGContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<object width=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.scale)),stack1 == null || stack1 === false ? stack1 : stack1.width)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" height=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.scale)),stack1 == null || stack1 === false ? stack1 : stack1.height)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><param name=\"movie\" value=\"http://www.youtube.com/v/";
  if (helper = helpers.shortSrc) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.shortSrc); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "&hl=en&fs=1\"><param name=\"allowFullScreen\" value=\"true\"><embed src=\"http://www.youtube.com/v/";
  if (helper = helpers.shortSrc) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.shortSrc); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "&hl=en&fs=1\" type=\"application/x-shockwave-flash\" allowfullscreen=\"true\" width=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.scale)),stack1 == null || stack1 === false ? stack1 : stack1.width)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" height=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.scale)),stack1 == null || stack1 === false ? stack1 : stack1.height)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></object>\r\n</div>\r\n</div>";
  return buffer;
  });

this["JST"]["strut.presentation_generator.impress/YoutubeContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<div class=\"componentContainer\" style=\"top: ";
  if (helper = helpers.y) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.y); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "px; left: ";
  if (helper = helpers.x) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.x); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "px;\">\r\n";
  stack1 = self.invokePartial(partials.TransformContainer, 'TransformContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["JST"]["strut.presentation_generator.reveal/RevealTemplate"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n  <style type=\"text/css\">\r\n    ";
  if (helper = helpers.customStylesheet) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.customStylesheet); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  </style>\r\n  ";
  stack1 = self.invokePartial(partials.PerSlideSurfaceStylesheet, 'PerSlideSurfaceStylesheet', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  \r\n    <div class=\"";
  stack1 = (helper = helpers.isBGClass || (depth0 && depth0.isBGClass),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.surface), options) : helperMissing.call(depth0, "isBGClass", (depth0 && depth0.surface), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "reveal strut-surface\">\r\n      <div class=\"bg innerBg\">\r\n      <div class=\"slides\">\r\n        ";
  stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.slides)),stack1 == null || stack1 === false ? stack1 : stack1.models)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth1),data:data}));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n      </div>\r\n      </div>\r\n    </div>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  if (helper = helpers.surface) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.surface); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  return buffer;
  }

function program4(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n        ";
  options={hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0, depth2),data:data}
  if (helper = helpers.attributes) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.attributes); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0, depth2),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  return buffer;
  }
function program5(depth0,data,depth1,depth3) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n          <section class=\"";
  stack1 = (helper = helpers.determineBG || (depth1 && depth1.determineBG),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, depth1, depth3, options) : helperMissing.call(depth0, "determineBG", depth1, depth3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " slideContainer strut-slide-";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"width: 1024px; height: 768px;\" data-state=\"strut-slide-";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  stack1 = (helper = helpers.determineSurface || (depth1 && depth1.determineSurface),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, depth1, depth3, options) : helperMissing.call(depth0, "determineSurface", depth1, depth3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n            <div class=\"themedArea\">\r\n            ";
  stack1 = (helper = helpers.marked || (depth0 && depth0.marked),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.markdown), options) : helperMissing.call(depth0, "marked", (depth0 && depth0.markdown), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </div>\r\n            ";
  options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data}
  if (helper = helpers.components) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.components); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.components) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n          </section>\r\n        ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n              ";
  stack1 = (helper = helpers.renderComponent || (depth0 && depth0.renderComponent),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "renderComponent", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            ";
  return buffer;
  }

  options={hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data}
  if (helper = helpers.attributes) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.attributes); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });

this["JST"]["strut.presentation_generator/Button"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.chosen)),stack1 == null || stack1 === false ? stack1 : stack1.shortname)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n		";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.chosen)),stack1 == null || stack1 === false ? stack1 : stack1.displayName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n		";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n	<li data-option=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n		<a>\r\n			<span class=\"check\" style=\"visibility: hidden;\">&#10003;</span>\r\n				";
  if (helper = helpers.displayName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n		</a>\r\n	</li>\r\n    ";
  return buffer;
  }

  buffer += "<button class=\"btn btn-success act\">\r\n	<i class=\"icon-play icon-white\"></i>\r\n	<span class=\"chosen\">\r\n		";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.chosen)),stack1 == null || stack1 === false ? stack1 : stack1.shortname), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</span>\r\n</button>\r\n<button class=\"btn dropdown-toggle btn-success iconBtnsSplit\" data-toggle=\"dropdown\">\r\n	<span class=\"caret whiteCaret\"></span>\r\n</button>\r\n<ul class=\"dropdown-menu\">\r\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.generators), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;
  });

this["JST"]["strut.presentation_generator/CustomBgStylesheet"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n	.";
  if (helper = helpers.klass) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.klass); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " {\r\n		background: ";
  if (helper = helpers.style) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.style); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ";\r\n	}\r\n";
  return buffer;
  }

  stack1 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["strut.presentation_generator/PerSlideSurfaceStylesheet"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n	.strut-surface {\r\n		";
  stack1 = (helper = helpers.getBGImgStyle || (depth0 && depth0.getBGImgStyle),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.surface), options) : helperMissing.call(depth0, "getBGImgStyle", (depth0 && depth0.surface), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	}\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n	.slideContainer {\r\n		";
  stack1 = (helper = helpers.getBGImgStyle || (depth0 && depth0.getBGImgStyle),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.background), options) : helperMissing.call(depth0, "getBGImgStyle", (depth0 && depth0.background), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	}\r\n";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n	";
  options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data}
  if (helper = helpers.attributes) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.attributes); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n		";
  stack1 = (helper = helpers.isBGImg || (depth0 && depth0.isBGImg),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.surface), options) : helperMissing.call(depth0, "isBGImg", (depth0 && depth0.surface), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		";
  stack1 = (helper = helpers.isBGImg || (depth0 && depth0.isBGImg),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.background), options) : helperMissing.call(depth0, "isBGImg", (depth0 && depth0.background), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n		.strut-surface > .strut-slide-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " {\r\n			/*this only works for bg images or custom bgs*/\r\n			/*for bg classes we'll have to introduce a data api*/\r\n			";
  stack1 = (helper = helpers.getBGImgStyle || (depth0 && depth0.getBGImgStyle),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.surface), options) : helperMissing.call(depth0, "getBGImgStyle", (depth0 && depth0.surface), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		}\r\n		";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n		.slideContainer.strut-slide-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " {\r\n			";
  stack1 = (helper = helpers.getBGImgStyle || (depth0 && depth0.getBGImgStyle),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.background), options) : helperMissing.call(depth0, "getBGImgStyle", (depth0 && depth0.background), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		}\r\n		";
  return buffer;
  }

  buffer += "<style>\r\n";
  stack1 = (helper = helpers.isBGImg || (depth0 && depth0.isBGImg),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.surface), options) : helperMissing.call(depth0, "isBGImg", (depth0 && depth0.surface), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = (helper = helpers.isBGImg || (depth0 && depth0.isBGImg),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.background), options) : helperMissing.call(depth0, "isBGImg", (depth0 && depth0.background), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.slides)),stack1 == null || stack1 === false ? stack1 : stack1.models)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data}));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</style>";
  return buffer;
  });

this["JST"]["strut.slide_components/Component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"content-scale\">\r\n<div class=\"content\"></div>\r\n</div>\r\n<span class=\"topLabel label\"> \r\n	<span class=\"skewx\" data-delta=\"skewX\">↔</span>\r\n	<span class=\"align\" data-option=\"x\">↹</span>\r\n</span>\r\n<span class=\"leftLabel label\"> \r\n	<span class=\"align\" data-option=\"y\">↹</span>\r\n	<span class=\"skewy\" data-delta=\"skewY\">↔</span>\r\n</span>\r\n<span class=\"rightLabel label rotate\" data-delta=\"rotate\">↻</span>\r\n<span class=\"scale label\" data-delta=\"scale\">↔</span>\r\n<span class=\"close-btn-red-20 removeBtn\" title=\"Remove\"></span>\r\n<div class=\"positioningCtrls form-inline\">\r\n	<span class=\"label leftposition\">→</span>\r\n	<input class=\"position\" type=\"text\" data-option=\"x\" value=\"";
  if (helper = helpers.x) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.x); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\r\n	<span class=\"label bottomposition\">↑</span>\r\n	<input class=\"position\" type=\"text\" data-option=\"y\" value=\"";
  if (helper = helpers.y) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.y); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\r\n</div>\r\n";
  return buffer;
  });

this["JST"]["strut.slide_components/ShapesDropdown"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n<li><a class=\"shape\" data-index=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><img src=\"";
  if (helper = helpers.src) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.src); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" width=\"100%\" height=\"100%\"></img></a></li>\r\n";
  return buffer;
  }

  buffer += "<a class=\"btn btn-plast dropdown-toggle\" data-toggle=\"dropdown\">\r\n	<i class=\"icon-star icon-white\"></i>\r\n	";
  stack1 = (helper = helpers.lang || (depth0 && depth0.lang),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.title), options) : helperMissing.call(depth0, "lang", (depth0 && depth0.title), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\r\n<ul class=\"dropdown-menu horizontalDropdown\" role=\"menu\" style=\"min-width: 127px; width: 127px\">\r\n";
  options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}
  if (helper = helpers.shapes) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.shapes); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.shapes) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>\r\n";
  return buffer;
  });

this["JST"]["strut.slide_editor/Button"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<div class=\"btn-group iconBtns\">\r\n	<a class=\"btn btn-plast\">\r\n		<i class=\"icon-th-list icon-white\"></i>\r\n		";
  stack1 = (helper = helpers.lang || (depth0 && depth0.lang),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, "slides", options) : helperMissing.call(depth0, "lang", "slides", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</a>\r\n</div>";
  return buffer;
  });

this["JST"]["strut.slide_editor/Tablets"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"tablets-content\">\r\n</div>\r\n<div class=\"tablets-toggle btn btn-plast\">\r\n	<span class=\"caret whiteCaret\"></span>\r\n</div>";
  });

this["JST"]["strut.slide_snapshot/SlideDrawer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n";
  stack1 = (helper = helpers.renderComponent || (depth0 && depth0.renderComponent),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, depth0, "Video WebFrame", options) : helperMissing.call(depth0, "renderComponent", depth0, "Video WebFrame", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }

  buffer += "<div class=\"themedArea\">\r\n";
  stack1 = (helper = helpers.marked || (depth0 && depth0.marked),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.markdown), options) : helperMissing.call(depth0, "marked", (depth0 && depth0.markdown), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n";
  options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}
  if (helper = helpers.components) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.components); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.components) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });

this["JST"]["strut.slide_snapshot/SlideSnapshot"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"overlay\"></div>\r\n<div class=\"slideDrawer slideContainer\"></div>\r\n<span class=\"close-btn-red-20 removeBtn\" title=\"Remove\"></span>\r\n<span class=\"badge badge-inverse\"> </span>";
  });

this["JST"]["strut.slide_snapshot/TransitionSlideSnapshot"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"content-container\">\r\n	<div class=\"content\">\r\n		<div class=\"slideDrawer slideContainer\"></div>\r\n		<div class=\"back\"></div>\r\n		<div class=\"top\"></div><div class=\"bottom\"></div><div class=\"left\"></div><div class=\"right\"></div>\r\n	</div>\r\n</div>\r\n\r\n<div class=\"topLabel form-inline\">\r\n	<span class=\"label rotates\" data-delta=\"rotateY\">↻Y</span>\r\n	<input type=\"text\" data-option=\"rotateY\" value=\"";
  if (helper = helpers.rotateY) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.rotateY); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></input>\r\n</div>\r\n<div class=\"leftLabel form-inline\">\r\n	<span class=\"label rotates\" data-delta=\"rotateX\">↻X</span>\r\n	<input type=\"text\" data-option=\"rotateX\" value=\"";
  if (helper = helpers.rotateX) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.rotateX); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></input>\r\n</div>\r\n<div class=\"rightLabel form-inline\">\r\n	<span class=\"label rotates\" data-delta=\"rotateZ\">↻Z</span>\r\n	<input type=\"text\" data-option=\"rotateZ\" value=\"";
  if (helper = helpers.rotateZ) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.rotateZ); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></input>\r\n</div>\r\n<div class=\"positioningCtrls form-inline\">\r\n	<span class=\"label layer\">z</span>\r\n	<input class=\"position\" type=\"text\" data-option=\"z\" value=\"";
  if (helper = helpers.z) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.z); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\r\n	<span class=\"label scales\">↔</span>\r\n	<input class=\"position\" type=\"text\" data-option=\"scale\" value=\"";
  if (helper = helpers.impScale) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.impScale); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\r\n</div>\r\n<span class=\"badge badge-inverse\"> </span>\r\n";
  return buffer;
  });

this["JST"]["strut.splash/Splash"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div></div>";
  });

this["JST"]["strut.storage/ProviderTab"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div></div>";
  });

this["JST"]["strut.storage/StorageModal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<li class=\"providerTab\"><a data-provider=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\r\n		";
  return buffer;
  }

  buffer += "<div class=\"modal-header\">\r\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\r\n	<h3 class=\"title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\r\n</div>\r\n<div class=\"modal-body\" style=\"overflow: hidden\">\r\n	<ul class=\"nav nav-tabs\">\r\n		";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.tabs) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.tabs); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.tabs) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</ul>\r\n	<div class=\"tabContent\">\r\n	</div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n	<a href=\"#\" class=\"btn btn-primary ok btn-inverse\">Ok</a>\r\n</div>";
  return buffer;
  });

this["JST"]["strut.themes/BackgroundChooserDropdown"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<li><a class=\"";
  if (helper = helpers.klass) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.klass); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " thumbnail\" alt=\"";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-class=\"";
  if (helper = helpers.klass) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.klass); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></a></li>\r\n			";
  return buffer;
  }

  buffer += "<a class=\"btn btn-plast dropdown-toggle\" data-toggle=\"dropdown\">\r\n	<i class=\"icon-tint icon-white\"></i>\r\n	";
  stack1 = (helper = helpers.lang || (depth0 && depth0.lang),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.title), options) : helperMissing.call(depth0, "lang", (depth0 && depth0.title), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\r\n<ul class=\"dropdown-menu\" role=\"menu\">\r\n	<li class=\"dropdown-submenu\">\r\n		<a tabindex=\"-1\" href=\"#\">All Slides</a>\r\n		<ul class=\"dropdown-menu horizontalDropdown allSlides\" style=\"min-width: 127px; width: 127px\">\r\n			";
  options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}
  if (helper = helpers.backgrounds) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.backgrounds); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.backgrounds) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			<li><a class=\"transparentPattern thumbnail\" data-class=\"bg-transparent\"></a></li>\r\n			<li><a class=\"bg-img thumbnail\" data-class=\"bg-img\"><i class=\"icon-picture\"></i></a></li>\r\n			<li><a class=\"bg-custom thumbnail\" data-class=\"bg-custom\"><i class=\"icon-pencil\"></i></a></li>\r\n		</ul>\r\n	</li>\r\n	<li class=\"dropdown-submenu\">\r\n		<a tabindex=\"-1\" href=\"#\">Selected Slide</a>\r\n		<ul class=\"dropdown-menu horizontalDropdown\" style=\"min-width: 127px; width: 127px\">\r\n			";
  options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}
  if (helper = helpers.backgrounds) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.backgrounds); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.backgrounds) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			<li><a class=\"transparentPattern thumbnail\" data-class=\"bg-transparent\"></a></li>\r\n			<li><a class=\"nobg thumbnail\" data-class=\"bg-default\"></a></li>\r\n			<li><a class=\"bg-img thumbnail\" data-class=\"bg-img\"><i class=\"icon-picture\"></i></a></li>\r\n			<li><a class=\"bg-custom thumbnail\" data-class=\"bg-custom\"><i class=\"icon-pencil\"></i></a></li>\r\n		</ul>\r\n	</li>\r\n</ul>\r\n";
  return buffer;
  });

this["JST"]["strut.themes/ColorChooserModal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"modal-header\">\r\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\r\n	<h3 class=\"title\">Custom Color</h3>\r\n</div>\r\n<div class=\"modal-body\" style=\"overflow: hidden\">\r\n	<input type='text' class=\"color-chooser pull-right\" />\r\n</div>\r\n<div class=\"modal-footer\">\r\n	<a href=\"#\" class=\"btn btn-primary ok btn-inverse\">Ok</a>\r\n</div>";
  });

this["JST"]["strut.themes/SurfaceChooserDropdown"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<li><a class=\"";
  if (helper = helpers.klass) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.klass); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " thumbnail\" alt=\"";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-class=\"";
  if (helper = helpers.klass) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.klass); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></a></li>\r\n			";
  return buffer;
  }

  buffer += "<a class=\"btn btn-plast dropdown-toggle\" data-toggle=\"dropdown\">\r\n	<i class=\"icon-tint icon-white\"></i>\r\n	";
  stack1 = (helper = helpers.lang || (depth0 && depth0.lang),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.title), options) : helperMissing.call(depth0, "lang", (depth0 && depth0.title), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\r\n<ul class=\"dropdown-menu\" role=\"menu\">\r\n	<li class=\"dropdown-submenu\">\r\n		<a tabindex=\"-1\" href=\"#\">All Slides</a>\r\n		<ul class=\"dropdown-menu horizontalDropdown allSlides\" style=\"min-width: 127px; width: 127px\">\r\n			";
  options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}
  if (helper = helpers.backgrounds) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.backgrounds); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.backgrounds) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			<li><a class=\"nobg thumbnail\" data-class=\"bg-default\"></a></li>\r\n			<li><a class=\"bg-img thumbnail\" data-class=\"bg-img\"><i class=\"icon-picture\"></i></a></li>\r\n			<li><a class=\"bg-custom thumbnail\" data-class=\"bg-custom\"><i class=\"icon-pencil\"></i></a></li>\r\n		</ul>\r\n	</li>\r\n	<li class=\"dropdown-submenu\">\r\n		<a tabindex=\"-1\" href=\"#\">Selected Slide</a>\r\n		<ul class=\"dropdown-menu horizontalDropdown\" style=\"min-width: 127px; width: 127px\">\r\n			";
  options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}
  if (helper = helpers.backgrounds) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.backgrounds); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.backgrounds) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			<li><a class=\"nobg thumbnail\" data-class=\"bg-default\"></a></li>\r\n			<li><a class=\"bg-img thumbnail\" data-class=\"bg-img\"><i class=\"icon-picture\"></i></a></li>\r\n			<li><a class=\"bg-custom thumbnail\" data-class=\"bg-custom\"><i class=\"icon-pencil\"></i></a></li>\r\n		</ul>\r\n	</li>\r\n</ul>\r\n";
  return buffer;
  });

this["JST"]["strut.transition_editor/Button"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<div class=\"btn-group iconBtns\">\r\n	<a class=\"btn btn-plast\">\r\n		<i class=\"icon-th-large icon-white\"></i>\r\n		";
  stack1 = (helper = helpers.lang || (depth0 && depth0.lang),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, "overview", options) : helperMissing.call(depth0, "lang", "overview", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</a>\r\n</div>";
  return buffer;
  });

this["JST"]["strut.transition_editor/CannedTransitions"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n	<li class=\"span4\">\r\n		<a href=\"#\" data-name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"thumbnail";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n			<img src=\"";
  if (helper = helpers.img) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.img); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"";
  if (helper = helpers.style) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.style); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></img>\r\n		</a>\r\n	</li>\r\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return " active";
  }

  buffer += "<ul class=\"thumbnails\">\r\n	";
  stack1 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>\r\n<span class=\"bespoke-link\">\r\n	<a href=\"https://github.com/markdalgleish/bespoke.js\" target=\"_blank\">Bespoke.js</a>\r\n</span>";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/CodeEditor"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"modal-header\">\r\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\r\n	<h3>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\r\n</div>\r\n<div class=\"modal-body\" style=\"overflow: hidden\">\r\n	<textarea class=\"codeInput\">";
  if (helper = helpers.placeholder) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.placeholder); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</textarea>\r\n</div>\r\n<div class=\"modal-footer\">\r\n	<a href=\"#\" class=\"btn btn-primary ok btn-inverse\">Save</a>\r\n	<a href=\"#\" class=\"btn btn-danger cancel\">Cancel</a>\r\n</div>";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/FileBrowser"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\r\n	<li data-fileName=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"><a>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + " <button class=\"close pull-right\">×</button></a></li>\r\n	";
  return buffer;
  }

  buffer += "<input type=\"text\" class=\"fileName\"></input>\r\n<ul class=\"nav nav-pills nav-stacked\">\r\n	";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.files) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.files); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.files) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/InputRequestModal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"modal-header\">\r\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\r\n	<h3 class=\"title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\r\n</div>\r\n<div class=\"modal-body\" style=\"overflow: hidden\">\r\n	<div class=\"errors\"></div>\r\n	<form class=\"form-inline\">\r\n		<label>";
  if (helper = helpers.prompt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prompt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ":&nbsp;</label><input type=\"text\" />\r\n	</form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n	<a href=\"#!\" class=\"btn btn-primary ok btn-inverse\">Ok</a>\r\n</div>";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/ItemImportModal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "<div data-option=\"browse\" class=\"btn\">Browse</div>";
  }

function program3(depth0,data) {
  
  
  return "<div class=\"droparea\">Drag & Drop</div>";
  }

  buffer += "<div class=\"modal-header\">\r\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\r\n	<h3>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\r\n</div>\r\n<div class=\"modal-body\" style=\"overflow: hidden\">\r\n	<div class=\"alert alert-error dispNone\">\r\n  		<button class=\"close\" data-dismiss=\"alert\">×</button>\r\n  		The image URL you entered appears to be incorrect\r\n	</div>\r\n	<h4>URL/File:</h4><div class=\"form-inline\"><input type=\"text\" name=\"itemUrl\"></input>&nbsp;";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.browsable) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.browsable); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.browsable) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\r\n	<input type=\"file\" style=\"display:none\"></input>\r\n	<h4>Preview:</h4>\r\n	<ul class=\"thumbnails\">\r\n		<li class=\"span4\">\r\n			<div class=\"thumbnail\" style=\"width: 368px; height: 276px; position: relative\">\r\n				";
  options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}
  if (helper = helpers.browsable) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.browsable); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.browsable) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				<";
  if (helper = helpers.tag) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.tag); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " class=\"preview\" width=\"360\" height=\"268\" style=\"margin: 0 auto; position: relative; z-index: 1;\" src=\"\"></";
  if (helper = helpers.tag) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.tag); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ">\r\n			</div>\r\n			<div class=\"progress active progress-striped dispNone\">\r\n  				<div class=\"bar\"></div>\r\n			</div>\r\n		</li>\r\n	</ul>\r\n</div>\r\n<div class=\"modal-footer\">\r\n	<a href=\"#\" class=\"btn btn-primary ok btn-inverse\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n</div>";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/List"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "\r\n	<li></li>\r\n	";
  }

  buffer += "<ul>\r\n	";
  stack1 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/PopoverTextbox"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <input type=\"textbox\" placeholder=\"custom1 custom2\"></input>\r\n<div>\r\n<a class=\"btn btn-plast ok\">Ok</a>\r\n<a class=\"btn btn-danger cancel\">Cancel</a>\r\n</div>";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/TabbedModal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<li class=\"providerTab\" data-provider=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><a>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\r\n		";
  return buffer;
  }

  buffer += "<div class=\"modal-header\">\r\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\r\n	<h3 class=\"title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\r\n</div>\r\n<div class=\"modal-body\" style=\"overflow: hidden\">\r\n	<ul class=\"nav nav-tabs\">\r\n		";
  stack1 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</ul>\r\n	<div class=\"tabContent\">\r\n	</div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n	<a href=\"#!\" class=\"btn btn-primary ok btn-inverse\">Ok</a>\r\n</div>";
  return buffer;
  });

return this["JST"];

});