const gulp = require('gulp')
const conflict = require('gulp-conflict')
const template = require('gulp-template')
const rename = require('gulp-rename')

module.exports = (src, data, dest, done) => {
  src.pipe(template(data))
  .pipe(rename(function (file) {
    if (file.basename[0] === '_') {
      file.basename = file.basename.slice(1)
    }
  }))
  .pipe(conflict(dest))
  .pipe(gulp.dest(dest))
  .on('end', function () {
    done()
  })
}
