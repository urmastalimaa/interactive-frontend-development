# Connect to [Game Lobby Server](https://www.npmjs.com/package/game_lobby_server) version 1.3.0 WebSocket API

[WebSocket API documentation](https://bitbucket.org/urmastalimaa/game_lobby_server/src/v1.3.0/#markdown-header-websocket-api).

* Test all created presentational components (same rules as for previous homeworks)
* Test all created reducers (same rules as for previous homeworks)
* WebSocket protocol usage is not required to be tested.
* Use a **middleware** to manage WebSocket connections
* Can copy helpers from lecture examples

## Connect button

* When player logs in, initiate a WebSocket connection, passing player name as `playerName` parameter in the query string
* The WebSocket server is started on localhost port 8081
* While connecting to the Server, show "Connecting..." to the user
* When connected to the Server, show disconnect button, online players, create game button and ongoing games
* When disconnected from the Server, revert to showing only the "Login" button with name input
* Display a human readable error message when connection was closed with code 4000

## Disconnect button

* Close the current WebSocket connection
* When disconnected from the Server, show only the "Login" button with name input again

## Online players list

* Show a list of player names that correspond to the last players received via 'online-players' event from the WebSocket
* When disconnected from the Server, clear the player list (even if it is not visible!)

## Reducers

* Use at least 2 different reducers that are combined with `combineReducers` 

## Bonus point (1p) :

* Show '(you)' next to the current player, make sure this works even when multiple players with the same name are allowed to connect.
