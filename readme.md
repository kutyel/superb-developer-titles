# superb-developer-titles [![Build Status](https://travis-ci.org/kutyel/superb-developer-titles.svg?branch=master)](https://travis-ci.org/kutyel/superb-developer-titles) [![npm](https://img.shields.io/npm/v/superb-developer-titles.svg)](https://www.npmjs.com/package/superb-developer-titles) [![downloads](https://img.shields.io/npm/dt/superb-developer-titles.svg)](https://www.npmjs.com/package/superb-developer-titles)

> Get random cool/funky/weird developer titles 🦄

Currently ~30 stupid titles. **🙏 PLEASE FEEL FREE TO ADD MORE! 🙏**

The word list itself is just a [JSON file](titles.json) and can be used wherever.

## WHY

Because the community _really_ needs it ¯\\\_(ツ)\_/¯

## Install

```
$ npm install superb-developer-titles
```

## Usage

```js
import getTitle from 'superb-developer-titles'

getTitle()
//=> 'ninja'
```

## API

### default(config = {})

Type: `Function`

Random funky developer title 🎸.

### Config options

#### female (default: `false`)

Type: `Boolean`

If `true` will provide the femenine version of the title (in case it's not unisex)

## Inspiration

- Obviously inspired by [Sindre Sorhus](https://sindresorhus.com)'s amazing [superb](https://github.com/sindresorhus/superb) 😉
- Also the awesome [bullshit-job-titles](https://bullg.it/bullshit-job-titles), made by [@bullgit](https://github.com/bullgit) 🐄

## Related

- [superb](https://github.com/sindresorhus/superb) - Get superb like words
- [superb-cli](https://github.com/sindresorhus/superb-cli) - CLI for this module
- [cat-names](https://github.com/sindresorhus/cat-names) - Get popular cat names
- [dog-names](https://github.com/sindresorhus/dog-names) - Get popular dog names
- [pokemon](https://github.com/sindresorhus/pokemon) - Get Pokémon names
- [superheroes](https://github.com/sindresorhus/superheroes) - Get superhero names
- [supervillains](https://github.com/sindresorhus/supervillains) - Get supervillain names
- [yes-no-words](https://github.com/sindresorhus/yes-no-words) - Get yes/no like words

## License

MIT © [Flavio Corpa](http://flaviocorpa.com)
