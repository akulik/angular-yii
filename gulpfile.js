"use strict";

const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const jade = require('gulp-jade');
const watch = require('gulp-watch');
const argv = require('yargs').argv;

const jsTask = require('./gulp-tasks/js');
const cssTask = require('./gulp-tasks/css');

gulp.task('init', () => {

  const options = {
    env: argv.env
  };

  gulp.start(['jade']);

  jsTask(options);

  cssTask(options);
});

gulp.task('jade', () => {
  gulp.src('./public/index.jade');

  var YOUR_LOCALS = {
    sourcePath: '/src/build.js'
  };

  gulp.src('./public/index.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./public/'))
});
