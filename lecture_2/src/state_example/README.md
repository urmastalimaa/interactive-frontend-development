# React State example

## Running the application

```
yarn install && yarn start
```

Open _State example_ subpage.

## State in React

[React documentation on state][0].

The main way to pass data between React components is to use
_props_ which are immutable. In order to have data that changes,
_state_ must be used. 

Mutable state is hard to understand in general. Therefore React limits the usage of _state_ to a single Component. No other Components can read or change the state of other Components.

State can be initialized in the [class constructor][1]

## Components in the example

Build on top of the props example.

* [App](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/src/state_example/App.js)
  has local state now - a list of comments that grows every 5 seconds.
* [CommentList](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/src/state_example/CommentList.js)
  has been upgraded to take a list of comment objects as props.

[0]: https://reactjs.org/docs/state-and-lifecycle.html
[1]: https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
