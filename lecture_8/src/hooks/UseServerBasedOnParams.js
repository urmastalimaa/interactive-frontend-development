import { createServer as createActualServer } from "../ServerAPI";
import { createServer as createFakeServer } from "../FakeServerAPI";
import { useEffect, useState } from "react";

/**
 * Chooses an actual or fake server based on query parameters of current
 * document.location.
 *
 * The server remains unchanged when unrelated query parameters change.
 *
 * @return {Object} server The desired server
 */
export default () => {
  /*
   * Custom hooks must be named `useXXX` as a convention.
   * Custom hooks can use other hooks to define their behaviour.
   *
   * Custom hooks should be used sparingly to not overload readers with new
   * semantics. When custom hooks are used, their behaviour must be
   * comprehensively documented.
   */
  const initialServer = document.location.search.match(/fake_server=true/)
    ? createFakeServer()
    : createActualServer();
  const [server, setServer] = useState(initialServer);

  useEffect(() => {
    if (document.location.search.match(/fake_server=true/)) {
      if (!server.fake) {
        setServer(createFakeServer());
      }
    } else {
      if (server.fake) {
        setServer(createActualServer());
      }
    }
  }, [document.location.search, server]);
  return server;
};
