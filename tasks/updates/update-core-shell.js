const gulp = require('gulp')
const copy = require('../../utils/copy')
const dest = './core/shell'

gulp.task('update-core-shell', (done) => {
  copy(gulp.src(__dirname + '/../../templates/core/shell/**'), dest, done)
})
