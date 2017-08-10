const gulp = require('gulp')
const fs = require('fs')
const data = require('../../utils/build')
const browserify = require('browserify')

gulp.task('build-core-scripts', (done) => {
  browserify({
    entries: data.utils.coreScripts,
    debug: data.build === 'prod'
  })
  .bundle((err, buf) => {
    if (err) {
      console.error(err)
      return done()
    }
    fs.writeFileSync(`${data.buildDest}/index.js`, buf.toString('utf8'), 'utf8')
    done()
  })
})
