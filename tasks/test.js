// gulp.src(__dirname + '/templates/**')
//       .pipe(template(answers))
//       .pipe(rename(function (file) {
//         if (file.basename[0] === '_') {
//           file.basename = '.' + file.basename.slice(1);
//         }
//       }))
//       .pipe(conflict('./'))
//       .pipe(gulp.dest('./'))
//       .pipe(install())
//       .on('end', function () {
//           done();
//       });
