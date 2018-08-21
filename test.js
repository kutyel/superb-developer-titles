import test from 'ava'
import getTitle from '.'

test('main', t => {
	const first = getTitle()
	t.true(first.length > 0)
	t.not(first, getTitle(), 'should never repeat titles')
})
