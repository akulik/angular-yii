"use strict";

const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const merge = require('merge2');
const mainBowerFiles = require('main-bower-files');

const vendors = mainBowerFiles({
  filter: [
    '/**/*.css',
    '!/**/jquery*',
    '!/**/bootstrap*'
  ]
});
const appFiles = [
  './public/app/**/*.css'
];

module.exports = options => {

  gulp.start('css');

  if (options.env === 'dev') {
    gulp.start('css:watch');
  }

};

gulp.task('css:watch', () => {

  return watch(appFiles, () => {
    gulp.start('css');
  });

});

gulp.task('css', () => {

  return merge(
    gulp.src(vendors),
    gulp.src(appFiles))
      .pipe(concat('styles.css'))
      .pipe(gulp.dest('./public/src/'));
});


