# Homework 3 - The Fabulous Mathemagician

**All installation, running, style and submission requirements from Homework 1 still apply.**

This homework adds to homework 2 functionality.

## Add functionality to the Mathemagician game

* The number of rounds input must be **focused** when the application is opened
* Increase the size of the terms in expressions from 0-9 to 0-19
* Add subtraction ("-") and integer division ("/") operators
  * Game proceeds to generate expressions using any of the 4 operators
  * Unit test answer checking for all the operators
* Make the answer input "clever"
  * The answer is checked only when the number of digits in the given answer matches the number of digits in the correct answer
  * Game now continues when an incorrect answer is given
* Show round history during game
  * Display expressions with the "blank" filled with given answers
  * Each expression with a correct answer given in 3 second or less has green text colour
  * Each expression with a correct answer given in more than 3 second has orange text colour
  * Each expression with an incorrect answer has red text colour
* Game Over screen
  * Keep the round history visible in game over screen
    * Additionally, now also display the number of time spent on that guess in square brackets after the expression 

## React usage

* At least 7 React components must be used
* Maximally 1 class-based component can be used
  * All others must be converted to functional components, with hooks if required.
* `useReducer` hook must be used at least once
* Only have state in components that need it
* All component props must be validated

## Testing

* Every component must have at least a smoke test
* Game progression logic must be tested either
  * Through the root React component
  * Through stand-alone functions (which are themselves used in React)

## Submission

* Requirements which cannot be validated due to missing dependencies from package.json will be awarded 0 points
* Including node_modules/ OR .git/ OR .svn/ folder in the submission will deduct 1 point from the score

## Sanity check

* Delete node_modules/ directory and JavaScript and CSS files from the public/ directory
* Run `yarn install && yarn lint && yarn test` and check that your tests pass
* Run `yarn start` and check that your application works as expected
