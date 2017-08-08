const gulp = require('gulp')
const runSequence = require('run-sequence')
const copyCore = require('../../utils/copy-core')

gulp.task('update-core', (done) => {
  return runSequence(
    'update-core-modules',
    'update-core-opts',
    'update-core-scripts',
    'update-core-root',
    'update-core-shell',
    'update-core-service-worker',
    done)
});
