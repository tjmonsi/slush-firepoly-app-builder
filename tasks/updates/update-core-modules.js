const gulp = require('gulp')
const copy = require('../../utils/copy')
const dest = './core/modules'

gulp.task('update-core-modules', (done) => {
  copy(gulp.src(__dirname + '/../../templates/core/modules/**'), dest, done)
})
