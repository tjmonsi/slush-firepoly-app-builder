const gulp = require('gulp')
const copy = require('../../utils/copy')
const dest = './core/opts'

gulp.task('update-core-opts', (done) => {
  copy(gulp.src(__dirname + '/../../templates/core/opts/**'), dest, done)
})
