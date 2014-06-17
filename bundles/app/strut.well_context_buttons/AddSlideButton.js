define(['libs/backbone'],
function(Backbone) {
	
	return Backbone.View.extend({
		className: 'addBtn btn btn-success',
		events: {
			click: "_addSlide"
		},

		_addSlide: function() {
			this._editorModel.addSlide(this._wellMenuModel.slideIndex());
		},

		render: function() {
			this.$el.html('<div class="icon-plus icon-white"></div>');
			return this;
		},

		constructor: function AddSlideButton(editorModel, wellMenuModel) {
			this._editorModel = editorModel;
     		this._wellMenuModel = wellMenuModel;
			Backbone.View.prototype.constructor.call(this);
		}
	});
	
});
