# Websocket Basics Example

## Running the application

```
yarn install
yarn start:server
yarn start
```

## Explanation

- [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).

### Websocket server simulation

A toy WebSocket server has been given which will accept all requests and start
sending messages to connected WebSockets as UTF-8 encoded JSON strings. It will
send a message with _eventName_ `ping` and _payload_ `{pingCount::Integer}`
every 2 seconds.

### Websocket client

Browsers support WebSocket protocol natively through the `WebSocket` object.

[WebSocket.js](./WebSocket.js) defines an abstraction on
top of the native object specific to the given server. This abstraction
interprets incoming messages as JSON, notifies callbacks when connection status
changes and exposes the `close` method. `parameters` can be optionally passed
which will be translated to query parameters.

### Connection management

[Example application](./App.js) uses a combination of techniques to create a
small application:

- A reducer to capture logic
- Helper function to de-compose application and UI logic
- `useEffect` hook to initiate side effects
  - The initialization of the WebSocket connection will usually be done either
    immediately on application load or based on some user action e.g. "Start
    game" or "Enter chat-room".
  - For illustration purposes of the `useEffect` hook and changing connection
    status, the client disconnects and reconnects after every 3 received `ping`
    messages.

### Testing

Check out [AppTest](../../test/AppTest.js) on how a minimal interface mimicking
the WebSocket can be provided to the component by simply using "stub"
functions. A small mock is sufficient for comprehensive UI tests, no need for
over-engineering and pulling in complicated "mock" libraries.
