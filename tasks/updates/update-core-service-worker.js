const gulp = require('gulp')
const copy = require('../../utils/copy')
const dest = './core/service-worker'

gulp.task('update-core-service-worker', (done) => {
  copy(gulp.src(__dirname + '/../../templates/core/service-worker/**'), dest, done)
})
