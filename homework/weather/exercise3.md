# Homework 3 - The Weather Widget

**All installation, running, style, and submission requirements from Homework 2 still apply.**

## Add functionality to Weather Widget

### Setup (1 / 10 points)

* additional rules should be added to eslint:
  * `no-console`
  * `no-inline-comments`
  * `no-unused-vars`

### The Weather Widget (4 / 10 points)

* Create a button `+ Add Widget`:
  * Button should show form to populate City name
  * Input should be focused
  * Form should send by clicking `Enter`
  * Once submitted WeatherWidget should be displayed
  * You could create as many widget as you wish 
* Add Checkbox/Toggle `Displayd °F` to WeatherWidget
  * Once selected Temperature should be displayed in °F metric
* Add `X Reomove` button to WeatherWidget:
  * Once clicked remove widget from the list

## React usage (1 / 10 points)
* At least 1 custom hooks is used
* At least 3 components should be used

## Testing (4 / 10 points)
* Every component must have at least one test
* All functionality must be tested either
  * Through the root React component (Integration tests)
  * Through stand-alone functions (Unit/Component tests)
* Test coverage should be >= 75%

## Suggestions

* Configure automatic linting and [https://prettier.io/](https://prettier.io/) for your editor. It will save you a lot of time.
* You might need to setup jest to work with css.
```json
{
    "moduleNameMapper": {
        "\\.(css|scss)$": "identity-obj-proxy"
  }
}
```
  
## Sanity check

* Delete node_modules/ directory and JavaScript and CSS files from the public/ directory
* Run `yarn install && yarn lint && yarn test` and check that your tests pass
* Run `yarn start` and check that your application works as expected
