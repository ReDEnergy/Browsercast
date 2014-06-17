define(['libs/backbone'],
function(Backbone) {
	'use strict';

	return Backbone.View.extend({
		id : 'browsercast-editor',

		initialize: function(deck) {
			console.log("=== BROWSERCAST VIEW === INITIALIZED");
			this.template = JST['browsercast/sync'];
			this._deck = deck;
			console.log("SYNC VIEW DECK", this._deck);
			console.log(this.template);
			this.bc_sync = undefined;
		},

		events : {
			'click #play-button': 'play',
			'click #stop-button': 'stop'
		},

		stop : function() {
			BcAudio.stop();
		},

		play : function() {
			var fragment = BcSync.get();
			BcAudio.set(fragment.start, fragment.length, 0);
			BcAudio.play();
			this._deck.get('activeSlide').setBrowsercast(fragment);
		},

		render: function() {
			this.$el.html(this.template());
			var elem = BcSync.create();
			this.el.appendChild(elem);
			return this;
		},
	});
});