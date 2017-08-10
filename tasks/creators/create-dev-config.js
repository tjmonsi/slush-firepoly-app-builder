const gulp = require('gulp')
const data = require('../../utils/data')
const writer = require('../../utils/writer')
const dest = './src/config'

gulp.task('create-dev-config', (done) => {
  writer(gulp.src(__dirname + '/../../templates/config/_dev.json'), data.app, dest, done)
})
