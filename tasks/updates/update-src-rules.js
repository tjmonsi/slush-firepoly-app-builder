const gulp = require('gulp')
const data = require('../../utils/data')
const copy = require('../../utils/copy')
const dest = './src/rules'

gulp.task('update-src-rules', (done) => {
  copy(gulp.src(__dirname + '/../../templates/src/rules/**'), dest, done)
})
