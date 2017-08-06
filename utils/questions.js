const defaults = require('./defaults')
const _ = require('underscore.string')

module.exports = [{
  name: 'appName',
  message: 'What is the name of your project?',
  default: defaults.appName
}, {
  name: 'appDescription',
  message: 'What is the description?'
}, {
  name: 'appVersion',
  message: 'What is the version of your project?',
  default: '0.0.1'
}, {
  name: 'appBaseHref',
  message: 'What is the base href of your project?',
  default: '/'
}, {
  name: 'appGoogleAnalytics',
  message: 'What is the Google Analytics ID of your project?',
}, {
  name: 'appFirebaseVersion',
  message: 'What is the Firebase JS SDK Version of your project?',
  default: '4.2.0'
}, {
  name: 'appSentryUrl',
  message: 'What is the Sentry JS URL (for capturing error messages) of your project?',
}, {
  name: 'authorName',
  message: 'What is the author name?',
  default: defaults.authorName
}, {
  name: 'authorEmail',
  message: 'What is the author email?',
  default: defaults.authorEmail
}, {
  name: 'userName',
  message: 'What is the github username?',
  default: defaults.userName
}, {
  name: 'appRepo',
  message: 'What is the repo?',
  default: `git://github.com/${defaults.userName}/${_.slugify(defaults.appName)}.git`
}, {
  type: 'confirm',
  name: 'moveon',
  message: 'Continue?'
}]
