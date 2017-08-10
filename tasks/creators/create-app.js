'use strict'

const gulp = require('gulp')
const slugify = require('slugify')
const camel = require('camelcase')
const uppercamel = require('uppercamelcase')
const inquirer = require('inquirer')
const data = require('../../utils/data')
const prompts = require('../../utils/questions')

gulp.task('create-app', function (done) {
    //Ask
  inquirer.prompt(prompts, (answers) => {
    if (!answers.moveon) {
      return done(new Error('Closing the builder as of now'))
    }
    answers.appNameSlug = slugify(answers.appName).toLowerCase()
    answers.appNameCamel = camel(answers.appName)
    answers.appNameUpperCamel = uppercamel(answers.appName)
    answers.firebaseHostId = slugify(answers.firebaseHostId).toLowerCase()

    data.app = Object.assign({}, answers)
    done()
  });
});
