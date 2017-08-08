const gulp = require('gulp')
const gutil = require('gulp-util')
const options = require('gulp-options')
const slugify = require('slugify')
const fs = require('fs')
const data = require('../../utils/build')
const runSequence = require('run-sequence')

gulp.task('build', (done) => {
  gutil.log(gutil.colors.magenta('Starting now'))

  if (options.has('config')) {
    data.build = options.get('config')
  } else {
    data.build = 'dev'
  }

  if (options.has('production')) {
    data.build = 'prod'
  }

  if (data.build === 'dev') {
    data.buildDest = './dist/public'
  } else if (data.build === 'prod') {
    data.buildDest = './dist/prod_temp'
  } else {
    data.buildDest = './dist/' + slugify(data.build).toLowerCase()
  }

  if (fs.existsSync('./src/config/' + data.build + '.json')) {
    data.config = JSON.parse(fs.readFileSync('./src/config/' + data.build + '.json', 'utf8'))
  } else {
    gutil.log(gutil.colors.magenta('./src/config/' + data.build + '.json doesn\'t exists, using dev.json'))
    data.config = JSON.parse(fs.readFileSync('./src/config/dev.json', 'utf8'))
    fs.writeFileSync('./src/config/' + data.build + '.json', JSON.stringify(data.config), 'utf8')
  }

  if (data.config.theme.src.indexOf('modules') === 0 && fs.existsSync('./src/' + data.config.theme.src + '/theme.json')) {
    data.theme = JSON.parse(fs.readFileSync('./src/' + data.config.theme.src + '/theme.json', 'utf8'))
  }

  return runSequence(
    'build-dist',
    'build-bower-components',
    'build-modules',
    'build-opts',
    'build-firebase-config',
    'build-shell',
    'build-index',
    'build-404',
    'build-firebase-json',
    done
  )
})
