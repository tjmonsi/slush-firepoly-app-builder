module.exports = (src, data, dest, done) => {
  src.pipe(template(data))
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
}
