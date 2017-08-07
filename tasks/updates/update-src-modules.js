const gulp = require('gulp')
const data = require('../../utils/data')
const copy = require('../../utils/copy')
const dest = './src/modules'

gulp.task('update-src-modules', (done) => {
  copy(gulp.src(__dirname + '/../../templates/src/modules/**'), dest, done)
})
