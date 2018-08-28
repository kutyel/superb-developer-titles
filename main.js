import random from 'unique-random-array'

import titles from './titles.json'

const identity = x => x
const constant = x => () => x
const pickTitle = random(titles)
const select = female => ifElse(constant(female), snd, fst)
const ifElse = (cond, t, f) => x => (cond(x) ? t(x) : f(x))
const extract = ({ female }) => ifElse(Array.isArray, select(female), identity)

export const fst = ([x, _]) => x
export const snd = ([_, x]) => x
export default (config = {}) => extract(config)(pickTitle())
