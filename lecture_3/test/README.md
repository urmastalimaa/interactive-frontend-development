# React testing

## Running the application

```
yarn install && yarn test
```

## New dependencies

* [@testing-library](https://testing-library.com/docs/) has been added with
  [DOM](https://testing-library.com/docs/dom-testing-library/intro) and
  [React](https://testing-library.com/docs/react-testing-library/intro)
  bindings together with
  [user-event](https://testing-library.com/docs/ecosystem-user-event) helpers
  to [package.json](../package.json#L20-22):

React bindings are used to render React components in the DOM, [Queries from
the core API](https://testing-library.com/docs/queries/about) are used to find
elements in the DOM. User event helpers are used to simulate user actions.
[test/Cleanup.js](./Cleanup.js) provides a Mocha hook to
[.mocharc.js](../.mocharc.js) which cleans the DOM after every test.

* [jsdom](https://github.com/jsdom/jsdom) has been added to [package.json](../package.json#L29)
  * **IMPORTANT** Use jsdom version 16.4.0 until https://github.com/jsdom/jsdom/issues/3132 is resolved, 16.5.0 is broken
* `global-jsdom` has been added to [package.json](../package.json#L28)

JSDOM provides a headless DOM into which components can be rendered.
`global-jsdom` is used to [register browser-like globals in tests](../.mocharc.js#L14)

* [sinon](http://sinonjs.org/) has been added to
  [package.json](../package.json#L37).
* [sinon-chai](https://github.com/domenic/sinon-chai) has been added to
  [package.json](../package.json#L38).

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

See [`.mocharc.js.js`](../.mocharc.js) and
[`test/UseSinonChai.js`](./UseSinonChai.js) for how _sinon_ and _chai_
integration is set up.

## Example tests

Work through the tests in the given order:

* [`AppHeaderTest`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/test/AppHeaderTest.js)
  is a simple text-based test
* [`CommentTest`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/test/CommentTest.js)
  includes examples of good and over-specific tests.
* [`CommentListTest`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/test/CommentListTest.js)
  includes examples on how to test collection components.
* [`CommentFormTest`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/test/CommentFormTest.js)
  includes examples on how to simulate user input and test forms. It also shows
  how @testing-library forces writing accessible applications by limiting available queries.
* [`AppTest`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/test/AppTest.js)
  tests the whole application logic through the root React component.

## Debugging tests in NodeJS

Put a `debugger` keyword to the test you want to debug. Alternatively set a
breakpoint using Chrome Dev Tools later.

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

**Note about .mocharc.js** Arbitrary code from .mocharc.js is **not executed**
when running tests using `--inspect-brk`. This is why test setup was changed to
only use Root hooks.
