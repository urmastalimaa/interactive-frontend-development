import { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import CommentList from "./CommentList";

import {
  commentsFetchStarted,
  commentsFetchSucceeded,
  commentsFetchFailed,
} from "../Comments";
import { ServerContext } from "../ServerContext";

/*
 * Instead of cramming all functionality into one component, the `CommentList`
 * was kept as before and the concerns regarding comments coming from a remote
 * server were gathered into this component.
 *
 * Also, as the App component was growing in complexity, deleting comments was
 * moved into this component as well.
 *
 */
const CommentListWithServer = ({ requestState, dispatch }) => {
  console.count("CommentListWithServer");
  /*
   * This component does not know what kind of "server" is used or how the
   * server is configured. It only relies on the fact that there is a
   * `ServerContext.Provider` defined somewhere above in the component tree,
   * and the value within conforms to an agreed "server" interface.
   */
  const server = useContext(ServerContext);

  /*
   * Here there are two choices:
   *   - Use local state to capture request state. This way the fact that
   *   requests are in flight or can fail does not leak into the "Comments"
   *   reducer. This option can not be used if other components outside of
   *   CommentList need to know about the request state.
   *   - Use dispatch from parent to notify "Comments" reducer of server
   *   interactions and let the reducer handle managing state. This option
   *   includes "all" the state under the "Comments" reducer, which makes the
   *   reducer more complex.
   *
   * Both options are valid and circumstances dictate what's best.
   *
   * Here, just to demonstrate the option, we use `dispatch` from parent and
   * include the requests state in the reducer.
   */
  const refreshCommentsFromServer = () => {
    dispatch(commentsFetchStarted());
    const getPromise = server.getComments();

    /*
     * If comment fetching request state is important to the rest of the
     * application and not just for local state for this component, it may be
     * still necessary to dispatch the actions after the component has been
     * unmounted.
     */
    getPromise
      .then((comments) => dispatch(commentsFetchSucceeded(comments)))
      .catch((error) => dispatch(commentsFetchFailed(error)));
  };

  // Refresh comments on component mount, but only if no request has been made yet.
  useEffect(() => {
    if (!requestState.anyResponseReceived) {
      refreshCommentsFromServer();
    }
  }, [requestState.anyResponseReceived]);

  const requestButton = (
    <button onClick={refreshCommentsFromServer}>Refresh comments</button>
  );

  // Use different views for in-flight, succeeded and failed requests.
  if (requestState.inFlight) {
    return <h3>Fetching comments...</h3>;
  } else if (requestState.error) {
    return (
      <div>
        <h3>Failed to fetch comments</h3>
        <p>{requestState.error}</p>
        {requestButton}
      </div>
    );
  } else {
    return (
      <div className="commentList">
        {requestButton}
        <CommentList comments={requestState.response} />
      </div>
    );
  }
};

CommentListWithServer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  requestState: PropTypes.shape({
    inFlight: PropTypes.bool.isRequired,
    error: PropTypes.string,
    response: PropTypes.array,
  }).isRequired,
};

export default CommentListWithServer;
