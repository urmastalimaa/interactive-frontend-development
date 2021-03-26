# Redux comment list example

## Running the application

```
yarn install && yarn test && yarn start
```

Open _Reducers with React_ subpage.

## Explanation

## React components

Component design is nearly unchanged from previous examples.

- [`Comment`](./components/Comment.js) component now allows deleting a comment.
  Deleting intent is propagated through callbacks to
  [`App`](./components/App.js).
- A new [`Filter`](./components/Filter.js) component has been added. The
  component is just a _controlled_ `<input>` element.

## Reducer usage

[`App`](./components/App.js) component imports _action creator_ and _selector_
functions from the application logic module - [`Comments`](./Comments.js). It
simply wires the functions together with component props.

## Reducer design

[`Comments`](./Comments.js) defines the whole application logic.
Application logic can be however complicated, the only thing that matters for
the user interface is that _action creator_, _selector_ and _reducer_ functions
are exported. This pattern allows cleanly decoupling application logic from the
user interface.

### Actions

The created actions map trivially to user intents:

- `commentSubmitted(commentAttributes)`
- `commentDeleted(comment)`
- `filterSet(filterText)`
