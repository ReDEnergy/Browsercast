define(["handlebars"],
function(Handlebars) {

	function BrowsercastGenerator() {
	};

	BrowsercastGenerator.prototype.render = function render(deck) {
		return JST["browsercast/export_browsercast"]({source: deck.attributes.audiocast});
	};

	return new BrowsercastGenerator();
});
