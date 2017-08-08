<<<<<<< Updated upstream
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




=======
const fs = require('fs')

const build = {
  buildDest: './dist/public',
  build: 'dev',
  config: JSON.parse(fs.readFileSync('./src/config/dev.json', 'utf8'))
}

if (build.config.theme.src.indexOf('modules') === 0) {
  build.theme = JSON.parse(fs.readFileSync('./src/' + build.config.theme.src + '/theme.json', 'utf8'))
}

module.exports = build
>>>>>>> Stashed changes
