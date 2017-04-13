var path = require('path');
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var clean = require('gulp-clean');
var typings = require('gulp-typings');
var tslint = require('gulp-tslint');
var sasslint = require('gulp-sass-lint');
var mocha = require('gulp-mocha');
var spawn = require('gulp-spawn');

gulp.task('build', ['build:server', 'build:client']);

gulp.task('build:server', ['lint:ts'], () => {
	spawn({
		cmd: 'tsc',
		args: [
		'-p',
		'/server'
		]
	});
});

gulp.task('build:client', ['lint:sass', 'sass'], () => {
	var tsProject = ts.createProject(__dirname + '/public/tsconfig.json');
	return gulp.src(path.join(__dirname + '/public/**/*.ts'))
		.pipe(ts(tsProject))
		.js
		.pipe(gulp.dest(path.resolve('./public')));
});

gulp.task('sass', ['sass:cleanup']);

gulp.task('sass:compile', () => {
	return gulp.src([__dirname + '/public/**/*.sass', __dirname + '/public/**/*.scss'])
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest(__dirname + '/public/.tmp/css'));
});

gulp.task('sass:cleanup', ['concat:css'], () => {
	return gulp.src(__dirname + '/public/.tmp/css')
		.pipe(clean());
});

gulp.task('concat:css', ['sass:compile'], () => {
	return gulp.src(__dirname + '/public/.tmp/css/**/*.css')
		.pipe(concatCss('app.css'))
		.pipe(gulp.dest(__dirname + '/public/css'));
});

gulp.task('start', ['build'], () => {
	nodemon({
		script: 'server/server.js',
		ext: 'js html',
		env: { 'NODE_ENV': 'development' }
	});
});

gulp.task('typings', ['typings:server', 'typings:client']);

gulp.task('typings:server', () => {
	return gulp.src(__dirname + '/server/typings.json')
		.pipe(typings());
});

gulp.task('typings:client', () => {
	return gulp.src(__dirname + '/public/typings.json')
		.pipe(typings());
});

gulp.task('lint', ['lint:ts', 'lint:sass']);

gulp.task('lint:ts', () => {
	return gulp.src([__dirname + '/**/*.ts', '!node_modules/**/*', '!server/typings/**/*', '!public/typings/**/*'])
		.pipe(tslint())
		.pipe(tslint.report('prose'));
});

gulp.task('lint:sass', () => {
	return gulp.src([__dirname + '/**/*.s+(a|c)ss', '!node_modules/**/*'])
		.pipe(sasslint())
		.pipe(sasslint.format())
		.pipe(sasslint.failOnError());
});

gulp.task('test:client', ['build'], () => {
	nodemon({
		script: 'server/server.js',
		ext: 'js html',
		env: { 'NODE_ENV': 'testing' }
	});
});

gulp.task('test:server', ['build'], () => {
	return gulp.src(__dirname + '/server/**/*.spec.js' , {read: false})
		// gulp-mocha needs filepaths so you can't have any plugins before it 
		.pipe(mocha({
			reporter: 'spec',
			globals: {
				should: require('should')
			}
		}));
});
