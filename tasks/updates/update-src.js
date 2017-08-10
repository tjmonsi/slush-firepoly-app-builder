const gulp = require('gulp')
const runSequence = require('run-sequence')
const copySrc = require('../../utils/copy-src')

gulp.task('update-src', (done) => {
  return runSequence(
    'update-src-modules',
    'update-src-opts',
    'update-src-scripts',
    'update-src-rules',
    'update-src-service-worker',
    'update-src-images',
    done)
});
