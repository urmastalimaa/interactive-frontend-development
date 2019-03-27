# Homework 3 - The Human Metronome Project

**All installation, running, style and submission requirements from Homework 1 still apply.**

This homework adds to the functionality that was built for homework 2.

## Add functionality to Metronome game

* The name input must be **focused** when the application is opened for the first time.
* Allow multiple concurrent games to be started by specifying a frequency (in milliseconds) and clicking _START_.
  * After clicking _START_ the frequency input must be cleared.
  * Frequency specifies with what interval, for this particular game, the _NOW_ button must be pressed.
  * Games must be displayed in chronological order (by start time).
* Calculate total miss in milliseconds and display it after the greeting
* Allow closing the game using button _Close game_
  * After closing the game it should be removed from DOM
  * After closing the game, the total miss count should **still** include the misses from the closed game.

## React usage

The following hooks must be used at least once:
* `useState`
* `useRef`
* `useImperativeHandle`

State must be managed by the immediate parent (or parent further up the chain)
of two components that depends on shared state.

* Every component should be as simple (have very little responsibilities) as possible
* Only have state in components that need it
* Always use pure function components when possible.
* All props must be validated

## Testing

* Enzyme usage is recommended but not required (can just use ReactTestUtils)
* All code paths for all React presentational components must be unit tested
  * It is sufficient to have a _smoke test_ for dumb presentational components
  * Callbacks to presentational components must be tested (including validation of received arguments)
  * All paths for conditionals and edge cases for loops must be tested (each path in a different test)
  
## Submission

* Requirements which cannot be validated due to missing dependencies from package.json will be awarded 0 points
* Including node_modules/ OR .git/ OR .svn/ folder in the submission will deduct 1 point from the score

## Sanity check

* Delete node_modules/ directory and JavaScript and CSS files from the public/ directory
* Run `yarn install && yarn lint && yarn test` and check that your tests pass
* Run `yarn start` and check that your application works as expected
