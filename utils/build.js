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
