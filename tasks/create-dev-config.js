const gulp = require('gulp')
const data = require('../utils/data')
const conflict = require('gulp-conflict')
const template = require('gulp-template')
const rename = require('gulp-rename')
const dest = './src/config'

gulp.task('create-dev-config', (done) => {
  gulp.src(__dirname + '/../templates/config/_dev.json')
    .pipe(template(data.app))
    .pipe(rename(function (file) {
      if (file.basename[0] === '_') {
        file.basename = file.basename.slice(1);
      }
    }))
    .pipe(conflict(dest))
    .pipe(gulp.dest(dest))
    .on('end', function () {
      done()
    })
})
