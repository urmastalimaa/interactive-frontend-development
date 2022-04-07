# Homework 5 - The Weather Widget

**All installation, running, style, and submission requirements from Homework 4 still apply.**

## Prerequisites
* Server application is running on [https://forecast-ut-88jlk.ondigitalocean.app/](https://forecast-ut-88jlk.ondigitalocean.app/) host
* Please go through [API documentation](https://github.com/artem-galas/forecast-ut#api)
  * **NOTE** server might return an error that is needed for testing all cases
  * You could modify a response delay by passing `delay` in milliseconds to the query parameter eg. `/forecast/Tartu?delay=30`

## Add functionality to Weather Widget (3 / 10 points)

* Getting data from the server
  * Generate function must **call server** and display weather coming from the server
  * Generate should handle **loading**, **success**, **failure** states.

## Add functionality to Weather Widget (3 / 10 points)
* Adding weather widget communicate with server
  * Once "Show weather" button is clicked POST request **must** be sent to the server
  * Generate should handle **loading**, **success**, **failure** states.

## React usage (2 / 10 points)
* Add a **dispatch middleware** which logs server latency for each request to the server
  * Remember that a dispatch middleware can "peek" into what actions are being dispatched

## Testing (2 / 10 points)

* Testing scenarios with server communication
  * could use "Fake server" approach or mocking
* Tests should cover **Success** and Failing cases 

## Submission

* Requirements which cannot be validated due to missing dependencies from package.json will be awarded 0 points

## Sanity check

* Delete node_modules/ directory and JavaScript and CSS files from the public/ directory
* Run `yarn install && yarn lint && yarn test` and check that your tests pass
* Run `yarn start` and check that your application works as expected
