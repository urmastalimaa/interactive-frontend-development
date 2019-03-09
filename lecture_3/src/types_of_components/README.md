# Types of components

## Running the application

```
yarn install && yarn start
```

Open _Types of components example_ subpage.

## Types of components

All components that can be, are implemented as pure function components.

### Presentational components

* [`AppHeader`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/src/types_of_components/AppHeader.js)
  is a simple pure function component
* [`Comment`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/src/types_of_components/Comment.js)
  is a simple pure function component 
* [`CommentList`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/src/types_of_components/CommentList.js)
  is a pure function component, renders a list of `Comments`.

Although CommentForms have local state, they are still presentational. The
forms just render inputs and a button, they contain no application logic.

* [`ControlledCommentForm`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/src/types_of_components/ControlledCommentForm.js)
* [`UncontrolledCommentForm`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/src/types_of_components/UncontrolledCommentForm.js)
* [`HooksCommentForm`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/src/types_of_components/HooksCommentForm.js)

### Container components

App component holds (nearly) all state and logic. It _knows_ what comments have
been posted and what to do when submitting a comment, but it doesn't know
anything about how things look.

* [App](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/src/types_of_components/App.js)

## Controlled forms

[`ControlledCommentForm`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/src/types_of_components/ControlledCommentForm.js)
syncs the state of its HTML inputs with React component state. The `value` of
inputs is linked to `state` and whenever an input changes, `state` is updated.
All state is therefore captured and tracked.

This is the preferred way to implement forms.

## Uncontrolled forms

[`UncontrolledCommentForm`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/src/types_of_components/UncontrolledCommentForm.js)
does not control the state of its inputs. Instead it uses `ref` callback to
save a reference to the raw DOM input to a component instance variable. It is
much easier to make a mistake and have input and application state go out of
sync.

It is not recommended to use uncontrolled forms unless there is a good reason to.

## `ref` and native DOM functions

Native DOM functions with side-effects, such as `focus` can not be used in a
declarative way. One use-case for a `ref` callback is to save a reference to an
element to be able to call `focus` on it later.

This is done so in
[`App`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/src/types_of_components/App.js)
where both forms are taken a reference to and whenever a comment is submitted,
the same form input is focused again. Read more about React Refs
[here][react-ref].

## React hooks

[React hooks][hooks-intro] are functions that can be used in functional React
components to use simple cases of local state or side-effects in functional
components. The most basic of those are described in
[`HooksCommentForm`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_3/src/types_of_components/HooksCommentForm.js).

[hooks-intro]: https://reactjs.org/docs/hooks-intro.html
[react-ref]: https://reactjs.org/docs/refs-and-the-dom.html
