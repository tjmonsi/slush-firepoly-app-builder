const gulp = require('gulp')
const copy = require('../../utils/copy')
const dest = './core/test'

gulp.task('update-core-test', (done) => {
  copy(gulp.src(__dirname + '/../../templates/core/test/**'), dest, done)
})
