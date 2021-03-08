# React testing

## Running the application

```
yarn install && yarn test
```

## New dependencies

* [enzyme](https://github.com/airbnb/enzyme) has been added to
  [package.json](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/package.json#L20).
* enzyme adapter to React version 16 has been added to
  [package.json](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/package.json#L21).
* [chai-enzyme](https://github.com/producthunt/chai-enzyme) - enzyme
  integration with chai - has been added to
  [package.json](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/package.json#L18).

_enzyme_ is used to test React components. _chai-enzyme_ is used
to provide bindings to _chai_ that allow test code to be
descriptive.

* [sinon](http://sinonjs.org/) has been added to
  [package.json](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/package.json#L27).
* [sinon-chai](https://github.com/domenic/sinon-chai) has been added to
  [package.json](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/package.json#L28).

_sinon_ is used to create stub callbacks which are provided to
React components that are under test. The arguments with which the
callbacks are called and the number of times that callbacks are
called can be verified. _sinon-chai_ is used to provide bindings
to _chai_ that allow test code to be descriptive.

```js
let myFunc = sinon.stub();
// ...
expect(myFunc).to.have.been.calledOnce;
expect(myFunc).to.have.been.calledWith(sinon.match.number, {my: 'object'});
```

See
[`TestHelper.js`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/test/TestHelper.js)
for how _sinon_ and _enzyme_ integration is set up.

## Example tests

* [`AppHeaderTest`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/test/AppHeaderTest.js)
  is a simple smoke test
* [`CommentTest`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/test/CommentTest.js)
  includes examples of good and bad tests for presentational components.
* [`CommentListTest`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/test/CommentListTest.js)
  includes examples on how to test collection-like components.
* [`CommentFormTest`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/test/CommentFormTest.js)
  includes examples on how to test form components.
* [`AppTest`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/test/AppTest.js)
  leverages shallow rendering to test logic inside container components.

## Debugging tests in NodeJS

Put a `debugger` keyword to the test you want to debug. Alternatively set a
breackpoint using Chrome Dev Tools later.

In another terminal window, run

```
yarn test:debug
```

Open `chrome://inspect` in Chrome browser and select the remote target 
that matches your project. Click `inspect`.

Chrome console opens and execution stops on the first line of the test suite.
Set breakpoints or continue if there are `debugger` statements in your tests.
Debug as if the test was executing in a normal browser context.

Close the debugger to allow `test:debug` process to exit.
