# Lecture 7

Lecture 7 introduces DOM History API to gives URLs back their meaning in single
page applications.

## Study goals

## DOM History API

- What is DOM history API?
- What problem does it solve?

## Declarative routing in single page applications using React Router

- What is React Router and what problem does it solve?

[Router basics](./src/router-basics/README.md)

## Optimizing React applications

React performs many internal optimizations, starting from the virtual DOM
implementation to optimizing pure function components, but there are standard
"mistakes" which defeat optimizations.

### Scenario

- Start the server and router-basics example
- Click on the "Giraffe" comment
- Turn on "Record why each component rendered" option in React Development Tools Profiler
- Start profiling
  - Type "g" into the filter
  - Followed by "i"
  - Followed by "r"
- Stop profiling

Investigate which components re-render and why and how to avoid unnecessary
renders. Try to answer "How to avoid rendering a component ..."

- just because a parent component rendered?
- because a "function" prop changed?

Evaluate the following optimization methods:

- React.memo
- React.useMemo
- React.useCallback
- Removing state from the "top-level" state
