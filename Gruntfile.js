'use strict';

module.exports = function (grunt) {
	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// configurable paths
	var Config = {
		app: 'app',
		dist: 'dist'
	};

	var HandlebarsTask = {
				files: {
					"app/scripts/compiled-templates.js": [
					"app/bundles/**/templates/*.html"
				]
			},
			options: {
					namespace: 'JST',
					processName: function(filename) {
						return filename
						.replace(/^app\//, '')
						.replace(/\.html$/, '')
						.replace('bundles/', '')
						.replace('app/', '')
						.replace('common/', '')
						.replace('templates/', '');
					},
					amd: true
				}
			};

	grunt.initConfig({
		config: Config,

		handlebars: {
		  compile: HandlebarsTask
		},

		replace: {
			compile: {
				src: ['dist/index.html'],
				overwrite: true,				 // overwrite matched source files
				replacements: [{
					from: "window.isOptimized = false;",
					to: "window.isOptimized = true;"
				}]
			}
		},

		// grunt-express will serve the files from the folders listed in `bases`
		// on specified `port` and `hostname`
		express: {
			server: {
				options: {
					port: 9000,
					hostname: "0.0.0.0",
					bases: ['<%= config.app %>'],
					livereload: true
				}
			}
		},
		 
		watch: {
			all: {
				files: [
					'<%= config.app %>/*.html',
					'{.tmp,<%= config.app %>}/styles/{,*/}*.css',
					'{.tmp,<%= config.app %>}/scripts/{,*/}*.js',
					'<%= config.app %>/images/{,*/}*.{png,jpg,jpeg,webp}'
				],
				options: {
					livereload: true
				}				
			},
			handlebars: {
				files: "app/bundles/**/templates/*.html",
				tasks: ['handlebars'],
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
		
		clean: {
			dist: ['.tmp', '<%= config.dist %>/*'],
			server: '.tmp',
			tmp: '.tmp'
		},
		
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'<%= config.app %>/scripts/{,*/}*.js',
				'!<%= config.app %>/scripts/vendor/*',
				'test/spec/{,*/}*.js'
			]
		},
		
		mocha: {
			all: {
				options: {
					run: true,
					urls: ['http://localhost:<%= express.server.options.port %>/index.html']
				}
			}
		},
		// not used since Uglify task does concat,
		// but still available if needed
		/*concat: {
			dist: {}
		},*/
		
		requirejs: {
			dist: {
				// Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
				options: {
					// `name` and `out` is set by grunt-usemin
					baseUrl: 'app/scripts',
					optimize: 'none',
					mainConfigFile: 'app/scripts/main.js',
					// TODO: Figure out how to make sourcemaps work with grunt-usemin
					// https://github.com/yeoman/grunt-usemin/issues/30
					generateSourceMaps: true,
					// required to support SourceMaps
					// http://requirejs.org/docs/errors.html#sourcemapcomments
					preserveLicenseComments: false,
					useStrict: true,
					wrap: true,
					done: function(done, output) {
						var duplicates = require('rjs-build-analysis').duplicates(output);

						if (duplicates.length > 0) {
						  grunt.log.subhead('Duplicates found in requirejs build:');
						  grunt.log.warn(duplicates);
						  done(new Error('r.js built duplicate modules, please check the excludes option.'));
						}

						done();
					}
					//uglify2: {} // https://github.com/mishoo/UglifyJS2
				}
			}
		},
		
		useminPrepare: {
			html: '<%= config.app %>/index.html',
			options: {
				dest: '<%= config.dist %>'
			}
		},
		
		usemin: {
			html: ['<%= config.dist %>/{,*/}*.html'],
			css: ['<%= config.dist %>/styles/{,*/}*.css'],
			options: {
				dirs: ['<%= config.dist %>']
			}
		},
		
		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= config.app %>/images',
					src: '{,*/}*.{png,jpg,jpeg}',
					dest: '<%= config.dist %>/images'
				}]
			}
		},
		
		cssmin: {
			dist: {
				files: {
					'<%= config.dist %>/styles/main.css': [
						'<%= config.dist %>/styles/main.css',
						'.tmp/built.css'
					]
				}
			}
		},
		
		htmlmin: {
			dist: {
				options: {
					/*removeCommentsFromCDATA: true,
					// https://github.com/yeoman/grunt-usemin/issues/44
					//collapseWhitespace: true,
					collapseBooleanAttributes: true,
					removeAttributeQuotes: true,
					removeRedundantAttributes: true,
					useShortDoctype: true,
					removeEmptyAttributes: true,
					removeOptionalTags: true*/
				},
				files: [{
					expand: true,
					cwd: '<%= config.app %>',
					src: '*.html',
					dest: '<%= config.dist %>'
				}]
			}
		},
		
		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= config.app %>',
					dest: '<%= config.dist %>',
					src: [
						'.htaccess',
						'empty.html',
						'preview_export/**',
						'zip/**'
					]
				},
				{
					expand: true,
					dot: true,
					flatten: true,
					cwd: '<%= config.app %>',
					dest: '<%= config.dist %>/styles/img',
					src: [
						'**/*.{ico,txt,png,jpg,gif,svg}',
					]
				},
				// TODO: figure out what the deal is with the fonts in dist mode...
				{
					expand: true,
					dot: true,
					flatten: true,
					cwd: '<%= config.app %>',
					dest: '<%= config.dist %>/styles',
					src: [
						'**/*.woff'
					]
				},
				{
					expand: true,
					cwd: '<%= config.app %>/styles/strut.themes',
					dest: '<%= config.dist %>/styles/strut.themes',
					src: [
						'**/*.png',
						'*.css'
					]
				}]
			}
		},
		
		bower: {
			all: {
				rjsConfig: '<%= config.app %>/scripts/main.js'
			}
		}
	});

	grunt.registerTask('server', function (target) {
		grunt.task.run([
			'express',
			'open',
			'watch'
		]);
	});

	grunt.registerTask('test', [
		'clean:server',
		// 'connect:test',
		'mocha'
	]);

	grunt.registerTask('build', [
		'clean:dist',
		'handlebars',
		'useminPrepare',
		'requirejs',
		'imagemin',
		'htmlmin',
		'concat',
		'cssmin',
		'uglify',
		'copy',
		'replace',
		'usemin',
		'clean:tmp'
	]);

	grunt.registerTask('default', [
		// 'jshint',
		'test',
		'build'
	]);
};
