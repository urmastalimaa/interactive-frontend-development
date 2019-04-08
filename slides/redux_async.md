name: redux_async
class: middle, center

# Interactive Front-end Development

## Urmas Talimaa
## _Glia Inc (formerly SaleMove)_

???

<!-- Dummy notes to check presenter display  -->

Presenter display slide notes

Pre-lecture checklist

* Switching between mirroring and non-mirroring works
* Unrelated tabs and windows closed or minimized
* Do not disturb mode **ON**
* Slides cloned, one has presenters mode on
* Dependencies installed and scripts are working for lecture example code
* Terminal(s) open with code and window to run scripts

---

# Lecture 5

* Design recap
* Asynchronous processes
* Middleware (in Redux)

---

# Feedback

???

Give feedback for previous homework if any

---

# Design recap

???

Following slides re-iterate what are main Redux parts and their
semantics

---

# Redux recap - Actions

* Describe _what happened_ **not** _what to do_
  * Especially important in asynchronous processes
  * Refer to an Actor, User or External Service
* Simple data structure
* Human-readable properties
  * Not `fs`, `fVal`, `m_0`
* Describe the history of the application
  * Should read like prose

---

# Redux recap - Reducers

* Clearly define new state based on previous state and an action
* Pure functions. Always!
* Multiple reducers can handle the same action! 
  * e.g _user disconnected from server_ action can be used to both set connection state and clear a list of other online users


* Key to keeping reducers simple is to keep state minimal
* Don’t be afraid to recalculate, there are better ways to optimize than to store intermediate values in state.

---

# Recipe for adding new functionality

* Design state object
* Test and implement Redux actions and reducers
* Test and implement React views
* Connect React views to state 
  * via parent props or 
  * via Redux _connect_
* Validate desired functionality
* Refactor

???

This and next slides give some general advice about creating applications with React/Redux

---

# Design choices

* Container components are **not reusable**, tied to specific state
* Containers components reduce boilerplate of passing props through multiple layers
* In general it is best to minimize nr of Containers
* Simply pass down props between components that are concerned with the same facet of the application.

---

# Helpful libraries for functional programming

* Avoid writing arbitrary loops and object processors
* Use map, filter, reduce for clear and less-error-prone code
* Some basic functions are available natively
* Can add a lightweight library that does not bloat your application

---

# Helpful libraries for functional programming

Helper functions, function builders.

