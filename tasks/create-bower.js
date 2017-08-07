const gulp = require('gulp')
const data = require('../utils/data')
const writer = require('../utils/writer')
const dest = './'

gulp.task('create-bower', (done) => {
  writer(gulp.src(__dirname + '/../templates/core/_bower.json'), data.app, dest, done)
})
