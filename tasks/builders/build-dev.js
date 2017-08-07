const gulp = require('gulp')
const runSequence = require('run-sequence')

gulp.task('build-dev', (done) => {
  runSequence(
    'build-dist',
    'build-dist-public',
    'build-dev-bower-components',
    done
  )
})
