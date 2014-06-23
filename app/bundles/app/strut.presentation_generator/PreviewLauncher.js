define(function() {
	'use strict';
	var launch = 0;

	function PreviewLauncher(editorModel) {
		this._editorModel = editorModel;
	};

	PreviewLauncher.prototype = {
		launch: function(generator) {
			if (window.previewWind)
				window.previewWind.close();

			BcAudio.stop();
			this._editorModel.trigger('launch:preview', null);

			var previewStr = generator.generate(this._editorModel.deck());

			localStorage.setItem('preview-presentation', JSON.stringify(previewStr));

			window.previewWind = window.open(
				'preview_export/' + (generator.file || generator.id) + '.html' + generator.getSlideHash(this._editorModel),
				window.location.href);
			var sourceWind = window;
		}
	};

	return PreviewLauncher;
});