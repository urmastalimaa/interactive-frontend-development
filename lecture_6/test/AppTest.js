import { render, screen } from "@testing-library/react";
import Sinon from "sinon";
import {App} from "../src/websocket_basics/App";

/*
 * Instead of pulling in a dependency to mock out an interface such as
 * WebSockets, it is often better to provide a small self-written mock
 * interface to the UI components instead.
 * The UI components should not rely on the intimate details of the WebSocket
 * interface anyway.
 */
const createMockWebSocketInterface = () => {
  /*
   * Create a named "stub" function, the behaviour of which can be later
   * controlled.
   */
  const connectWebSocket = Sinon.stub().named('connect');

  /*
   * Return value of our WebSocket interface allows closing the connection.
   * When called, immediately yield to the onClose argument provided to
   * `connectWebSocket`.
   */
  const close = Sinon.stub().named('close').callsFake(() => {
    connectWebSocket.yieldTo('onClose', {reason: null});
  });

  /*
   * When connect is called, let the connection be established on the _next
   * event loop_ as in reality, the connection is never established
   * _immediately_.
   */
  connectWebSocket.callsFake(() => {
    /*
     * `setTimeout` with delay argument 0, or without the second argument
     * altogether invokes the callback function asynchronously, on the next
     * event loop - i.e. with minimal delay.
     */
    setTimeout(() => {
      connectWebSocket.yieldTo("onOpen");
    });

    // Return value of the stub function
    return ({close});
  });

  return connectWebSocket;
};

describe('App', () => {
  it("renders", async function() {
    const connectWebSocket = createMockWebSocketInterface();

    render(<App connectWebSocket={connectWebSocket}/>);
    screen.getByText("Connection: Connecting");

    await screen.findByText("Connection: Connected");
    screen.getByText("Pings received: 0");

    connectWebSocket.yieldTo("onMessage", {type: "ping", event: {pingCount: 2}});
    screen.getByText("Pings received: 2");

    connectWebSocket.yieldTo("onMessage", {type: "ping", event: {pingCount: 3}});
    // The example App should disconnect on the third ping
    await screen.findByText("Connection: Disconnected");

    /*
     * Default mocha test timeout is 2000 milliseconds and as the re-connection
     * occurs after 2500 milliseconds, we must force the test timeout to be
     * longer.
     *
     * But this is a **terrible idea**, because now our whole test suite is
     * made longer by 2.5 seconds every time it runs.
     * What can be done to remedy this situation?
     */
    this.timeout(5000); // eslint-disable-line no-invalid-this

    // We must also increase the timeout for the `findBy` selector as default
    // timeout is 1000
    // (https://testing-library.com/docs/dom-testing-library/api-async#waitfor)
    await screen.findByText("Connection: Connected", {}, {timeout: 3000});
    screen.getByText("Pings received: 0");
  });
});
