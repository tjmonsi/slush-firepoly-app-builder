const gulp = require('gulp')
const fs = require('fs')
const data = require('../../utils/build')
const browserify = require('browserify')

gulp.task('build-src-scripts', (done) => {
  browserify({
    entries: ['./src/scripts/index.js'],
    debug: data.build === 'prod'
  })
  .bundle((err, buf) => {
    if (err) {
      console.error(err)
      return done()
    }
    fs.writeFileSync(`${data.buildDest}/app.js`, buf.toString('utf8'), 'utf8')
    done()
  })
})
