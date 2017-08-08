const fs = require('fs')

var config = {}
var theme = {}

if (fs.existsSync('./src/config/dev.json')) {
  config = JSON.parse(fs.readFileSync('./src/config/dev.json', 'utf8'))
  if (config.theme.src.indexOf('modules') === 0) {
    theme = JSON.parse(fs.readFileSync('./src/' + config.theme.src + '/theme.json', 'utf8'))
  }
} else {
  config = JSON.parse(fs.readFileSync(__dirname + '/templates/base/config/config.sample.json'))
  theme = JSON.parse(fs.readFileSync(__dirname + '/templates/base/theme/theme.sample.json'))
}

module.exports = {
  buildDest: './dist/public',
  build: 'dev',
  config,
  theme
}




