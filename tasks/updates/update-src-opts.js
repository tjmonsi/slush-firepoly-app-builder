const gulp = require('gulp')
const data = require('../../utils/data')
const copy = require('../../utils/copy')
const dest = './src/opts'

gulp.task('update-src-opts', (done) => {
  copy(gulp.src(__dirname + '/../templates/src/opts/**'), {}, dest, done)
})
