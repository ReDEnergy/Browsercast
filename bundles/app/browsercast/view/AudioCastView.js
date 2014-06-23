define(["libs/backbone"],
function(Backbone) {
	return Backbone.View.extend({
		className : "component audioCastView",

		initialize : function() {
		},

		render : function() {
			console.log("AUDIO CAST VIEW");
			console.log(this.model.get('src'));
			return this.$el;
		}
	});
});