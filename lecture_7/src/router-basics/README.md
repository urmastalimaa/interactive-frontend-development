# Routing and history in React

## Running the application

```
yarn install
yarn test
yarn start:server
yarn start
```

## Explanation

- [DOM History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)

Comment application example from lecture 5 is continued from.

### New Dependencies

- [react-router](https://github.com/ReactTraining/react-router)
- [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)

### React Router

React Router abstracts [DOM history
API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) and provides
declarative links and routing.

All routes and links must be enclosed in a `Router` component which provides a
routing _context_ to child components.

`Link` elements render anchors `<a>` to URLs which navigate using the DOM
history API without triggering a page refresh.

`Route` elements map URLs to components and provide URL parameters (if any) to those components.

`Route` elements can be at any level of the application and if they do not
match the URL, they simply render `null`.

Read about the [philosophy of dynamic
routing](https://reactrouter.com/web/guides/philosophy) and why React Router
arrived at such a solution.

### Setup changes

In
[rollup config](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_7/rollup.config.js)
the development server must be configured to allow the history API fallback. This means
that the development server will return the root element for all paths that it does not
already have an asset or endpoint for. If this is not done, then the
application will receive a 404 when refreshing on any route.

```
  serve({
    // ...
    historyApiFallback: true
  })
```

### Components

[AppHeader](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_7/src/router-basics/components/AppHeader.js) has been changed to contain links to
_View comments(/comments)_ and _Add comment(/addComment)_. The header is not
concerned with how these routes are handled.

[CommentList](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_7/src/router-basics/components/CommentList.js) has been changed to render links to
specific comments using the route `/comments/:commentId`. Only the author is
rendered directly. One can imagine the comment containing much more data where
such a partial representation would be useful.

[App](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_7/src/router-basics/components/App.js)
creates the `Router` context and defines mapping from _routes_ to UI elements.
Only components which match the current route will be rendered. The components
can either accept URL match parameters as props or leverage the `useParams`
hook.

[CommentOrNotFound](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_7/src/router-basics/components/CommentOrNotFound.js) shows a single comment
based on all the comments in application state and the URL parameter. It will
show a simple not found message if there is no such comment. When the comment
is deleted, the component redirects the user to the comment list by _pushing_
"/comments" to the DOM history API.

[CommentFormWithServer](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_7/src/router-basics/components/CommentFormWithServer.js) has been changed
to also redirect to "/comments" when a comment is successfully posted.
