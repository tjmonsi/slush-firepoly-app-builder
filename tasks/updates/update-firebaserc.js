'use strict'

const gulp = require('gulp')
const slugify = require('slugify')
const inquirer = require('inquirer')
const data = require('../../utils/data')
const writer = require('../../utils/writer')
const dest = './'

gulp.task('update-firebaserc', function (done) {
  //Ask
  if (data.app && data.app.firebaseHostId) {
    writer(gulp.src(__dirname + '/../../templates/config/_.firebaserc'), data.app, dest, done)
  } else {
    const prompts = [{
      name: 'firebaseHostId',
      message: 'What is the Firebase Project ID for hosting?',
      default: 'test-site'
    }]
    inquirer.prompt(prompts, (answers) => {
      answers.firebaseHostId = slugify(answers.firebaseHostId).toLowerCase()
      writer(gulp.src(__dirname + '/../../templates/config/_.firebaserc'), answers, dest, done)
    });
  }
})
