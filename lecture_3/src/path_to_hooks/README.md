# Types of components

## Running the application

```
yarn install && yarn start
```

Open _Path to Hooks_ subpage.

## Path to Hooks

All components that can be, are implemented as pure function components.

### View components

- [`AppHeader`](./AppHeader.js) is a simple pure function component
- [`Comment`](./Comment.js) is a simple pure function component
- [`CommentList`](./CommentList.js) is a pure function component, renders a list of `Comments`.

CommentForm components have local state, but contain no application logic.

- [`ControlledCommentForm`](./ControlledCommentForm.js)
- [`UncontrolledCommentForm`](./UncontrolledCommentForm.js)
- [`HooksCommentForm`](./HooksCommentForm.js)

### Capturing application logic

App component is the root component and holds all application state and logic.
React components are however not well-suited for implementing application
logic. Application logic can be implemented in pure functions and hooks can act
as the glue that ties application logic to the view components.

- [App](./App.js)

## Controlled forms

[Official documentation on Controlled components](https://reactjs.org/docs/forms.html#controlled-components)
[`ControlledCommentForm`](./ControlledCommentForm.js)
syncs the state of its HTML inputs with React component state. The `value` of
inputs is linked to `state` and whenever an input changes, `state` is updated.
All state is therefore captured and tracked.

## Uncontrolled forms

[Official documentation on Uncontrolled components](https://reactjs.org/docs/uncontrolled-components.html)
[`UncontrolledCommentForm`](./UncontrolledCommentForm.js)
does not control the state of its inputs. Instead it uses `ref` callback to
save a reference to the raw DOM input to a component instance variable. It is
much easier to make a mistake and have input and application state go out of
sync.

It is not recommended to use uncontrolled forms unless there is a good reason to.

## `ref` and native DOM functions

Native DOM functions with side-effects, such as `focus` can not be used in a
declarative way. One use-case for a `ref` callback is to save a reference to an
element to be able to call `focus` on it later.

This is done so in [`App`](./App.js)
where both forms are taken a reference to and whenever a comment is submitted,
the same form input is focused again. Read more about React Refs
[here][react-ref].

## React hooks

[React hooks][hooks-intro] are functions that can be used in functional React
components to use simple cases of local state or side-effects in functional
components. The most basic of those are described in
[`HooksCommentForm`](./HooksCommentForm.js).

[hooks-intro]: https://reactjs.org/docs/hooks-intro.html
[react-ref]: https://reactjs.org/docs/refs-and-the-dom.html
