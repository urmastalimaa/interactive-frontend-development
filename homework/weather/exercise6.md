# Homework 6 - The Weather Widget

**All installation, running, style, and submission requirements from Homework 5 still apply.**

## Prerequisites
* Server application is running on [https://forecast-ut-88jlk.ondigitalocean.app/](https://forecast-ut-88jlk.ondigitalocean.app/) host
* Please go through [API documentation](https://github.com/artem-galas/forecast-ut#api)

## Add functionality to Weather Widget (4 / 10 points)

* Connect to the remote server over web socket API every time when weather widget is added.  
  You can use this URL to do so: `wss://forecast-ut-88jlk.ondigitalocean.app/magnitude/:city`.
* Every widget should have **exactly one** web socket connection.
* Receive earthquake **magnitude** value from the server over web socket API.
  * There is an example how to listen and print web socket message data. You can read more about web sockets [here](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket).
    ```js
    const ws = new WebSocket('wss://forecast-ut-88jlk.ondigitalocean.app/magnitude/Tartu');
    ws.onmessage = (message) => console.log(message.data);
    ```
* Display the latest value of the magnitude received over web socket API in addition to temperature, precipitation, and wind.
* Dispaly a magnitude [meter](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter):  
  The meter should be green if the magnitude < 4.9, yellow if 4.9 <= magnitude < 5.9, and red if the magnitude >= 5.9.  
  The maximum value of the magnitude is 10.

## React usage (4 / 10 points)

* Update applciation reducers:
  * When connecting to the server (when you initiate connection) - set widget `connecting: true` and `connected: false`.
  * When connection was established successfully (onOpen) - set widget `connecting: false` and `connected: true`.
  * Every time when the server sends a magnitude value (onMessage) - update widget magnitude.
  * When connection is closed (onClose) - set widget `connecting: false` and `connected: false`.

## Testing (2 / 10 points)

* Testing scenarios with server communication
  * could use "Fake server" approach or mocking

## Bonus points (+1 point)

* Add a button to initiate and close widget web socket connection.
* Handle widget `connecting` and `connected` states.

## Submission

* Requirements which cannot be validated due to missing dependencies from package.json will be awarded 0 points

## Sanity check

* Delete node_modules/ directory and JavaScript and CSS files from the public/ directory
* Run `yarn install && yarn lint && yarn test` and check that your tests pass
* Run `yarn start` and check that your application works as expected
