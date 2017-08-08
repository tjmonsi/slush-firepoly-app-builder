const gulp = require('gulp')
const runSequence = require('run-sequence')
const copyCore = require('../../utils/copy-core')

gulp.task('update-core', (done) => {
  return runSequence(
    copyCore,
    done)
});
