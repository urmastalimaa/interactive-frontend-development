# Introduction to React

## Running the application

```
yarn install && yarn start
```

Open _Props example_ subpage.

## New dependencies

- [React and bindings for the
  browser](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/package.json#L44-L45)
- [React preset for babel
  (transpilation)](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/package.json#L14)
- [React plugin for eslint
  (linting)](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/package.json#L24)

## Changes to build chain

- Allow importing from node_modules in [rollup configuration](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/rollup.config.js#L25-L32)
- Allow parsing JSX and enable react integration in [babel configuration](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/babel.config.json)
- Allow parsing JSX and enable react plugin in [eslint configuration](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/.eslintrc)

## React views

[React][react] is a library for building views in a declarative and composable
manner.

Parent view components can include a number of child components. Parent
components can pass data to child components through _props_ - short for
properties. The views are defined in standard JavaScript files.

## JSX

[JSX][jsx] is an extension to JavaScript language that allows defining React
components in an HTML-like syntax. Note that JSX will be transpiled down to
JavaScript before it is evaluated in the browser. If one so wishes,
[_hyperscript_][hyperscript] can be used to define the views instead of JSX.
Also, [standard JavaScript can obviously be used instead of
JSX][react-elements].

When using JSX, the build chain must be configured to use JSX transforms
([learn more][new-jsx-transform]) as [is done for these
examples](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/babel.config.json#L12),
or alternatively `React` must be imported so that JSX can be transpiled to
`React.createElement` expressions.

```
<MyComponent foo="bar"/>
// would transpile to
React.createElement(MyComponent, {foo: "bar"})
```

## View classes

React views can be defined as ES6 classes. When doing so, they must inherit
from the `Component` class that is exported from React. The `render` function
of the class must return a React node.

## Components in the example

- [`App`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/src/props_example/App.js)
  contains all the other components.
- [`CommentList`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/src/props_example/CommentList.js)
  contains two `Comments`.
- [`CommentForm`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/src/props_example/CommentForm.js)
  has a button that simulates form submission when clicked.
- [`Comment`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/src/props_example/Comment.js)
  renders a Comment, author header and text in a `div`.

## Props and rendering

Note that all _props_ are immutable. Whenever something needs to change, a
whole new render cycle with new _props_ objects is performed.

[react]: https://reactjs.org/
[jsx]: https://reactjs.org/docs/introducing-jsx.html
[hyperscript]: https://github.com/hyperhype/hyperscript
[react-elements]: https://reactjs.org/docs/introducing-jsx.html#jsx-represents-objects
[new-jsx-transform]: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
