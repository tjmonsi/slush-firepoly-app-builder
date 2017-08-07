const gulp = require('gulp')
const data = require('../utils/data')
const writer = require('../utils/writer')
const dest = './'

gulp.task('create-package', (done) => {
  writer(gulp.src(__dirname + '/../templates/core/_package.json'), data.app, dest, done)
})
