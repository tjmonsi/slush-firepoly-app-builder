const gulp = require('gulp')
const copy = require('../../utils/copy')
const dest = './src/test'

gulp.task('update-src-test', (done) => {
  copy(gulp.src(__dirname + '/../../templates/src/test/**'), dest, done)
})
