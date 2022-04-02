import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import CommentForm from "./CommentForm";
import { ServerContext } from "../ServerContext";
import { commentSubmitted } from "../Comments";
import { makeCancelable } from "../PromiseExtension";

const CommentFormWithServer = ({ dispatch }) => {
  /*
   * This component does not know what kind of "server" is used or how the
   * server is configured. It only relies on the fact that there is a
   * `ServerContext.Provider` defined somewhere above in the component tree,
   * and the value within conforms to an agreed "server" interface.
   */
  const server = useContext(ServerContext);

  /*
   * In contrast to `CommentListWithServer`, this component captures the
   * request state in local state.
   */
  const [requestState, setRequestState] = useState({
    inFlight: false,
    error: null,
  });

  /*
   * When a handler is set to a promise using `then` or `catch`, that handler
   * is executed asynchronously outside of the life-cycle of the component,
   * meaning that the handler can execute after the component has been
   * unmounted!
   * Should this happen, React logs a warning, and for good reason because the
   * component has failed to "clean up".
   *
   * The normal way to clean up with hooks is to use `useEffect`, from which
   * you can return a "clean-up" function. Here that solves two problems at
   * once - cancelling the previous "post" promise when another one starts and
   * avoids calling `setState` on an unmounted component.
   */
  const [requestPromise, setRequestPromise] = useState(null);
  useEffect(() => {
    return () => requestPromise && requestPromise.cancel();
  }, [requestPromise]);

  const onSubmit = ({ author, text }) => {
    setRequestState({ inFlight: true, error: null });
    const postPromise = makeCancelable(server.postComment({ author, text }));
    setRequestPromise(postPromise);

    postPromise.promise
      .then(({ id }) => {
        setRequestState({ inFlight: false, error: null });
        dispatch(commentSubmitted({ id, author, text }));
      })
      .catch((error) => {
        if (!error.isCanceled) {
          setRequestState({ inFlight: false, error: error.message });
        }
      });
  };

  // Use different views for in-flight, succeeded and failed requests.
  if (requestState.inFlight) {
    return <h3>Posting comment...</h3>;
  } else if (requestState.error) {
    return (
      <div>
        <div className="notification warning">
          <h3>Failed to post comment</h3>
          <p>{requestState.error}</p>
        </div>
        <CommentForm onSubmit={onSubmit} />
      </div>
    );
  } else {
    return <CommentForm onSubmit={onSubmit} />;
  }
};

CommentFormWithServer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default CommentFormWithServer;
