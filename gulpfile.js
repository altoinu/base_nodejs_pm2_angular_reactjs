const {series, parallel, watch, src, dest} = require('gulp');
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

function scssTask() {

	var path = HTML_PATH[0];

	return src(path + '/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(sourcemaps.write('.'))
		.pipe(dest(dest(path + '/css')));

}

function watchTask() {

	var path = HTML_PATH[0];

	watch([
		path + '/sass/**/*.scss'
	], parallel(scssTask));

}

exports.scssTask = scssTask;
exports.development = series(parallel(scssTask), watchTask);
