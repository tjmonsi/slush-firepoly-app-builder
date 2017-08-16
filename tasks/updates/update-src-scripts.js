const gulp = require('gulp')
const copy = require('../../utils/copy')
const dest = './src/scripts'

gulp.task('update-src-scripts', (done) => {
  copy(gulp.src(__dirname + '/../../templates/src/scripts/**'), dest, done)
})
