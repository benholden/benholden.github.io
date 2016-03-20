'use strict';

var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();


// Default Teask, this runs the styles, JS Hint and sereve tasks
gulp.task('default', function() {
  // gulp.start('styles', 'jshint', 'serve');
  gulp.start('styles', 'serve');
});

// compile SCSS into SASS, Autoprefix rules and add sourcemaps so in dev tools ou can see where the CSS rule is in the correct SCSS file rather than the compiled CSS file.
gulp.task('styles', function () {
  gulp.src('./css/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(sourcemaps.write({includeContent: false}))
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(autoprefixer())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream());
});


// jsHint
gulp.task('jshint', function() {
  return gulp.src([
      'app/assets/js/*.js',
  ]).pipe(jshint()
  ).pipe(jshint.reporter('jshint-stylish'));
});

// Static Server + watching scss/html files
gulp.task('serve', function() {
  browserSync.init({
    server: "./"
  });

  gulp.watch("./css/*.scss", ['styles']);
  gulp.watch("./js/**/*.js").on('change', browserSync.reload);
  gulp.watch("*.html").on('change', browserSync.reload);
});
