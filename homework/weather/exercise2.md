# Homework 2 - The Weather Widget

**All installation, running, style, and submission requirements from Homework 1 still apply.**

## Build the Weather Widget in React

### Setup (1 / 10 points)

* Implement `yarn start` which is the same as `yarn build:watch` but also automatically opens a browser window on the weather widget
* Do not use react bootstrappers (e.g _create-react-app_)
  * In this context they take away the opportunity to learn
* Do not keep homework 1 solution in your submission
  * It is in your version control history, just delete it
* Put components into different modules (files)
  * It is easier for yourself as well as others to read

### The Weather Widget (5 / 10 points)

* Create an input to enter a city name
* Create a button `Show Weather`:
  * Disable the button if the city name is empty
  * Disable the button and dispaly `City name is too big` error message if the city name length >= 20
  * Otherwise, the button should be enabled

* After clicking the button:
  * The city name input and the `Show Weather` button must no longer be displayed, it must not be present in the DOM at all
  * Display the weather widget that looks exactly as in homework 1, **it should contain previously specified city name**

* Absolutely no manual DOM manipulation is allowed, everything must be implemented with React

### React usage (4 / 10 points)

* Maximally **one** React component can hold an instance of the Weather Widget state.
* All other components must use simple objects (numbers, arrays, objects of the former etc) for props and state.
* Every component should be as simple (have very little responsibilities) as possible
  * One component body should not exceed 50 lines
* Only put state to components that need it
* All prop types must be validated

### Suggestions

* Configure automatic linting for your editor. It will save you a lot of time.
  
## Sanity check

* Delete node_modules/ directory and JavaScript and CSS files from the public/ directory
* Run `yarn install && yarn lint && yarn test` and check that your tests pass
* Run `yarn start` and check that your application works as expected