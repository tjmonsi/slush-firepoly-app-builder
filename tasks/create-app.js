'use strict'

const gulp = require('gulp')
const install = require('gulp-install')
const _ = require('underscore.string')
const inquirer = require('inquirer')
const defaults = require('../utils/defaults')
const format = require('../utils/format')
const data = require('../utils/data')

gulp.task('create-app', function (done) {
  var prompts = [{
    name: 'appName',
    message: 'What is the name of your project?',
    default: defaults.appName
  }, {
    name: 'appDescription',
    message: 'What is the description?'
  }, {
    name: 'appVersion',
    message: 'What is the version of your project?',
    default: '0.1.0'
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
    type: 'confirm',
    name: 'moveon',
    message: 'Continue?'
  }];
    //Ask
  inquirer.prompt(prompts, (answers) => {
    if (!answers.moveon) {
      return done(new Error('Closing the builder as of now'));
    }
    answers.appNameSlug = _.slugify(answers.appName);
    data.app = Object.assign({}, answers)
    done()
  });
});
