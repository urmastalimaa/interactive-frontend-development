# Homework 5 - The Fabulous Mathemagician

**All installation, running, style and submission requirements from Homework 1 still apply.**

# Server

* Use [Game Lobby Server version 1.4.0](https://www.npmjs.com/package/game_lobby_server) to play games
* You don’t have to write a server yourself
  * Install it in your homework project via `yarn add game_lobby_server@1.4.0`
  * Run it using `./node_modules/.bin/game_lobby_server --port=8081 --delay=500 --failure-percentage=30`
  * You can change the server parameters while developing to test failure and delays
* Expect server to run on http://localhost:8081
* Read the project README to understand the request and response formats
* Use the Browser network inspector to your advantage!
* You need to only concern yourself with the HTTP API and _mathemagician_ game type

[Endpoint definitions](https://github.com/urmastalimaa/game_lobby_server/blob/v1.4.0/README.md).

I will run the Game Lobby Server using 
```sh
./node_modules/.bin/game_lobby_server --port=8081 --delay=500 --failure-percentage=30
```
Make sure you use the same port in your client application!

# Homework requirements

* Use a POST request to Game Lobby Server `/games` path to create a game 
  * Use _application/json_ content type for the request
  * Provide number of rounds in the request body
  * Handle the request being in flight (free to choose how to display this state to the user)
  * Disallow re-creating the game while the request is in flight
  * Handle **both** requests succeeding and failing
* Use a POST request to Game Lobby Server `/games/:gameId/moves` path to answer expressions
  * Use _application/json_ content type for the request
  * Disallow re-submitting another answer while the request is in flight
  * Display correctness and time spent based on the server response
  * Display the next expression based on the server response
  * Update game status and remaining skips based on the server response
  * Handle **both** requests succeeding and failing
* Test React components showing in-flight and failed requests
* Have at least one "integration-level" mocha test which goes through **two**
  full games through the main React view component with a fake server
  * The server can respond with failure/success arbitrarily
* Add a **dispatch middleware** which logs server latency for each request to the server
  * Remember that a dispatch middleware can "peek" into what actions are being dispatched
