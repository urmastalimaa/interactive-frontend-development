# Introduction to React

## Running the application

```
yarn install && yarn start
```

Open _Props example_ subpage.

## New dependencies

* [React and bindings for the
  browser](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/package.json#L39-L41)
* [React preset for babel
  (transpilation)](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/package.json#L13)
* [React plugin for eslint
  (linting)](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/package.json#L22)

## React views

[React][0] is a library for building views in a declarative and composable
manner. 

Parent view components can include a number of child components. Parent
components can pass data to child components through _props_ - short for
properties. The views are defined in standard JavaScript files.

## JSX

[JSX][1] is an extension to JavaScript language that allows defining React
components in an HTML-like syntax. Note that JSX will be transpiled down to
JavaScript before it is evaluated in the browser. If one so wishes,
[_hyperscript_][2] can be used to define the views instead of JSX. Also,
[standard JavaScript can obviously be used instead of JSX][3].

When using JSX, `React` must be imported as JSX is transpiled down to
`React.createElement` expressions.

## View classes

React views can be defined as ES6 classes. When doing so, they must inherit
from the `Component` class that is exported from React. The `render` function
of the class must return a React node.

## Components in the example

* [`App`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/src/props_example/App.js)
  contains all the other components.
* [`CommentList`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/src/props_example/CommentList.js)
  contains two `Comments`.
* [`CommentForm`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/src/props_example/CommentForm.js)
  has a button that simulates form submission when clicked.
* [`Comment`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/src/props_example/Comment.js)
  renders a Comment, author header and text in a `div`.

## Props and rendering

Note that all _props_ are immutable. Whenever something needs to change, a
whole new render cycle with new _props_ objects is performed.

[0]: https://reactjs.org/
[1]: https://reactjs.org/docs/introducing-jsx.html
[2]: https://github.com/hyperhype/hyperscript
[3]: https://reactjs.org/docs/introducing-jsx.html#jsx-represents-objects
