# Unit tests

## Running tests

```
yarn install
yarn test
```

#### Expected behaviour

- 4 passing tests

## Explanation

`yarn test` refers to the `test` script that is defined in
[_package.json_](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_1/package.json#L34).
This is equivalent to running `./node_modules/.bin/jest` from the command
line.

### Jest

[Jest][0] is a JavaScript testing framework. It defines how tests are defined (`describe`,
`beforeEach`, `test`), how they are run and what the output looks like.

_jest_ can be configured in
[jest.config.js](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_1/jest.config.js).

Jest allows you to check that values meet certain conditions.
_expect_ function gives you access to various "matchers" that let you assert something about a value.

### Tests

Check out
[test/PureFunctionsTests.js](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_1/test/PureFunctionsTest.js)
for example tests. It also demonstrates how `beforeEach` can be use to extract
common setup code.

### Continuous testing

Jest can be run in `watch` mode to run tests any time files change. This can
be useful to get feedback faster. The `test:watch` script is defined in
[package.json](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_1/package.json)
for convenience.

### transform-object-rest-spread plugin

ES6 defines spread syntax for arrays `[...myArray, newElem]`, but does not do
so for objects. Object.assign can be used to create a new object with an
additional property (`Object.assign({}, myObj, {newKey: newValue})`, but it is
rather verbose for such a common operation.

[@babel/plugin-proposal-object-rest-spread][2] babel plugin enables `{...myObj, newKey: newValue}` syntax.

[0]: https://jestjs.io/
[2]: https://babeljs.io/docs/plugins/transform-object-rest-spread/
