const gulp = require('gulp')
const gutil = require('gulp-util')
const inquirer = require('inquirer')
const data = require('../../utils/build')

gulp.task('watch-build', (done) => {
  const config = './src/config/' + data.build + '.json'
  const watchers = [{
    files: [data.utils.forceIndex, config],
    tasks: ['build-404']
  }, {
    files: data.utils.coreScripts,
    tasks: ['build-core-scripts']
  }, {
    files: data.utils.srcScripts,
    tasks: ['build-src-scripts']
  }, {
    files: data.utils.databaseRules,
    tasks: ['build-database-rules']
  }, {
    files: config,
    tasks: ['build-firebase-config']
  }, {
    files: config,
    tasks: ['build-firebase-json']
  }, {
    files: config,
    tasks: ['build-manifest']
  }, {
    files: [data.utils.index, config],
    tasks: ['build-index']
  }, {
    files: data.utils.modules.concat([config]),
    tasks: ['build-modules']
  }, {
    files: data.utils.opts,
    tasks: ['build-opts']
  }, {
    files: data.utils.shell,
    tasks: ['build-shell']
  }, {
    files: [config, './src/modules/**', './src/modules/**'],
    tasks: ['build-sass']
  }, {
    files: data.utils.images,
    tasks: ['build-images']
  }]

  watchers.forEach((item) => {
    item.watcher = gulp.watch(item.files, item.tasks)
    item.watcher.on('change', (event) => {
      console.log()
      gutil.log('File ' + event.path + ' was ' + event.type + ', running tasks: ' + item.tasks.join(', '));
    })
  })

  var prompts = [{
    type: 'confirm',
    name: 'moveon',
    message: 'Close this watcher?'
  }]

  const exit = (prompts) => {
    inquirer.prompt(prompts, (answers) => {
      if (!answers.moveon) {
        setTimeout(() => {
          exit(prompts)
        }, 0)
      } else {
        for (var i in watchers) {
          watchers[i].watcher.end()
        }
        done()
      }
    })
  }

  exit(prompts)

  // inquirer.prompt(prompts).process.subscribe(
  //   (answers) => {
  //     console.log(answers)
  //   },
  //   (err) => {
  //     console.error(err)
  //   },
  //   () => {
  //     for (var i in watchers) {
  //       watchers[i].end()
  //     }
  //   }
  // )
  // done()
})

