const gulp = require('gulp')
const data = require('../../utils/data')
const copy = require('../../utils/force-copy')
const dest = './dist/public/modules'

gulp.task('build-dev-bower-components', (done) => {
  copy(gulp.src('./bower_components/**'), {}, dest, done)
})
