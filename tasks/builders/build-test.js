const gulp = require('gulp')
const data = require('../../utils/build')
const copy = require('../../utils/copy')

gulp.task('build-test', (done) => {
  const dest = data.buildDest + '/test'
  copy(gulp.src(data.utils.test), dest, done)
})
