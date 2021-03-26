# Homework 4 - The Fabulous Mathemagician

**All installation, running, style and submission requirements from Homework 1 still apply.**

## Add functionality to the Mathemagician game

* Add "Skip" button which can be used `floor(totalNrOfRounds / 3)` times per game
  * When the button has been used the maximum amount of times, it must be no longer displayed
* Add "New game" button to start a new game after a game is finished
  * Same number of rounds is used as in previous game
* Add "Game History" to game finished view
  * Shows a history view with all games and their rounds in a chronologically descending order

## React usage

* **Zero** class-based components may be used
  * Each class-based component deducts 2 points from total score
* `useReducer` hook must be at least once
  * The reducer must be defined in a separate module as in lecture 4 examples
* All component props must be validated

## Testing

* Add `yarn test:coverage` command
  * Command must run [_Istanbul_ code coverage tool](https://github.com/istanbuljs/nyc): `nyc yarn test` 
* Achieve 100% of line coverage for _reducer_ modules
  * Having no _reducer_ type modules results in 0 points here
  * Tool may report "Uncovered lines" while having 100% line coverage, this is OK
  ```
    ------------------|---------|----------|---------|---------|-------------------
    File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
    ------------------|---------|----------|---------|---------|-------------------
    All files         |     100 |    91.67 |     100 |     100 |
     Mathemagician.js |     100 |    91.67 |     100 |     100 | 41
    ------------------|---------|----------|---------|---------|-------------------
  ```
  * If you are sure the tool misreports coverage, add a comment to the submission
* All React components must have at least a smoke test

## Submission

* Requirements which cannot be validated due to missing dependencies from package.json will be awarded 0 points

## Sanity check

* Delete node_modules/ directory and JavaScript and CSS files from the public/ directory
* Run `yarn install && yarn lint && yarn test` and check that your tests pass
* Run `yarn start` and check that your application works as expected
