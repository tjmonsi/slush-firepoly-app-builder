const gulp = require('gulp')

module.exports = (src, data, dest, done) => {
  src
  .pipe(gulp.dest(dest))
  .on('end', function () {
    done()
  })
}
