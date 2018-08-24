'use strict'

const random = require('unique-random-array')
const titles = require('./titles.json')

const fst = ([x, _]) => x
const snd = ([_, x]) => x
const compose = (f, g) => x => f(g(x))
const dupe = x => (Array.isArray(x) ? x : [x, x])
const ifElse = (cond, t, f) => x => (cond ? t(x) : f(x))

module.exports = (config = {}) =>
  random(
    titles.map(
      compose(
        ifElse(config.female, snd, fst),
        dupe
      )
    )
  )()
