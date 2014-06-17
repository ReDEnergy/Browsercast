define(function() {
	'use strict';

	console.log("=== BROWSERCAST MODULE === LOADED");

	return {
		initialize: function(registry) {
			registry.register({
				interfaces: 'browsercast',
			}, function() {
				console.log("Browsercast AWESOME");
			});
		}
	};
});