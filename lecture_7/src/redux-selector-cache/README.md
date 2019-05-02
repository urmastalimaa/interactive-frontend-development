# Optimization of Redux selector functions

## Running the application

```
yarn install
yarn test
yarn start:server
yarn start
```

## Explanation

* [Computing derived data](https://redux.js.org/recipes/computing-derived-data)

_connected_react_router_ example is continued from.

### New Dependencies

* [reselect](https://github.com/reactjs/reselect)

### Redux selector functions and `shouldComponentUpdate`

Components created by using `connect` from react-redux implement
`shouldComponentUpdate` by comparing previous and new parameters using reference
equality.

Selector functions create new objects from objects in state which causes
reference equality check to always return false.

Hand-writing `shouldComponentUpdate` is tedious and error-prone.

`reselect` provides a way to create and compose memoized selector functions.


### Setup changes

[Application
setup](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_7/src/redux-selector-cache/ReduxSelectorCacheExample.js)
dispatches a mock-action `{type: 'foo'}` every second to simulate arbitrary
changes to the store.

### Components

[CommentList](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_7/src/redux-selector-cache/components/CommentList.js)
has been changed to count render calls and output the count to console.

### Containers

[CommentListContainer](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_7/src/redux-selector-cache/containers/CommentListContainer.js)
has been changed to use `createSelector` function from `reselect` to keep the
final object the same in case the source objects remain unchanged.

Why does the `memoize` solution not have the desired effect?
