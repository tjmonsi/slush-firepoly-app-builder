const gulp = require('gulp')
const runSequence = require('run-sequence')
const copySrc = require('../../utils/copy-src')

gulp.task('update-src', (done) => {
  runSequence(
    copySrc,
    done)
});
