var gulp = require('gulp');
//const {series, parallel, watch, src, dest} = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

var compass = require('gulp-compass');
var nodemon = require('gulp-nodemon');

// var HTML_PATH = '.';
var HTML_PATH = [
	'public_angularjs1',
	// 'my-react-app'
];
var SERVER_PATH = 'server';

var compass_taskNames = [];
var compass_watch_taskNames = [];
HTML_PATH.forEach(function (path, index, array) {

	// ========================================
	// Compass
	// ========================================
	var compass_web_taskName = 'compass-web_' + path;
	compass_taskNames.push(compass_web_taskName);
	gulp.task(compass_web_taskName, function (cb) {

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
	gulp.task(compass_web_watch_taskName, function (cb) {

		var watcher = gulp.watch([
			path + '/sass/**/*.scss'
		], gulp.parallel(compass_web_taskName));

		watcher.on('change', function (event) {
			console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		});

		cb();

	});

});

gulp.task('compass-web', gulp.series(gulp.parallel(compass_taskNames), function (cb) {

	console.log('gulp compass-web');
	cb();

}));

gulp.task('compass-web-watch', gulp.series(gulp.parallel(compass_watch_taskNames), function (cb) {

	console.log('gulp compass-web-watch');
	cb();

}));

// ========================================
//Nodemon
//========================================
gulp.task('nodemon', function (cb) {
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

// 'nodemon'
exports.development = gulp.series('compass-web', 'compass-web-watch', function (cb) {

	console.log('gulp development task');
	cb();

});

// // https://coder-coder.com/gulp-4-walk-through/
// function scssTask() {

// 	var path = HTML_PATH[0];

// 	return src(path + '/sass/**/*.scss')
// 		.pipe(sourcemaps.init())
// 		.pipe(sass())
// 		.pipe(postcss([autoprefixer(), cssnano()]))
// 		.pipe(sourcemaps.write('.'))
// 		.pipe(dest(dest(path + '/css')));

// }

// function watchTask() {

// 	var path = HTML_PATH[0];

// 	watch([
// 		path + '/sass/**/*.scss'
// 	], parallel(scssTask));

// }

// exports.scssTask = scssTask;
// exports.development = series(parallel(scssTask), watchTask);
