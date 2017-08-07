const gulp = require('gulp')
const data = require('../../utils/build')
const fs = require('fs')

gulp.task('build-dist', (done) => {
  if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist')

    if (!fs.existsSync(data.buildDest)) {
      fs.mkdirSync(data.buildDest)
    }
  }
  done()
})
