define(function() {
	'use strict';

	console.log("=== BROWSERCAST MODULE === STARTED");

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