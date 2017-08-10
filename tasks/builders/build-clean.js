const gulp = require('gulp')
const del = require('del')
const data = require('../../utils/build')

gulp.task('build-clean', () => {
  return del([data.buildDest])
})
