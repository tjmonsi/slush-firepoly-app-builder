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
  theme,
  utils: {
    shell: './core/shell/*.html',
    images: './src/images/**',
    opts: ['./core/opts/**/*.html', './core/opts/*.html', './src/opts/**/*.html', './src/opts/*.html'],
    modules: ['./core/modules/**/*.*', './core/modules/*.*', './src/modules/**/*.*', './src/modules/*.*'],
    index: './core/root/**.hbs',
    forceIndex: './core/root/index.hbs',
    bower: './bower_components/**',
    coreScripts: ['./core/scripts/index.js'],
    srcScripts: ['./src/scripts/index.js'],
    databaseRules: './src/rules/database'
  }
}




