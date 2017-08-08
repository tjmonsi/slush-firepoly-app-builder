const gulp = require('gulp')
const data = require('../../utils/build')
const copy = require('../../utils/force-copy')

gulp.task('build-bower-components', (done) => {
  const dest = data.buildDest + '/bower_components'
  copy(gulp.src(data.utils.bower), dest, done)
})
