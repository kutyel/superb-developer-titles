import random from 'unique-random-array'
import titles from './titles.json' with { type: 'json' }

export const fst = ([x, _]) => x
export const snd = ([_, x]) => x
const constant = (x) => () => x
const when = (cond, f) => ifElse(cond, f, (x) => x)
const ifElse = (cond, t, f) => (x) => cond(x) ? t(x) : f(x)
const select = (predicate) => ifElse(constant(predicate), snd, fst)
const extract = ({ female }) => when(Array.isArray, select(female))

export default (config = {}) => extract(config)(random(titles)())
