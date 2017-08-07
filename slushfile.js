/*
 * slush-polyapp-builder
 * https://github.com/tjmonsi/slush-polyapp-builder
 *
 * Copyright (c) 2017, Toni-Jan Keith Monserrat
 * Licensed under the MIT license.
 */

'use strict'

const fs = require('fs')
const tasks = []
const folders = fs.readdirSync(__dirname + '/tasks')

folders.forEach((folder) => {
  const files = fs.readdirSync(__dirname + '/tasks/' + folder)
  files.forEach((file) => {
    tasks.push(folder + '/' + file)
  })
})

tasks.forEach((task) => {
  require(`${__dirname}/tasks/${task}`)
})





