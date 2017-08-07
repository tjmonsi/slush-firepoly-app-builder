const gulp = require('gulp')
const fs = require('fs')

gulp.task('build-dist', (done) => {
  if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist')
  }
  done()
})
