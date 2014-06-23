define(['./ImpressGenerator',
		'browsercast/BrowsercastGenerator'],
function(ImpressGenerator, BrowsercastGenerator) {
	'use strict';

	var service = {
		displayName: 'Impress',
		id: 'impress',
		capabilities: {
			freeformStepping: true
		},
		generate: function(deck) {
			return {
				impress: ImpressGenerator.render(deck),
				browsercast: BrowsercastGenerator.render(deck)
			};
		},

		getSlideHash: function(editorModel) {
			return '#/step-' + (editorModel.activeSlideIndex() + 1);
		}
	};

	return {
		initialize: function(registry) {
			registry.register({
				interfaces: 'strut.presentation_generator'
			}, service);
		}
	};
});