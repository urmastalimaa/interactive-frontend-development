const websocketConf = {
  port: 8081,
  host: "localhost",
};

// Helper function to create a standard query string from a parameter object
// Note that URLSearchParams is not supported in older browsers and may need to
// be polyfilled
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
const objectToQueryString = (obj) => {
  const params = new URLSearchParams();
  Object.getOwnPropertyNames(obj).forEach((propName) => {
    params.append(propName, obj[propName]);
  });
  return params.toString();
};

/**
 * Thin wrapper around the native WebSocket object which deals with opening the
 * connection and parsing incoming messages.
 *
 * @param {object} parameters Parameters for the connection
 * @param {function} onOpen Called when the connection opens
 * @param {function} onClose Called when the connection closes
 * @param {function} onMessage Called with a parsed message whenever a message is received
 *
 * @return {object} Object with
 *   function `close` that closes the websocket connection
 */
export const connect = ({ onOpen, onClose, onMessage, parameters = {} }) => {
  // `ws` signifies the websocket protocol
  // `wss` would be secure websocket protocol (like https)
  const websocketConnection = new WebSocket(
    `ws://${websocketConf.host}:${websocketConf.port}/?${objectToQueryString(
      parameters
    )}`
  );

  websocketConnection.onopen = () => onOpen();

  websocketConnection.onclose = (event) => {
    // WebSocket might be disconnected by a server with a specific reason
    const reason = event.reason;
    onClose({ reason });
  };

  websocketConnection.onmessage = (messageEvent) => {
    // In this example `data` is JSON encoded in an UTF-8 String
    const payload = messageEvent.data;

    let parsedMessage;
    try {
      parsedMessage = JSON.parse(payload);
    } catch (error) {
      console.error("error parsing websocket message", error, payload); // eslint-disable-line no-console
      return;
    }

    onMessage(parsedMessage);
  };

  /*
   * Although the WebSocket object has a `send` method, it is important to very
   * carefully consider using it when there is an HTTP API present as well.
   * It is generally a very bad idea to use different transports -
   * websocket.send and HTTP requests - to implement application logic as it
   * leads to a wide array of race conditions.
   *
   * Usually only "protocol" type messages should be sent via the WebSocket connection.
   */

  const close = () => {
    websocketConnection.close();
  };

  return {
    close: close,
  };
};
