const gulp = require('gulp')
const copy = require('../../utils/copy')
const dest = './core/root'

gulp.task('update-core-root', (done) => {
  copy(gulp.src(__dirname + '/../../templates/core/root/**'), dest, done)
})
