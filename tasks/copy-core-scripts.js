const gulp = require('gulp')
const data = require('../utils/data')
const copy = require('../utils/copy')
const dest = './core/scripts'

gulp.task('copy-core-scripts', (done) => {
  copy(gulp.src(__dirname + '/../templates/core/scripts/**'), {}, dest, done)
})
