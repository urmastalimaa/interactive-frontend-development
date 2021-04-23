# Connect to [Game Lobby Server](https://www.npmjs.com/package/game_lobby_server) version 1.4.0 WebSocket API

[WebSocket API documentation](https://bitbucket.org/urmastalimaa/game_lobby_server/src/v1.4.0/#markdown-header-websocket-api).

* Test all created presentational components (same rule as for previous homeworks)
* Test all created reducers with 100% line coverage (same rule as for previous homeworks)
* Can copy helpers from lecture examples
* (Minimally) Test one UI component changing from "connecting" status to "connected" status via a mocked WebSocket connection

## Connect button

* When player logs in, initiate a WebSocket connection, passing player name as `playerName` parameter in the query string
* The WebSocket server is started on localhost port 8081
* While connecting to the Server, show "Connecting..." to the user
* When connected to the Server, show disconnect button, online players and underneath, the previous games UI
  * You can change the layout to be side-side or however you like as long as all the information is visible on one screen
* When disconnected from the Server, revert to showing the "Setup" screen with name and rounds inputs
* Display a human readable error message when connection was closed with code 4000

* All `useEffect` calls must provide a clean-up function when there is something to "clean up"

## Disconnect button

* Close the current WebSocket connection
* When disconnected from the Server, show only the "Setup" screen with name and rounds inputs again

## Online players list

* Show a list of player names that correspond to the last players received via 'online-players' event from the WebSocket
* When disconnected from the Server, clear the player list

## Reducers

De-compose reducers such that either

* multiple separate reducers are used or
* one reducer is split into multiple name-spaces which are handled by different
  sub-reducers (See lecture 5 `Comments` reducer).

## Bonus point (1p) :

* Show '(you)' next to the current player, make sure this works even when multiple players with the same name are allowed to connect.
