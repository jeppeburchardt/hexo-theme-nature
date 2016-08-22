'use strict';

var gulp     = require('gulp');
var mincss   = require('gulp-clean-css');
var prefixer = require('gulp-autoprefixer');
var rimraf   = require('rimraf');

gulp.task('clean', function (done) {
  rimraf('./source/css/index.css', done);
});

// Compile CSS
gulp.task('css', function () {
  gulp.src('./styles/index.css')
      .pipe(prefixer('last 3 versions'))
      .pipe(mincss())
      .pipe(gulp.dest('./source/css/'));
});

// Watch for changes to Sass
gulp.task('watch', function () {
  gulp.watch('./styles/**/*.css', ['css']);
});

gulp.task('build', ['clean', 'css']);

gulp.task('default', ['build', 'watch']);
