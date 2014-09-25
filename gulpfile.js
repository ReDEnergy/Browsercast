var gulp	= require('gulp');
var gutil	= require('gulp-util');
var open	= require('gulp-open');
var watch	= require('gulp-watch');
var sys		= require('sys');
var exec	= require('child_process').exec;

// var livereload = require('gulp-livereload');
// var filter = require('gulp-filter');

// =============================================================================

var EXPRESS_PORT = 8080;
var EXPRESS_ROOT = __dirname;
var LIVERELOAD_PORT = 35729;
var APP_ROOT = 'public';
var lr_files = [
	APP_ROOT + '/**/*.html',
	APP_ROOT + '/**/*.js',
	APP_ROOT + '/**/*.css',
	'!' + APP_ROOT + '/libs/**',
	APP_ROOT + '/libs/browsercast/**',
];

function shellCmd(error, stdout, stderr) { sys.puts(stdout); }

/**
 * Gulp tasks
 */

gulp.task('default', ['server', 'watch', 'open'], function() {});
gulp.task('node', ['watch', 'open'], function() {});

gulp.task('open', function() {
	var options = {
		url: 'http://localhost:' + EXPRESS_PORT,
		app: 'firefox'
	};
	gulp.src(APP_ROOT + '/index.html').pipe(open('', options));
});

gulp.task('server', function() {
	var express = require('express');
	var app = express();
	app.use(require('connect-livereload')({
    	port: LIVERELOAD_PORT
  	}));
	app.use(express.static(__dirname + '/' + APP_ROOT));
	app.listen(EXPRESS_PORT);
});

gulp.task('livereload', function() {
	lr = require('tiny-lr')();
	lr.listen(LIVERELOAD_PORT);
});

gulp.task('watch', ['livereload'], function() {
	exec("gulp templates", shellCmd);
	gulp.watch(lr_files, notifyLivereload);
});


/**
 * Compile Templates
 */

var handlebars = require('gulp-handlebars');
var defineModule = require('gulp-define-module');
var declare = require('gulp-declare');
var concat = require('gulp-concat');

gulp.task('templates', function() {
	var files = [
		APP_ROOT + '/**/templates/*.html',
		APP_ROOT + '/demo/reveal/*'];

	function compile() {
		gulp.src(files)
			.pipe(handlebars())
			.pipe(defineModule('plain'))
			.pipe(declare({
				namespace: 'AppTemplate'
			}))
			.pipe(concat('templates.js'))
			.pipe(gulp.dest(APP_ROOT + '/js'));
	};

    watch({glob: files}, compile);

});

/**
 * Prepare export zip
 */

var AdmZip = require('adm-zip');

gulp.task('buildZip', function() {
	var zip = new AdmZip();
	zip.addLocalFile(APP_ROOT + '/js/reveal/export/init.js', 'reveal/js');
	zip.addLocalFolder(APP_ROOT + '/libs/browsercast', 'reveal/js/browsercast');
	zip.addLocalFolder(APP_ROOT + '/libs/reveal', 'reveal/js/reveal');
	zip.writeZip(APP_ROOT + '/js/reveal/reveal.zip');
});

/**
 * Build deploy
 */

gulp.task('build', ['buildZip'], function() {
	gutil.log('Build end:', gutil.colors.cyan('Now Deploy!'));
});

gulp.task('dev', function() {
	var ncp = require('ncp').ncp;
	ncp(APP_ROOT + '/libs/browsercast', APP_ROOT + '/demo/reveal/js/browsercast', function (err) {
		if (err) {
			return console.error(err);
		}
		gutil.log('copy:', gutil.colors.cyan('done!'));
	});
});


/**
 * Functions
 */

function notifyLivereload2(event) {
	gulp.src(event.path, {read: false})
		.pipe(livereload(lr));
}

function notifyLivereload(event) {
	var fileName = require('path').relative(EXPRESS_ROOT, event.path);
	lr.changed({
		body: {
			files: [fileName]
		}
	});
	gutil.log('file changed:', gutil.colors.cyan(fileName));
}
