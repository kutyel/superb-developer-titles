'use strict'

const random = require('unique-random-array')
const titles = require('./titles.json')

module.exports = random(titles)
