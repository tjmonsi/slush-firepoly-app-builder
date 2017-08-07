const gulp = require('gulp')
const data = require('../../utils/build')
const copy = require('../../utils/module-copy')

gulp.task('build-opts', (done) => {
  const dest = data.buildDest + '/opts'
  copy(gulp.src(['./core/opts/**/*.html', './core/opts/*.html', './src/opts/**/*.html', './src/opts/*.html']), data, dest, done)
})
