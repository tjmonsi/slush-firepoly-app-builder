const gulp = require('gulp')
const runSequence = require('run-sequence')

gulp.task('update-core', (done) => {
  return runSequence(
    'update-core-modules',
    'update-core-opts',
    'update-core-scripts',
    'update-core-root',
    'update-core-shell',
    'update-core-service-worker',
    'update-core-test',
    done)
})
