# Lecture 5

Lecture 5 explores asynchronous actions and more specifically, interactions
with a remote server. Focus is on testability and maintainability and a few new
tools from React's arsenal are put into use.

The core ideas of reducer de-composition and middlewares borrow heavily from
[Redux](http://redux.js.org/).

## Study goals

## Asynchronous actions

- What three actions must be dispatched during an asynchronous process?
- What is a Promise in JavaScript?
- How to avoid leaking Promise handlers when the component is unmounted?
- When to use local state and when to incorporate state in reducer state?

See [CommentListWithServer
`server.getComments`](./src/cross_cutting_concerns/components/CommentListWithServer.js)
and [CommentFormWithServer
`server.postComment`](./src/cross_cutting_concerns/components/CommentFormWithServer.js)
for answers.

See how a component using asynchronous actions can be tested in
[CommentFormWithServerTest](./test/CommentFormWithServerTest.js).

## `fetch` API

- What can the `fetch` API be used for?
- What does `fetch` return?
- What is an "async" function JavaScript?
- What does the `await` keyword do in JavaScript?

See [Server API](./src/cross_cutting_concerns/ServerAPI.js) for answers.

### Server simulation

A toy server has been added to the project. The server has simulated latency
and intermittently fails to retrieve comments to simulate problems that can
occur in real environments. The server accepts comments under POST /comments
with JSON content type. Comments can be fetched using GET /comments. Comments
can be deleted using DELETE /comments/:comment_id.

## React context

- What is a "context" in React
- When to use a "context" and when to pass props?

## Reducer composition

- How can pure functions be de-composed?
- What to pay attention to when de-composing reducers?

See [Comments.js](./src/cross_cutting_concerns/Comments.js).

## Custom react hooks

- When and why to use custom React hooks?
- How to name custom React hooks?

See
[UseServerBasedOnParams](./src/cross_cutting_concerns/hooks/UseServerBasedOnParams.js)
for answers.

## Dispatch middleware

- What can be done from a dispatch middleware?
- What is the interface of a dispatch middleware (a la Redux)?

See
[UseReducerWithMiddleware](./src/cross_cutting_concerns/hooks/UseReducerWithMiddleware.js),
[App.js](./src/cross_cutting_concerns/components/App.js) and
[LoggingMiddleware](./src/cross_cutting_concerns/LoggingMiddleware.js) for
answers.
