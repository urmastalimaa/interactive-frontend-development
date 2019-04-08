# Asynchronous processes and Redux

## Running the application

```
yarn install
yarn test
yarn start:server
yarn start
```

Open _Async process basics_ subpage.

## Explanation

### Asynchronous processes

Every asynchronous processes has 3 stages: in-flight, succeeded, failed. All of
these must be handled by the user interface.

Asynchronous processes are much more complex than synchronous processes.
Redux helps, but careful though and design is required.

## Server simulation

A toy server has been added to the project. The server has simulated latency
and intermittently fails to retrieve comments to simulate problems that can
occur in real environments. The server accepts comments under POST /comments
with JSON content type. Comments can be fetched using GET /comments.

## New dependencies

* [redux-thunk](https://github.com/gaearon/redux-thunk)

## Asynchronous actions in Redux

[Official documentation](https://redux.js.org/advanced/async-actions).

Thus far we have seen how to dispatch actions when something occurs in Redux.
With asynchronous processes we have to dispatch two times, first when the
process starts and again when the process finishes (successfully or
unsuccessfully). The interim state of a request being in process or _in flight_
needs to be capture by our application.

### Components

Comments can now be fetched from a server. This request is asynchronous.
[CommentList](./components/CommentList.js#L20-36) has been changed to
accomodate three different stages of the request: in-flight, success and error.

Submitting Comments is also asynchronous. Every comment itself can also be
in-flight. [Comment](./components/Comment.js) has been changed accordingly.

### Containers

Containers have been simply changed to pass the inFlight properties to the
components.

### Reducers

[CommentListReducer](./reducers/CommentListReducer.js) has been changed to
handle 6 actions. 3 different possible results for both fetching and posting
comments.

### Actions

There are 6 _simple_, synchronous action creators in the [actions
file](./actions/index.js) representing the different results of the two
asynchronous processes. There are two asynchronous action creators for posting
a comment and fetching all comments in
[CommentServerActions](./actions/CommentServerActions.js). The asynchronous action
creators make use of a [`fetch`
API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) which supports
making requests to remote servers.

Note that the asynchronous action creators do not return a plain-object action,
but a function. Returning a function is not supported natively by Redux, the
capability is added by redux-thunk middleware.


### Redux thunk

Redux thunk middleware supports returning functions (_thunks_) from action
creators.  These functions are executed by the middleware with the `dispatch`
function from store given as a parameter. This means that the _thunk_ function
can call dispatch multiple times or at a later time.

_Thunk_ functions usually call other, synchronous action creators to dispatch actions.

Example:

```js
let timer;
export const fetchComments = () => {
  return dispatch => {
    timer = setTimeout(
      () => dispatch(receivedComments(['comment1', 'comment2'])),
      1000
    )
  }
}
```

## Testing

Components and reducers can be tested as usual.  Testing `fetch` API usage is
achieved by using an optional parameter which defaults to `window.fetch` for
the asynchronous actions creators. Tests simply pass a stub function as the
optional argument.

### Redux mock store

Redux mock store is a very simple mock interface for a Redux store that records
all received actions. This is used for testing the asynchronous action creators.

[_Back_](../../README.md)
