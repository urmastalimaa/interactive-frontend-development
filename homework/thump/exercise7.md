# Add routing to application

* Add routing to game lobby application using [React
  Router](https://reacttraining.com/react-router) version 5
* Integrate React Router with Redux using [connected react
  router](https://github.com/supasate/connected-react-router).
* Make sure that time travelling works in Redux developer tools with regards to
  URL changes!
* Note that games list does not have to be fetched from server and the player
  does not have to be reconnected after the page is refreshed. These features
  are useful, but out of scope of this exercise.

## Links

Add links to the top of the application to

* /createGame
* /players
* /ongoingGames
* /closedGames

### /createGame

When URL matches /createGame, show only the frequency input and create game button
When create game button is clicked, automatically navigate to `/ongoingGames`.

### /players

When URL matches /players, show only online players

### /ongoingGames

* When URL matches `/ongoingGames`, show a list of games that are not closed.
* Display only the game frequency in the list
* When clicking on a row, navigate to `/games/:gameId`.

### /closedGames

* When URL matches `/closedGames`, show a list of games that are closed
* Display only the game frequency in the list
* When clicking on a row, navigate to `/games/:gameId`.

### /games/:gameId

* When URL matches /games/:gameId, show the game with ID that matches URL parameter `gameId`
* Display the game instructions and hit history as was previously displayed on the main screen
* If no such game with matching ID exists, display "Game not found".

## Bonus

* Reconnect with the same name and open the appropriate route when the page is refreshed
