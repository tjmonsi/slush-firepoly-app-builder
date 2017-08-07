'use strict'

const gulp = require('gulp')
const runSequence = require('run-sequence')

gulp.task('default', (done) => {
  runSequence(
    'create-app',
    'create-dev-config',
    'create-package',
    'create-bower',
    'copy-core-modules',
    'install-deps',
    done)
});
