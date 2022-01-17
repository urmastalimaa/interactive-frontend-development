# React testing

## Running the application

```
yarn install && yarn test
```

## New dependencies

- [@testing-library](https://testing-library.com/docs/) has been added with
  [DOM](https://testing-library.com/docs/dom-testing-library/intro) and
  [React](https://testing-library.com/docs/react-testing-library/intro)
  bindings together with
  [user-event](https://testing-library.com/docs/ecosystem-user-event) helpers
  to [package.json](../package.json#L20-22):

React bindings are used to render React components in the DOM, [Queries from
the core API](https://testing-library.com/docs/queries/about) are used to find
elements in the DOM. User event helpers are used to simulate user actions.

Cleaning the DOM after every test is done automatically for you in
@testing-library/react@9.0.0 or higher.

The default environment in Jest is a Node.js environment.
If you are building a web app, you can use a browser-like environment through jsdom instead.

Note that Jest ships with jsdom.
JSDOM provides a headless DOM into which components can be rendered.

Jest is also used to create stub callbacks which are provided to
React components that are under test. The arguments with which the
callbacks are called and the number of times that callbacks are
called can be verified.

```js
let myFunc = jest.fn();
// ...
expect(myFunc).toHaveBeenCalledTimes(1);
expect(myFunc).toHaveBeenCalledWith({ my: "object" });
```

See [`jest.config.js`](../jest.config.js) and for how _jest_
integration is set up.

## Example tests

Work through the tests in the given order:

- [`AppHeaderTest`](./AppHeaderTest.js) is a simple text-based test
- [`CommentTest`](./CommentTest.js) includes examples of good and over-specific
  tests.
- [`CommentListTest`](./CommentListTest.js) includes examples on how to test
  collection components.
- [`CommentFormTest`](./CommentFormTest.js) includes examples on how to
  simulate user input and test forms. It also shows how @testing-library forces
  writing accessible applications by limiting available queries.
- [`AppTest`](./AppTest.js) tests the whole application logic through the root
  React component.

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
