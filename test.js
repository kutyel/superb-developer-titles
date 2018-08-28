import test from 'ava'
import getTitle, { fst, snd } from '.'

import titles from './titles.json'

const dupe = x => (Array.isArray(x) ? x : [x, x])
const dupeTitles = titles.map(dupe)

test('main', t => {
  const first = getTitle()
  t.true(first.length > 0)
  t.not(first, getTitle(), 'should never repeat titles')
})

test('config({female: true})', t => {
  t.not(dupeTitles.map(fst).includes(getTitle({ female: true })))
  t.true(dupeTitles.map(snd).includes(getTitle({ female: true })))
})
