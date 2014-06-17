define(['libs/backbone'],
function(Backbone) {

	return Backbone.Model.extend({

		works : "true",

		constructor: function Sync(value) {
			console.log("=== BROWSERCAST MODEL === CREATED");
			this.works = value;
			Backbone.Model.prototype.constructor.call(this);
		}
	});

});