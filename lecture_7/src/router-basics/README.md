# Routing and history in React

## Running the application

```
yarn install
yarn test
yarn start:server
yarn start
```

## Explanation

* [DOM History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)

_async_process_with_middleware_ example is continued from.

### New Dependencies

* [history](https://www.npmjs.com/package/history)
* [react-router](https://github.com/ReactTraining/react-router)
* [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)

### React Router

React Router abstracts [DOM history
API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) and provides
declarative links and routing.

All routes and links must be enclosed in a `Router` component which provides
_context_ to children similary to redux `Provider`.

`Link` elements render anchors `<a>` to URLs which navigate without triggering
a page refresh. Links use the DOM history API to achieve this.

`Route` elements map URLs to components and provide URL parameters (if any) to those components.

`Route` elements can be at any level of the application.

### Setup changes


In
[webpack.config.js](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_7/webpack.config.js)
the dev-server must be configured to allow the history API fallback. This means
that the dev server will return the root element for all paths that it does not
already have an asset or endpoint for. If this is not done, then the
application will receive a 404 when refreshing on any route.

```
  devServer: {
    historyApiFallback: true
  }
```

### Application structure changes

Comments are now not directly rendered in the CommentList,
CommentList contains links to specific comments instead.

The Application header contains all other links.

### Components

[AppHeader](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_7/src/router-basics/components/AppHeader.js) has been changed to contain links to
_View comments(/comments)_ and _Add comment(/addComment)_. The header itself
does not know how these routes are handled.

[CommentList](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_7/src/router-basics/components/CommentList.js) has been changed to render links to
specific comments using the route `/comments/:commentId`. Only the author is
rendered directly. One can imagine the comment containing much more data where
such partial representation might be useful.

### Containers

[App container](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_7/src/router-basics/containers/App.js) creates the `Router` context and defines
mapping from _routes_ to UI elements. Note that CommentContainer is used both
in the App and CommentList. The components will receive any URL parameters as
`match.params` in props. Only components which match the current route will be
rendered.

[CommentContainer](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_7/src/router-basics/containers/CommentContainer.js) shows a particular comment
based on all the comments in application state and the URL parameter. It will
show a simple not found message if there is no such comment.

[CommentFormContainer](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_7/src/router-basics/containers/CommentFormContainer.js) has been changed
to automatically push a new route when a comment post has been requested. It
does so by directly using the `history` object prop that is passed to all components
that are rendered using `Route`.
