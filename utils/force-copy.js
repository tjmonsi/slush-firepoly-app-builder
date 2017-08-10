const gulp = require('gulp')

module.exports = (src, dest, done) => {
  src
  .pipe(gulp.dest(dest))
  .on('end', function () {
    done()
  })
}
