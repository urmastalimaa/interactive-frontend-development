# Add routing to application

* Add routing to game lobby application using [React
  Router](https://reacttraining.com/react-router) version 5

This homework exercises ability to refactor and re-purpose existing components
in slightly new contexts.

## WebSocket connection setup

When not yet connected to the Game Lobby WebSocket interface, show the "welcome"
component, player name input and "Connect" button. Redirect (using `Redirect`
from react router) to "/" when the URL is anything else and the connection has
not yet been established. All other components must be shown only after a
connection has been established.

## Links

Add links to the top of the application to

* / - Home
* /createGame - Create game
* /players - Players
* /ongoingGames - Ongoing games
* /finishedGames - Finished games

### /

When URL matches "/" **exactly**, show only the "welcome" component.

### /createGame

When URL matches /createGame, show the "rounds per game" input and a button to
create a new game. When the game is successfully created, automatically
navigate to `/games/:gameId`.

### /players

When URL matches /players, show all the online players.

### /ongoingGames

* When URL matches `/ongoingGames`, show a list of games that are not finished.
  * Known games do **not** have to persist through refreshes
* Only show the game ID in the list.
* When clicking on a row, navigate to the corresponding game: `/games/:gameId`.

### /finishedGames

* When URL matches `/finishedGames`, show a list of games that are finished
  * Known games do not have to persist through refreshes
* Only show the game ID in the list.
* When clicking on a row, navigate to the corresponding game: `/games/:gameId`.

### /games/:gameId

Note that multiple games must now be able to be played concurrently!

* When URL matches /games/:gameId, show the game with the ID that matches URL parameter `gameId`
* Display the next expression (if any) and round history similarly to before
* If no game with the parameter ID exists, display "Game #gameId not found".
