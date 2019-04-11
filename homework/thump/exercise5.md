# Homework 5 - The Human Metronome Project

**All installation, running, style and submission requirements from Homework 1 still apply.**

# Server

* Use [Game Lobby Server version 1.3.0](https://www.npmjs.com/package/game_lobby_server) to play games
* You don’t have to write a server yourself
* Expect server to run on http://localhost:8081
* Read the project README to understand the request and response formats
* Use the Browser network inspector to your advantage!
* You need to only concern yourself with the HTTP API and _metronome_ game type

[Endpoint definitions](https://bitbucket.org/urmastalimaa/game_lobby_server/src/v1.3.0/README.md).

I will run the Game Lobby Server using 
```sh
./bin/server.js --delay=500 --port=8081 --failure-percentage=30
```
Make sure you use the same port in your client application!

# Homework requirements

* Use a POST request to Game Lobby Server `/games` path to create a game 
  * Use _application/json_ content type for the request
  * React to the request being in flight (free to choose how to display this state to the user)
  * Handle **both** requests succeeding and failing
* Use a POST request to Game Lobby Server `/games/:gameId/moves` path to create moves 
  * Use _application/json_ content type for the request
  * Show miss milliseconds when received from the server
  * Handle **both** requests succeeding and failing
* Implement a middleware that uses an asynchronous action creator to interact
  with the server (check _async_process_with_middleware_ example)
  * Do not dispatch actions that interact with the server directly from the react-redux container.
  * Let the middleware interact with the server when a request is desired from the user interface

* Test new logic in presentational components (in-flight / failed requests)
* Test added / changed reducers
* Make sure Redux chrome dev tools integration works
* Make sure failures are handled!

# Bonus points

* Test the middleware that calls `fetch` by using functions stubs (check out _async_process_basics_ tests)
* Calculate preliminary miss milliseconds in the browser and show it while waiting for response from the server using a different style for the miss amounts
  * Preliminary miss amount can be calculated by taking a diff from the game start time as recorded by the server
  * Preliminary miss amount must be calculated using the same algorithm as in the server
