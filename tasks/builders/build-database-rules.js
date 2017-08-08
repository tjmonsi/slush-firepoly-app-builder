const gulp = require('gulp')
const data = require('../../utils/build')
const fs = require('fs')

gulp.task('build-database-rules', (done) => {
  const config = data.config

  const database = fs.existsSync('database.rules.json') ? fs.readFileSync('database.rules.json', 'utf8') : {
    rules: {}
  }

  const rules = JSON.parse(fs.readFileSync('./src/rules/database.json', 'utf8'))

  database.rules[data.config.app.database] = rules

  fs.writeFileSync('database.rules.json', JSON.stringify(database, null, 2), 'utf8')
  done()
})
