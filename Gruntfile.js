'use strict';

module.exports = function (grunt) {

	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// configurable paths
	var Config = {
		app: '.',
		dist: 'dist'
	};

	grunt.initConfig({
		config: Config,

		// grunt-express will serve the files from the folders listed in `bases`
		// on specified `port` and `hostname`
		express: {
			server: {
				options: {
					port: 9000,
					hostname: "0.0.0.0",
					bases: ['<%= config.app %>/'],
					livereload: true
				}
			}
		},

		watch: {
			all: {
				files: [
					'<%= config.app %>/*.html',
					'<%= config.app %>/styles/{,*/}*.css',
					'<%= config.app %>/scripts/{,*/}*.js',
					'<%= config.app %>/images/{,*/}*.{png, jpg, jpeg, webp}'
				],
				options: {
					livereload: true
				}
			}
		},

		open: {
			all: {
				// Gets the port from the connect configuration
				path: 'http://localhost:<%= express.server.options.port%>'
			}
		},
	});

	grunt.registerTask('server', function (target) {
		grunt.task.run([
			'express',
			'open',
			'watch'
		]);
	});
};
