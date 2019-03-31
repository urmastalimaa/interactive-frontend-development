# Homework 2 - The Human Metronome Project

**All installation, running, style and submission requirements from Homework 1 still apply.**

## Build a Metronome game in React

* Do not use react bootstrappers (e.g _create-react-app_)
  * In this context they take away the opportunity to learn
* Do not keep homework 1 solution in your submission
  * It is in your version control history, just delete it
* Put components into different modules (files) 
  * It is easier for yourself as well as others to read

### Game setup

* Create an user input for player name
* Create a button `START`

### Game

After clicking the `START` button

* Game setup input and button should no longer be displayed
* Display game instructions: `Hi ${playerName}, try to click the button every 1000 milliseconds`
* Display a Metronome button (`NOW`)
* Whenever Metronome button is clicked:
  * Create a history entry which displays click counter and timing error in milliseconds (`Try 1: Missed by XXX milliseconds`)
  * The round history should be in **reverse chronological order** in DOM (last try at the top)
  * If the miss was more than 1/5 of the frequency (1000 milliseconds), the history entry should have red text colour
  * If the miss was less than 1/10 of the frequency (1000 milliseconds), the history entry should have green text colour
  * If the miss was anywhere in between, the entry should have orange text colour

### React usage

* React components must **not** receive instances of classes as props or hold instances of classes as state
  * Instead they should deal with simple objects (numbers, arrays, objects of the former)
* Every component should be as simple (have very little responsibilities) as possible
* At least 4 React components must be used
* Only put state to components that need it
* Always use pure function components when possible.
* All prop types must be validated

## Sanity check

* Delete node_modules/ directory and JavaScript and CSS files from the public/ directory
* Run `yarn install && yarn lint && yarn test` and check that your tests pass
* Run `yarn start` and check that your application works as expected
