const gulp = require('gulp')
const data = require('../../utils/build')
const fs = require('fs')

gulp.task('build-database-rules', (done) => {
  const config = data.config

  const database = fs.existsSync('database.rules.json') ? JSON.parse(fs.readFileSync('database.rules.json', 'utf8')) : {
    rules: {}
  }
  var rules = {}
  if (fs.existsSync('./src/rules/database.' + data.build + '.json')) {
    rules = JSON.parse(fs.readFileSync('./src/rules/database.' + data.build + '.json', 'utf8'))
  } else {
    rules = JSON.parse(fs.readFileSync('./src/rules/database.dev.json', 'utf8'))
  }

  if (rules.rules) {
    rules = rules.rules
  }

  if (rules[data.config.app.database]) {
    var obj = {}
    obj[data.config.app.database] = undefined
    rules = Object.assign({}, obj, rules[data.config.app.database])
  }

  database.rules[data.config.app.database] = rules

  fs.writeFileSync('database.rules.json', JSON.stringify(database, null, 2), 'utf8')
  done()
})
