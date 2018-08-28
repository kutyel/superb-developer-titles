const random = require('unique-random-array')
const titles = require('./titles.json')

const identity = x => x
const fst = ([x, _]) => x
const snd = ([_, x]) => x
const constant = x => () => x
const pickTitle = random(titles)
const ifElse = (cond, t, f) => x => (cond(x) ? t(x) : f(x))
const select = predicate => ifElse(constant(predicate), snd, fst)
const extract = ({ female }) => ifElse(Array.isArray, select(female), identity)

module.exports = (config = {}) => extract(config)(pickTitle())
module.exports.fst = fst
module.exports.snd = snd