* [Underscore](https://underscorejs.org/)
* [Lodash](https://lodash.com/)
* [Ramda](https://ramdajs.com/)

--

Immutable collections (with functions to create new ones)

* [Immutable JS](https://facebook.github.io/immutable-js/)

---

# Helpful libraries for functional programming

I recommend [Ramda](https://ramdajs.com/)

* All functions are immutable and curried (supporting partial application)
* Great function composition
* Provides lenses, transducers and everything else
* Great [documentation](https://ramdajs.com/docs/)
* For more reasons: [Hey Underscore, You're Doing It Wrong!](https://www.youtube.com/watch?v=m3svKOdZijA)

---

# Interacting with the outside world

???

This will start with the main content of the lecture

--

A real-world application may interact with

* a back-end server through HTTP requests,
* a back-end server or other users through a WebSocket,
* internal timers which fire asynchronously

All of these occur asynchronously - at a later, unknown time

---

# Action creators?

How to manage asynchronous processes?

* Actions are simple data structures
* Action creators must return an action
* Cannot manage asynchronous processes in action creators
* Reducers are also pure functions, cannot manage asynchronous processes there neither

???

This slide details what places are **not** suitable

--

* Cannot create useful applications?


???

We want to constrain ourselves and keep most of our code _pure_ to create a
maintainable application

---

# Asynchronous action creators

If there is no existing functionality to support our use case, let's create it

* Redux allows _middleware functions_, which will be executed before actions are dispatched to reducers
* We’ll further investigate _middleware functions_ later
* [Redux Thunk Middleware](https://github.com/gaearon/redux-thunk)
* [Redux official guide is again, great](https://redux.js.org/docs/advanced/AsyncActions)

---

# Redux thunk Middleware

```js
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/index';

const store = createStore(
  myReducer,
  applyMiddleware(thunkMiddleware)
);
```

---

# Asynchronous action creator

... is an action creator that returns a **function** using `dispatch` instead of a simple data structure


The _redux-thunk_ middleware will 

* call the function and pass it `dispatch` and `getState` store functions
* not pass the _function_-action to reducers

---

# Asynchronous action creator

```js
const fetchPost = () => {
  return (dispatch, getState) => {
    setTimeout(
      () => dispatch({
        type: POST_FETCHED,
        payload: {author: 'author', text: 'text'}
      }),
      1000
    );
  };
};
```

---

# Asynchronous action creator

* This simple addition allows creating functions that perform arbitrary asynchronous operations
* All the side-effects are contained within the action creator
* Careful design is necessary to avoid surprises!

---

# Asynchronous action creators

Usually **at least three actions** per asynchronous operation are necessary:

An action informing the reducers that

* a request began,
* the request finished successfully,
* the request failed.

---

# Asynchronous action creators

```js
const fetchPost = () => {
  let requestCount = 0;

  return (dispatch, getState) => {
    // Action creator can keep internal state
    requestCount = requestCount + 1; 

    // Request began
    dispatch({type: POST_FETCH_STARTED); 

    setTimeout(
      () => 
        // Request finished
        dispatch({type: POST_FETCHED, payload: {author: 'author', text: 'text'}),
      1000
    );
  };
};
```

---

# Async process basics using fetch

[Code example](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_5/src/async_process_basics/README.md)

---

# Middlewares + Redux dev tools

Redux dev tools integration must be [slightly
changed](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_5/src/async_process_basics/AsyncProcessBasicsExample.js#L13-L20)
when using middlewares.


See [https://redux.js.org/api-reference/applymiddleware#tips](https://redux.js.org/api-reference/applymiddleware#tips).

---

# Testing asynchronous code

Generally difficult and cumbersome.

---

# Testing asynchronous code

Option #1

Run tests asynchronously by using testing framework capabilities
  * [https://mochajs.org/#asynchronous-code](https://mochajs.org/#asynchronous-code)
  * Actual timers used, makes tests slow

---

# Testing asynchronous code

Option #2

Use fake timers
  * [https://sinonjs.org/releases/v4.4.2/fake-timers/](https://sinonjs.org/releases/v4.4.2/fake-timers/)
  * Mock out global clock (`setTimeout`, `setInterval`), tick it manually
  * Can strongly couple clock ticking in the test to the implementation

---

# Testing asynchronous code

Option #3

Use abstractions like `fetch` and mock it out

---

# Fetch

Requests to remote servers can be done using the [Fetch
API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).


Calling the fetch function returns a
[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
which represents the _eventual_ response from the remote server. Remember that
any request can time out or fail, causing the Promise to be rejected.

---

# Asynchronous code using fetch

[Code example](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_5/src/async_process_basics/README.md)

---

# Redux Middleware

???

This slide will go to the second main part of the lecture - middleware and its purpose in Redux

---

# Middleware

From [https://redux.js.org/docs/advanced/Middleware](https://redux.js.org/docs/advanced/Middleware):

For many server-side libraries _middleware_ is


_...some code you can put between the framework receiving a request, and the framework generating a response_


For Redux _middleware_ is


_...a third-party extension point between dispatching an action, and the moment it reaches the reducer_

---

# Redux Middleware chain

.full-image[![Redux middleware chain](assets/redux-middleware-chain.jpg)]

.footer[_from [https://www.codementor.io/reactjs/tutorial/intro-to-react-redux-pros](https://www.codementor.io/reactjs/tutorial/intro-to-react-redux-pros)_]

---

# It’s functions all the way down

.full-image[![Dog sniff chain](assets/dog-sniff-chain.jpg)]

---

# Redux Middleware

Just like action creators, middleware can be the _dirty_ place where you put your side-effecting, impure code

* Logging
* Error reporting
* Asynchronous process managers
* Creating and managing HTTP requests
* ...

---

# Redux Middleware

```js`
export const myMiddleware = (store) => {
  // Initialization code if any goes here
  // can any point use store to get state and dispatch actions

  return (next) => {
    // middlewares will be called in the order as they are defined
    return (action) => {
      // Action (and it's type) can be inspected

      // `next` can be called with an action 
      // if an action should be passed 
      // to the next middleware (and eventually reducer)
    };
  };
};
```

???

Overview of middleware structure

---

# Redux Middleware

If no initialization code is necessary, shorthand can be used:

```js
export const myMiddleware = (store) => (next) => (action) => {
  // Code that's executed for each action
};
```

---

# Redux Middleware

```js
export const myMiddleware = (store) => (next) => (action) => { };
```

Middleware is a **curried function** of three parameters.

Curried functions accept arguments one-by-one.


It seems that it takes three arguments, but it actually is:
* a function that takes one argument
  * and returns a function that takes one argument
      * and returns a function that takes one argument

---

.full-image[![Functional programming aliens](assets/functional-programming-aliens.jpg)]

---

# Middleware

The middleware function needs to be curried, because the whole middleware chain
together with the reducers will be set up when creating the store.

The `store` and `next` arguments will be provided immediately, the `action`
argument can obviously only provided when an action is dispatched.

---

# Middleware

You can write one yourself! 


Redux is not that complicated


Function composition all the way down

[https://redux.js.org/docs/advanced/Middleware.html](https://redux.js.org/docs/advanced/Middleware.html)

---

# Asynchronous fetching from middleware

[Code example](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_5/src/async_process_with_middleware/README.md)

---

# Middleware testing

Pass in mocked `store`, `next`, `action` as parameters and assert behaviour

* `store` is an object with two methods dispatch and getState, can use _redux-mock-store_
* `next` is a function which updates store state when called with an action and returns the action (just a stub function!)
* `action` is a redux/flux action

???

Generally test it like you would test any other function

---

# Homework

* [Requirements](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/homework/thump/exercise5.md)
* **Deadline 28/04/2017 23:59**
* Submit zipped file to [https://courses.cs.ut.ee/2019/react/Main/Submit](https://courses.cs.ut.ee/2019/react/Main/Submit)
* Make sure you follow [Redux core principles](https://redux.js.org/docs/introduction/ThreePrinciples)
* Make sure to handle **all states of asynchronous requests**: in-flight, failed and succeeded
* Don’t forget **tests**, they will form a part of the grade
* **Only submit what is yours**
