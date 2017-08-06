/*
 * slush-polyapp-builder
 * https://github.com/tjmonsi/slush-polyapp-builder
 *
 * Copyright (c) 2017, Toni-Jan Keith Monserrat
 * Licensed under the MIT license.
 */

'use strict'

const fs = require('fs')
const tasks = fs.readdirSync(__dirname + '/tasks')

tasks.forEach((task) => {
  require(`${__dirname}/tasks/${task}`)
})





