const gulp = require('gulp')
const fs = require('fs')
const data = require('../../utils/build')
const rename = require('gulp-rename')
const hb = require('gulp-hb')
const sass = require('node-sass')

gulp.task('build-index', (done) => {
  var result = {
    css: ''
  }
  const config = data.config
  const dest = data.buildDest

  if (config.theme.src.indexOf('modules') === 0 && fs.existsSync('./src/' + config.theme.src + '/root.scss')) {
    result = sass.renderSync({
      file: './src/' + config.theme.src + '/root.scss'
    })
  } else if (config.theme.src.indexOf('bower_components') === 0 && fs.existsSync(config.theme.src + '/root.scss')) {
    result = sass.renderSync({
      file: config.theme.src + '/root.scss'
    })
  }
  const hbStream = hb({
    data: Object.assign({}, config, { build: data.build, version: data.version || '0.0.1', css: result.css.toString('utf8') }),
    helpers: {
      compileRouting: (options) => {
        return JSON.stringify(Object.assign({}, options.data.global.routing, options.data.global.httpCodes))
      },
      compileShellComponents: (options) => {
        return JSON.stringify(Object.assign({}, options.data.global.shellComponents))
      }
    }
  })

  gulp.src(data.utils.index)
    .pipe(hbStream)
    .pipe(rename(function (path) {
      path.extname = '.html'
    }))
    .pipe(gulp.dest(dest))
    .on('end', function () {
      done()
    })
})
