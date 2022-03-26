# Homework 4 - The Weather Widget

**All installation, running, style, and submission requirements from Homework 3 still apply.**

## Add functionality to Weather Widget (4 / 10 points)

* Add "History" button that:
  * Shows a history view with the last 3 weather widget cities in a chronological order
  * Hides a history view when clicked second time

## React usage (3 / 10 points)
* `useReducer` hook must used be at least once
  * The reducer must be defined in a separate module as in lecture 4 examples
* All component props must be validated

## Testing (3 / 10 points)

* Add `yarn test:coverage` command
* Achieve 100% of line coverage for _reducer_ modules
  * Having no _reducer_ type modules **results in 0 points for this section**
  * Tool may report "Uncovered lines" while having 100% line coverage, this is OK
  ```
    -------------------|---------|----------|---------|---------|-------------------
    File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
    -------------------|---------|----------|---------|---------|-------------------
    All files          |     100 |    91.67 |     100 |     100 |
     WeatherReducer.js |     100 |    91.67 |     100 |     100 | 41
    -------------------|---------|----------|---------|---------|-------------------
  ```
  * If you are sure the tool misreports coverage, add a comment to the submission
* All React components must have at least a smoke test

## Submission

* Requirements which cannot be validated due to missing dependencies from package.json will be awarded 0 points

## Sanity check

* Delete node_modules/ directory and JavaScript and CSS files from the public/ directory
* Run `yarn install && yarn lint && yarn test` and check that your tests pass
* Run `yarn start` and check that your application works as expected
