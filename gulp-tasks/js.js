"use strict";

const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const merge = require('merge2');
const mainBowerFiles = require('main-bower-files');

const vendors = mainBowerFiles({
  filter: [
    '/**/*.js',
    '!/**/jquery*',
    '!/**/bootstrap*'
  ]
});
const appFiles = [
  './public/app/app.js',
  './public/app/*.js',
  './public/app/**/*.js'
];

module.exports = options => {

  gulp.start('js');

  if (options.env === 'dev') {
    gulp.start('js:watch');
  }

};

gulp.task('js:watch', () => {

  return watch(appFiles, () => {
    gulp.start('js');
  });

});

gulp.task('js', () => {

  return merge(
    gulp.src(vendors),
    gulp.src(appFiles).pipe(babel({
      presets: ['es2015', 'stage-0']
    })))
    .pipe(concat('build.js'))
    .pipe(gulp.dest('./public/src/'));
});

