const gulp = require('gulp')
const data = require('../../utils/build')
const copy = require('../../utils/copy')

gulp.task('build-images', (done) => {
  const dest = data.buildDest + '/images'
  copy(gulp.src(data.utils.images), dest, done)
})
