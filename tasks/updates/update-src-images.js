const gulp = require('gulp')
const copy = require('../../utils/copy')
const dest = './src/images'

gulp.task('update-src-images', (done) => {
  copy(gulp.src(__dirname + '/../../templates/src/images/**'), dest, done)
})
