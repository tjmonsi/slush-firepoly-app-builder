const gulp = require('gulp')
const fs = require('fs')
const install = require('gulp-install')
const modules = ['./core/modules', './src/modules']

gulp.task('install-deps', (done) => {
  const installers = ['./bower.json', './package.json', './functions/package.json']

  for (var i in modules) {
    var core = modules[i]
    if (fs.existsSync(core)) {
      var coreModules = fs.readdirSync(core)
      for (var j in coreModules) {
        if (fs.existsSync(`${core}/${coreModules[j]}/bower.json`)) {
          if (!fs.existsSync(`${core}/${coreModules[j]}/.bowerrc`)) {
            fs.writeFileSync(`${core}/${coreModules[j]}/.bowerrc`, JSON.stringify({directory: "../../../bower_components/", timeout: 120000}), 'utf8')
          }
          installers.push(`${core}/${coreModules[j]}/bower.json`)
        }
      }
    }
  }

  gulp.src(installers)
  .pipe(install({
    bower: {allowRoot: true}
  }))
  .on('end', function () {
    done()
  })
})
