const websocketConf = {
  port: 8081,
  host: 'localhost'
};

// Helper function to create a standard query string from a parameter object
// Note that URLSearchParams is not supported in older browsers and may need to
// be polyfilled
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
const objectToQueryString = (obj) => {
  const params = new URLSearchParams();
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      params.append(p, obj[p]);
    }
  }
  return params.toString();
};

export const connect = ({onOpen, onClose, onMessage, parameters = {}}) => {
  // `ws` signifies the websocket protocol
  // `wss` would be secure websocket protocol (like https)
  const websocketConnection = new WebSocket(
    `ws://${websocketConf.host}:${websocketConf.port}/?${objectToQueryString(parameters)}`
  );

  websocketConnection.onopen = () => onOpen();

  websocketConnection.onclose = (event) => {
    // WebSocket might be disconnected by a server with a specific reason
    const reason = event.reason;
    onClose({reason});
  };

  websocketConnection.onmessage = (messageEvent) => {
    // In this example `data` is JSON encoded in an UTF-8 String
    const payload = messageEvent.data;

    let parsedMessage;
    try {
      parsedMessage = JSON.parse(payload);
    } catch (error) {
      console.error('error parsing websocket message', error, payload); // eslint-disable-line no-console
      return;
    }

    onMessage(parsedMessage);
  };

  const close = () => {
    websocketConnection.close();
  };

  return {
    close: close
  };
};
