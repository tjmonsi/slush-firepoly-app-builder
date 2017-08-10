const gulp = require('gulp')
const conflict = require('gulp-conflict')

module.exports = (src, dest, done) => {
  src
  .pipe(conflict(dest))
  .pipe(gulp.dest(dest))
  .on('end', function () {
    done()
  })
}
