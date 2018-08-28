import test from 'ava'
import getTitle, { fst, snd } from '.'

import titles from './titles.json'

const dupe = x => (Array.isArray(x) ? x : [x, x])
const dupeTitles = titles.map(dupe)
const maleTitles = dupeTitles.map(fst)
const femaleTitles = dupeTitles.map(snd)

test('main', t => {
  const first = getTitle()
  t.true(first.length > 0)
  t.not(first, getTitle(), 'should never repeat titles')
})

test('config({female: true})', t => {
  const config = { female: true }
  t.not(maleTitles.includes(getTitle(config)))
  t.true(femaleTitles.includes(getTitle(config)))
})
