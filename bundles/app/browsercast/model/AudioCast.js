define(['libs/backbone'],
	function(Backbone) {
		'use strict';
		return Backbone.Model.extend({
			initialize: function() {
				this.set('type', 'AudioCast');
				console.log("STUPIDIDTY");
			},

			getURL: function() {
				return this.url;
			},

			constructor: function AudioCastModel(attrs) {
				Backbone.Model.prototype.constructor.call(this, attrs);
			}
		});
	});