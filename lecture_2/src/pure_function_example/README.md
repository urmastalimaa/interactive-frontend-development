# Pure function example

## Running the application

```
yarn install && yarn start
```

Open _Pure function example_ subpage.

## New dependencies

* [React prop types
  validation](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/package.json#L43)

## Pure function components

Reac views use immutability to make components easier to understand and to
improve performance. JavaScript classes are not a good representation of an
immutable computation. Therefore React allows components to be defined using
simple functions.

A pure function component receives _props_ as an argument and must
return a React node (JSX).

## Components in the example

* [`App`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/src/pure_function_example/App.js)
  has been reverted to not increase amount of comments at an interval.
* [`Comment`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/src/pure_function_example/Comment.js)
  has been implemented as a _pure function component_.
* [`CommentForm`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/src/pure_function_example/CommentForm.js)
  has been implemented as a _pure function component_.
* [`CommentList`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/src/pure_function_example/CommentList.js)
  has been implemented as a _pure function component_.

## Prop validation

All components were added prop validations. Prop validation help to catch
errors in data propagation early in development. They are a poor-man's version
of typing. _eslint_ rules `"react/prop-types"` checks that all props are
accompanied by validation. Prop validation is removed when building a
production release.

Check out the components or [documentation][prop-types-docs] for examples on how to validate
props.

Note that prop validation linting was turned off for the earlier, props and
state examples.

[prop-types-docs]: https://github.com/facebook/prop-types#usage
