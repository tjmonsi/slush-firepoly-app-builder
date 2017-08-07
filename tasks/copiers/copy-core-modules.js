const gulp = require('gulp')
const data = require('../../utils/data')
const copy = require('../../utils/copy')
const dest = './core/modules'

gulp.task('copy-core-modules', (done) => {
  copy(gulp.src(__dirname + '/../../templates/core/modules/**'), {}, dest, done)
})
