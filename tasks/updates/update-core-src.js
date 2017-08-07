const gulp = require('gulp')
const runSequence = require('run-sequence')

gulp.task('update-core-src', (done) => {
  runSequence(
    'update-core',
    'update-src',
    done)
});
