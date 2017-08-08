'use strict'

const gulp = require('gulp')
const runSequence = require('run-sequence')

gulp.task('update', (done) => {
  return runSequence(
    'copy-core',
    'install-deps',
    done)
});
