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
This is equivalent to running `./node_modules/.bin/mocha` from the command
line.

### Mocha

[Mocha][0] is a test-runner. It defines how tests are defined (`describe`,
`beforeEach`, `it`), how they are run and what the output looks like.

_mocha_ is configured in
[.mocharc.js](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_1/.mocharc.js).

It uses _babel_ to transform source files into ES5 that can be interpreted by
NodeJS. NodeJS does not support ES6 modules and we don't want to change our
source files to be able to run tests from the command line. Thus a different
babel configuration is used to both resolve modules and to transpile source
code for a desired NodeJS version.

### Chai

[Chai][1] is an assertion library that allows testing for properties of objects
or functions. _expect_ style assertions are made available through a global
`expect` function in
[_.mocharc.js_](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_1/.mocharc.js).

### Tests

Check out
[test/PureFunctionsTests.js](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_1/test/PureFunctionsTest.js)
for example tests. It also demonstrates how `beforeEach` can be use to extract
common setup code.

### Continuous testing

Mocha can be run in `watch` mode to run tests any time files change. This can
be useful to get feedback faster. The `test:watch` script is defined in
[package.json](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_1/package.json)
for convenience.

### transform-object-rest-spread plugin

ES6 defines spread syntax for arrays `[...myArray, newElem]`, but does not do
so for objects. Object.assign can be used to create a new object with an
additional property (`Object.assign({}, myObj, {newKey: newValue})`, but it is
rather verbose for such a common operation.

[@babel/plugin-proposal-object-rest-spread][2] babel plugin enables `{...myObj, newKey: newValue}` syntax.

[0]: https://mochajs.org/
[1]: http://chaijs.com/
[2]: https://babeljs.io/docs/plugins/transform-object-rest-spread/
