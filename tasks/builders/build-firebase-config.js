const gulp = require('gulp')
const data = require('../../utils/build')
const writer = require('../../utils/writer')

gulp.task('build-firebase-config', (done) => {
  const dest = data.buildDest + '/opts'
  writer(gulp.src(__dirname + '/../../templates/config/_firebase.html'), data.config.app, dest, done)
})