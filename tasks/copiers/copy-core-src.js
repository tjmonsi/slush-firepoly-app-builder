const gulp = require('gulp')
const runSequence = require('run-sequence')
const copyCore = require('../../utils/copy-core')
const copySrc = require('../../utils/copy-src')

gulp.task('copy-core-src', (done) => {
  runSequence(
    copyCore,
    copySrc,
    done)
});
