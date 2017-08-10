const gulp = require('gulp')
const sass = require('node-sass')
const template = require('gulp-template')
const rename = require('gulp-rename')
const data = require('../../utils/build')

gulp.task('build-sass', (done) => {
  if (data.config.theme.src.indexOf('module') === 0) {
    var config = data.config
    var theme = data.theme
    const dest = data.buildDest + '/' + config.theme.src
    sass.render({
      file: './src/' + config.theme.src + '/theme.scss'
    }, (err, result) => {
      if (err) {
        console.error(err)
        return done()
      }

      console.log('./src/' + config.theme.src + '/theme.scss')

      // const themeTemplate = fs.readFileSync(__dirname + '/core/gulp/templates/_theme.html', 'utf8')

      gulp.src(__dirname + '/../../templates/theme/_theme.html')
      .pipe(template({ themeName: theme.name, style: result.css.toString('utf8'), dependencies: theme.dependencies }))
      .pipe(rename(function (file) {
        if (file.basename[0] === '_') {
          file.basename = theme.name.replace('-theme', '') + '-' + file.basename.slice(1)
        }
      }))
      .pipe(gulp.dest(dest))
      .on('end', function () {
        done()
      })
    })
  } else {
    done()
  }
})
