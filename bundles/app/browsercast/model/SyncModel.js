define(['libs/backbone'],
function(Backbone) {

	return Backbone.Model.extend({

		defaults: {
			"audiocast" : null,
			"transitions":  []
		},

		initialize: function () {
			console.log("=== BROWSERCAST MODEL === CREATED");
			this.transitions = this.get('transitions');
		},

		addSlideTransition : function addSlideTransition(time) {
			var transitions = this.get('transitions');
			var size = transitions.length;
			if (size) {
				if (time > transitions[size - 1]) {
					transitions.push(time);
				}
				else {
					for (var index = size - 1; index>=0; index--) {
						if (transitions[index] < time)
							break;
					}
					transitions[index] = time;
				}
			}
			else {
				transitions.push(time);
			}

			this.trigger('change:transitions');
		},

		clearTransitions : function clearTransitions() {
			this.set('transitions', []);
		},

		getLastFragment : function getLastFragment() {
			var res = {	start : 0, length : 0 };
			var transitions = this.get('transitions');
			var size = transitions.length;
			switch (size) {
				case 0:
					return res;
				case 1:
					res.length = transitions[0];
					return res;
				default:
					res.start = transitions[size-2];
					res.length = transitions[size-1] - transitions[size-2];
					return res;
			}
		},

		constructor: function Sync() {
			Backbone.Model.prototype.constructor.call(this);
		}
	});

});