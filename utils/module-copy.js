const gulp = require('gulp')
const gulpif = require('gulp-if')
const correctBower = require('./correct-bower')
const injectSharedStyle = require('./inject-shared-style')

module.exports = (src, data, dest, done) => {
  src
  .pipe(gulpif(/\.html$/, correctBower(dest)))
  .pipe(gulpif(/\.html$/, injectSharedStyle(data)))
  .pipe(gulp.dest(dest))
  .on('end', function () {
    done()
  })
}
