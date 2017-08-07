const gulp = require('gulp')
const fs = require('fs')

gulp.task('build-dist-public', (done) => {
  if (!fs.existsSync('./dist/public')) {
    fs.mkdirSync('./dist/public')
  }
  done()
})
