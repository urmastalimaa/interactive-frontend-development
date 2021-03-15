# Homework 2 - The Fabulous Mathemagician

**All installation, running, style and submission requirements from Homework 1 still apply.**

Additionally:

* Implement `yarn start` which is the same as `yarn build:watch` but also automatically opens a browser window on the game location

## Build the Mathemagician game in React

* Do not use react bootstrappers (e.g _create-react-app_)
  * In this context they take away the opportunity to learn
* Do not keep homework 1 solution in your submission
  * It is in your version control history, just delete it
* Put components into different modules (files) 
  * It is easier for yourself as well as others to read

### Game setup

* Display game instructions: `Hi, this is ${your first name}'s math game, choose your parameters and get to calculating!`
* Create an input to choose number of rounds
  * Default 3, minimum 1, maximum 20
* Create a button `START`
  * Number of rounds must be within bounds
  * Game starts after clicking the button

### Game

After clicking the `START` button

* Game setup must no longer be displayed, it must not be present in the DOM at all
* Add multiplication to the possible operators
  * Unit test the answer checking logic
* Otherwise game progresses exactly as in homework 1
  * Answer input must still be automatically focused when moving to next expression
  * Absolutely no manual DOM manipulation is allowed, everything must be implemented with React

### React usage

* Maximally **one** React component can hold an instance of the Mathemagician
  game as state. All other components must use simple objects (numbers, arrays,
  objects of the former etc) for props and state.
  * Remember that React components only re-render when an object in state
    changes. If you update the internal state of Mathemagician game instance,
    the component using that game in state does **not** re-render, because the
    instance identity didn't change! Extract the necessary properties out of
    the game instance and put them into state/props.
* Every component should be as simple (have very little responsibilities) as possible
  * One component body should not exceed 50 lines (sans code comments)
* At least 5 React components must be used
* Only put state to components that need it
* Always use pure function components when possible.
* All prop types must be validated

### Suggestions

* Configure automatic linting for your editor. It will save you a lot of time. 

## Sanity check

* Delete node_modules/ directory and JavaScript and CSS files from the public/ directory
* Run `yarn install && yarn lint && yarn test` and check that your tests pass
* Run `yarn start` and check that your application works as expected
