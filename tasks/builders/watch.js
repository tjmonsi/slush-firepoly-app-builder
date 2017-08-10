const gulp = require('gulp')
const gutil = require('gulp-util')
const runSequence = require('run-sequence')

gulp.task('watch', (done) => {
  gutil.log(gutil.colors.magenta('Watching files...'))

  return runSequence(
    'build',
    'watch-build',
    done
  )
})
