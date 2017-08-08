'use strict'

const gulp = require('gulp')
const install = require('gulp-install')
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
    answers.appNameCamel = camel(answer.appName)
    answers.appNameUpperCamel = uppercamel(answers.appName)

    data.app = Object.assign({}, answers)
    done()
  });
});
