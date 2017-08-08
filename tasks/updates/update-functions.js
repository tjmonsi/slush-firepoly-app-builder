const gulp = require('gulp')
const data = require('../../utils/data')
const copy = require('../../utils/copy')
const dest = './functions'

gulp.task('update-functions', (done) => {
  copy(gulp.src(__dirname + '/../../templates/functions/**'), dest, done)
})
