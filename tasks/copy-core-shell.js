const gulp = require('gulp')
const data = require('../utils/data')
const copy = require('../utils/copy')
const dest = './core/shell'

gulp.task('copy-core-shell', (done) => {
  copy(gulp.src(__dirname + '/../templates/core/shell/**'), {}, dest, done)
})
