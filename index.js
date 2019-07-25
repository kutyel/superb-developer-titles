const random = require('unique-random-array')
const titles = require('./titles.json')

const fst = ([x, _]) => x
const snd = ([_, x]) => x
const constant = x => () => x
const when = (cond, f) => ifElse(cond, f, x => x)
const ifElse = (cond, t, f) => x => (cond(x) ? t(x) : f(x))
const select = predicate => ifElse(constant(predicate), snd, fst)
const extract = ({ female }) => when(Array.isArray, select(female))

module.exports = (config = {}) => extract(config)(random(titles)())
module.exports.fst = fst
module.exports.snd = snd
