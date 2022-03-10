import { useReducer, useRef } from "react";
import PropTypes from "prop-types";

import AppHeader from "./AppHeader";
import CommentList from "./CommentList";
import UncontrolledCommentForm from "./UncontrolledCommentForm";
import HooksCommentForm from "./HooksCommentForm";
import {
  initializer as commentingInitializer,
  reducer as commentingReducer,
} from "./Commenting";

export const App = ({ focusForms }) => {
  // Application logic assigns an ID to a comment whenever one is added.
  // The component here is however totally unaware of when and how such IDs are generated,
  // all the logic is captured in ./Commenting.js
  //
  // See the documentation of useReducer in https://reactjs.org/docs/hooks-reference.html
  const [state, dispatch] = useReducer(
    commentingReducer,
    undefined,
    commentingInitializer
  );

  // See the documentation of useRef in https://reactjs.org/docs/hooks-reference.html
  const uncontrolledCommentForm = useRef();
  const hooksCommentForm = useRef();

  const addComment = (comment) =>
    dispatch({ type: "addComment", comment: comment });

  // Any components can expose functions such as focus, a form being
  // controlled/uncontrolled makes no difference.
  return (
    <div>
      <AppHeader />
      <UncontrolledCommentForm
        ref={uncontrolledCommentForm}
        onSubmit={(comment) => {
          addComment(comment);
          if (focusForms) {
            uncontrolledCommentForm.current.focus();
          }
        }}
        text="Submit comment"
      />
      <HooksCommentForm
        ref={hooksCommentForm}
        onSubmit={(comment) => {
          addComment(comment);
          if (focusForms) {
            hooksCommentForm.current.focus();
          }
        }}
        text="Submit comment"
      />
      <CommentList comments={state.comments} />
    </div>
  );
};

App.propTypes = {
  focusForms: PropTypes.bool.isRequired,
};

App.defaultProps = { focusForms: true };

export default App;
