# Redux introduction

## Running the application

```
yarn install && yarn test && yarn start
```

Open _Reducers_ subpage.

## Definitions

- _value_ - An unit of information which does not change
- _Identity_ - A stable logical entity associated with a series of different _values_ over time
- _State_ - the _value_ an entity with a specific _identity_ has at a
  particular point in _time_
- _Stateful function_ - If a function is invoked with same arguments at two
  different points in time and it returns different values then it has state.

_Stateful functions_ should be generally avoided as they are hard to maintain
and a major source of bugs.

## Reducers

A _reducer_ is **pure** function with type signature `(a, b) -> a`.

In the context of state management, a reducer is a pure function of

```
  state :: any
  action :: ({type: string, payload: any})
  reducer :: (state, action) -> state
```

Defining application logic in terms of reducers is beneficial as

- Reducers are easy to understand
- Reducers are very easy to test
- Reducers are framework/library agnostic

### Using reducers to capture application state

- Combine state into one object at the top-level component
- Pass relevant slices of state to sub-components
- Define application logic using a reducer
- Create actions from user interactions
- Define a mutable state variable and progress its value using the reducer.
  Minimize the scope of the mutable variable.

* [Example reducer](./Calculator.js)
* [Example application](./ReducerExample.js)

### Actions

Actions represent input from the user or external sources. An action has a
type, describing what happened and it can also contain arbitrary payload.
Actions do not change state on their own, they simply capture the intent of
progressing application state.

By capturing all the logic in a reducer, an action might not progress
application state at all. In the calculator example, the sum always stays
between 0 and 10 of which the "add" and "subtract" actions are altogether
unaware.

We define actions such that they follow the [Flux standard
format](https://github.com/acdlite/flux-standard-action). Following conventions
is a great way to increase maintainability.
