const gulp = require('gulp')
const correctBower = require('./correct-bower')
const injectSharedStyle = require('./inject-shared-style')

module.exports = (src, data, dest, done) => {
  src
  .pipe(correctBower(dest))
  .pipe(injectSharedStyle(data))
  .pipe(gulp.dest(dest))
  .on('end', function () {
    done()
  })
}
