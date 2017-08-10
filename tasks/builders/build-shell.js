const gulp = require('gulp')
const data = require('../../utils/build')
const copy = require('../../utils/module-copy')

gulp.task('build-shell', (done) => {
  const dest = data.buildDest + '/shell'
  copy(gulp.src(data.utils.shell), data, dest, done)
})
