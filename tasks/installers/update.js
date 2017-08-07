'use strict'

const gulp = require('gulp')
const runSequence = require('run-sequence')

gulp.task('update', (done) => {
  runSequence(
    'copy-core-src',
    'install-deps',
    done)
});