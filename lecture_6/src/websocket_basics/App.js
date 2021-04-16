import { useEffect, useReducer } from "react";
import PropTypes from 'prop-types';

import { connect as defaultConnectWebSocket } from "./WebSocket";

/*
 * Reducer logic, in the same file just for ease of demonstration
 */
const init = () => ({
  connecting: false,
  connected: false,
  connectionError: null,
  pingCount: 0,
});

/*
 * A separate reducer is extracted to handle all the messages sent by the
 * server. The main reducer does not need to grow when new types of events are
 * added to the WebSocket interface.
 */
const serverMessageReducer = (state, { type, event }) => {
  switch (type) {
    case "ping":
      return { ...state, pingCount: event.pingCount };
    default:
      return state;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CONNECTING":
      return {
        ...state,
        connecting: true,
        connected: false,
        webSocketConnection: action.payload,
        pingCount: 0,
      };
    case "CONNECTED":
      return { ...state, connecting: false, connected: true };
    case "DISCONNECTED":
      return {
        ...state,
        connecting: false,
        connected: false,
        connectionError: action.payload.reason,
      };
    case "MESSAGE_RECEIVED":
      return serverMessageReducer(state, action.payload);
    default:
      throw new Error("Bad WebSocket reducer usage");
  }
};

/*
 * A small UI helper function to interpret connection status and return a
 * description for the UI. Functions are the main tool for de-composition.
 *
 * Having the function defined outside of the scope of the functional component
 * is also a micro-optimization as the component does not have to re-define the
 * function on each render.
 */
const connectionDescription = (state) => {
  if (state.connected) {
    return "Connected";
  } else if (state.connecting) {
    return "Connecting";
  } else {
    const details = state.connectionError ? `(${state.connectionError})` : "";
    return `Disconnected${details}`;
  }
};

/*
 * Similarly, mapping of the `webSocketConnection` interface to actions can be
 * extracted to a small function.
 */
const initiateConnection = (dispatch, connectWebSocket) => {
  // Handle all the three steps of asynchronous processes
  const webSocketConnection = (connectWebSocket || defaultConnectWebSocket)({
    onOpen: () => dispatch({ type: "CONNECTED" }),
    onClose: ({ reason }) =>
      dispatch({ type: "DISCONNECTED", payload: { reason } }),
    onMessage: ({ type, event }) => {
      // Here code is factored such that additional messages can be added to the
      // WebSocket interface without needing changes in this function
      dispatch({ type: "MESSAGE_RECEIVED", payload: { type, event } });
    },
  });
  dispatch({ type: "CONNECTING", payload: webSocketConnection });
  return webSocketConnection;
};

/*
 * An application that
 * - displays WebSocket connection status
 * - displays count of received "ping" messages
 * - reconnects after every 3 "ping" messages, this is done just to demonstrate
 *   connection status changes
 */
export const App = (props) => {
  const [state, dispatch] = useReducer(reducer, init);
  const connectWebSocket = props.connectWebSocket || defaultConnectWebSocket;

  /*
   * Proper usage of `useEffect` is far from trivial. It must first be
   * carefully considered, at which level of the application the effect is
   * introduced. Also, the effect must always be cleared after by providing a
   * "clean-up" function from the `useEffect` callback.
   */
  useEffect(() => {
    const webSocketConnection = initiateConnection(dispatch, connectWebSocket);
    return () => webSocketConnection.close();
  }, [connectWebSocket]);

  /*
   * Multiple `useEffect` calls are allowed and they are generally easier to
   * understand that one large `useEffect`. Also, the `deps` can be different
   * to execute the effect (and the clean-up function) at different times.
   *
   * This `useEffect` however, while functional, is way too brittle, because
   * the relationship between the effect - closing the connection - and the
   * dependencies which include the connection reference is way too
   * intertwined. As an example of brittleness, what happens when the reducer
   * sets `pingCount` to 0 on the `DISCONNECTED` action?
   *
   * A solution in this, somewhat contrived example, would be to further split
   * the `useEffect` hook, moving disconnection effect into one hook and
   * re-connection logic into another one.
   */
  useEffect(() => {
    let timer;
    if (state.pingCount === 3) {
      state.webSocketConnection.close();
      timer = setTimeout(() => initiateConnection(dispatch, connectWebSocket), 2500);
    }

    // Always clear up in useEffect
    return () => clearTimeout(timer);
  }, [state.pingCount, state.webSocketConnection, dispatch, connectWebSocket]);

  /*
   * If there was any need to make the WebSocket interface available to child
   * components, a "context" could be used in the same way as it was done for
   * the HTTP server API.
   */
  return (
    <div>
      <div>Connection: {connectionDescription(state)}</div>
      <div>Pings received: {state.pingCount}</div>
    </div>
  );
};

App.propTypes = {
  connectWebSocket: PropTypes.func
}
