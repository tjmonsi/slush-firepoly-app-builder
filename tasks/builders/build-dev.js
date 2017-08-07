const gulp = require('gulp')
const fs = require('fs')
const data = require('../../utils/build')
const runSequence = require('run-sequence')

gulp.task('build-dev', (done) => {
  data.build = 'dev'
  data.buildDest = './dist/public'
  data.config = JSON.parse(fs.readFileSync('./src/config/' + data.build + '.json', 'utf8'))
  if (data.config.theme.src.indexOf('modules') === 0) {
    data.theme = JSON.parse(fs.readFileSync('./src/' + data.config.theme.src + '/theme.json', 'utf8'))
  }

  runSequence(
    'build-dist',
    'build-bower-components',
    'build-modules',
    'build-opts',
    done
  )
})
