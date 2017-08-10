const gulp = require('gulp')
const data = require('../../utils/build')
const fs = require('fs')

gulp.task('build-firebase-json', (done) => {
  const config = data.config

  const firebase = {
    database: {
      rules: 'database.rules.json'
    },
    hosting: config.hosting
  }

  for (var j in firebase.hosting.rewrites) {
    if (firebase.hosting.rewrites[j].source === '**') {
      firebase.hosting.rewrites.splice(j, 1)
    }
  }

  for (var i in config.routing) {
    firebase.hosting.rewrites.push({
      source: i.split('/').map(path => (path.indexOf(':') === 0 ? '**' : path)).join('/'),
      destination: '/index.html'
    })
  }

  firebase.hosting.public = data.build === 'prod' ? 'dist/prod_temp/build' : data.buildDest
  fs.writeFileSync('firebase.json', JSON.stringify(firebase, null, 2), 'utf8')
  done()
})
