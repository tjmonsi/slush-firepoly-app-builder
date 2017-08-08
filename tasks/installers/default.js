'use strict'

const gulp = require('gulp')
const runSequence = require('run-sequence')

gulp.task('default', (done) => {
  return runSequence(
    'create-app',
    'create-dev-config',
    'create-package',
    'create-bower',
    'update-core-src',
    'install-deps',
    done)
});
