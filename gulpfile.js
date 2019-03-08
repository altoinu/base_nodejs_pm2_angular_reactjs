// ========================================
// deps
// ========================================
var gulp = require('gulp');
var compass = require('gulp-compass');
var nodemon = require('gulp-nodemon');

// var HTML_PATH = '.';
var HTML_PATH = 'public';

// ========================================
// serve
// ========================================
gulp.task('dev', [
	'compass-web',
	'nodemon'
], function() {
});

// ========================================
// Compass
// ========================================
gulp.task('compass-web', function() {
	return gulp.src(HTML_PATH + '/sass/**/*.scss').pipe(compass({
		css: HTML_PATH + '/css',
		sass: HTML_PATH + '/sass',
		image: HTML_PATH + '/images'
	})).pipe(gulp.dest('.css'));
});

// ========================================
// Compass watcher
// ========================================
var watcher = gulp.watch([
	HTML_PATH + '/sass/**/*.scss'
], [
	'compass-web'
]);

watcher.on('change', function(event) {
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

//========================================
//Nodemon
//========================================
gulp.task("nodemon", function(cb) {
	var called = false;
	return nodemon({

		// nodemon our expressjs server
		script: 'server/index.js',

		// watch core server file(s) that require server restart on change
		watch: [
			'server/index.js',
			'server/app.js',
		//'folder/path/**/file.js'
		//'folder/path/**/*.js'
		]

	}).on('start', function onStart() {
		// ensure start only got called once
		if (!called) {
			cb();
		}
		called = true;
	}).on('restart', function onRestart() {

	});
});
