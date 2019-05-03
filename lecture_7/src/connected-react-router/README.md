# Connected React Router Example

## Running the application

```
yarn install
yarn test
yarn start:server
yarn start
```

## Explanation

_router-basics_ example is continued from.

### New Dependencies

* [connected-react-router](https://github.com/supasate/connected-react-router)

### Setup changes

In application
[setup](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_7/src/connected-react-router/ConnectedReactRouterExample.js)
the `history` package is used to create an abstraction over DOM History API.

React Router could be used without `connected-react-router`, but then the
application would have uncaptured internal state. While this is not a big
problem and React Router developers [suggest not capturing router state in
Redux][router-redux-docs] it is still useful in the context of this course to
have time-travelling capabilities working across route changes and to capture
the complete application state without exceptions.

#### Middleware

A middleware `routerMiddleware` is imported from `connected-react-router` in
application setup which sends history change actions to the DOM History API
whenever they are dispatched to the store.

### Reducer

[The root
reducer](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_7/src/connected-react-router/reducers/index.js)
is changed so that it accepts the history object as an argument and then
returns an actual reducer that has a state slice "router".  This slice will
host the router-specific state.

### Containers

[App
container](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_7/src/connected-react-router/containers/App.js)
has been changed to use `ConnectedRouter` instead of `Router` to read the
current route from Redux store.

ConnectedRouter listens for history changes using the DOM History API and
triggers actions as necessary.

[CommentFormContainer](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_7/src/connected-react-router/containers/CommentFormContainer.js)
has been changed to use `push` actions from `connected-react-router` instead of
pushing to the history API directly.

### Result

All these changes to

* pushing actions
* reducing state
* managing middleware

ensure that the routing state is kept in sync with state in Redux store.

[router-redux-docs]: https://reacttraining.com/react-router/web/guides/redux-integration
