// For gulp ver <=3
// ========================================
// deps
// ========================================
var gulp = require('gulp');
var compass = require('gulp-compass');
var nodemon = require('gulp-nodemon');

// var HTML_PATH = '.';
var HTML_PATH = [
	'public_angularjs1',
	//'my-react-app'
];
var SERVER_PATH = 'server';

// ========================================
// serve
// ========================================
gulp.task('development', [
	'compass-web',
	'compass-web-watch',
// 'nodemon'
], function() {

	console.log('gulp development task');

});

var compass_taskNames = [];
var compass_watch_taskNames = [];
HTML_PATH.forEach(function(path, index, array) {

	// ========================================
	// Compass
	// ========================================
	var compass_web_taskName = 'compass-web_' + path;
	compass_taskNames.push(compass_web_taskName);
	gulp.task(compass_web_taskName, function() {

		console.log('gulp', compass_web_taskName);

		return gulp.src(path + '/sass/**/*.scss').pipe(compass({
			css: path + '/css',
			sass: path + '/sass',
			image: path + '/images'
		})).pipe(gulp.dest(path + '/css'));

	});

	// ========================================
	// Compass watcher
	// ========================================
	var compass_web_watch_taskName = 'compass-web-watch_' + path;
	compass_watch_taskNames.push(compass_web_watch_taskName);
	gulp.task(compass_web_watch_taskName, function() {

		var watcher = gulp.watch([
			path + '/sass/**/*.scss'
		], [
			compass_web_taskName
		]);

		watcher.on('change', function(event) {
			console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		});

	});

});

gulp.task('compass-web', compass_taskNames, function() {

	console.log('gulp compass-web');

});

gulp.task('compass-web-watch', compass_watch_taskNames, function() {

	console.log('gulp compass-web-watch');

});

// ========================================
//Nodemon
//========================================
gulp.task('nodemon', function(cb) {
	var called = false;
	return nodemon({

		// nodemon our expressjs server
		script: SERVER_PATH + '/index.js',

		// watch core server file(s) that require server restart on change
		watch: [
			SERVER_PATH + '/index.js',
			SERVER_PATH + '/app.js',
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
