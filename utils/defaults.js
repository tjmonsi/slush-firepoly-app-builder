const path = require('path')
const format = require('../utils/format')

module.exports = (() => {
  var workingDirName = path.basename(process.cwd())
  var homeDir, osUserName, configFile, user

  if (process.platform === 'win32') {
    homeDir = process.env.USERPROFILE
    osUserName = process.env.USERNAME || path.basename(homeDir).toLowerCase()
  }
  else {
    homeDir = process.env.HOME || process.env.HOMEPATH;
    osUserName = homeDir && homeDir.split('/').pop() || 'root'
  }

  configFile = path.join(homeDir, '.gitconfig')
  user = {}

  if (require('fs').existsSync(configFile)) {
    user = require('iniparser').parseSync(configFile).user
  }

  return {
    appName: workingDirName,
    userName: osUserName || format(user.name || ''),
    authorName: user.name || '',
    authorEmail: user.email || ''
  }
})()
