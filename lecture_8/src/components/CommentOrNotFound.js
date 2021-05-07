import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useParams, useHistory, Route } from "react-router-dom";
import { commentDeleted } from "../Comments";
import Comment from "./Comment";
import { ServerContext } from "../ServerContext";

/*
 * This component now implicitly depends on both `RouterChildContext` and
 * `ServerContext`. This is only OK if the whole application is wrapped in a
 * provider for both contexts, otherwise things get messy.
 */
export const CommentOrNotFound = ({ findCommentById, dispatch }) => {
  console.count("CommentOrNotFound");
  const history = useHistory();
  const commentId = useParams().commentId;
  const comment = findCommentById(commentId);
  const server = useContext(ServerContext);

  const onDelete = () => {
    server
      .deleteComment({ id: commentId })
      .then(() => {
        dispatch(commentDeleted({ id: commentId }));

        /*
         * Navigate to /comments (without triggering a page refresh) as the
         * individual comment can no longer be shown - it was deleted.
         */
        history.push("/comments");
      })
      .catch(() => {
        /*
         * Having identical behaviour on failure and success is generally
         * **not** a good idea.
         */
        history.push("/comments");
      });
  };

  if (comment) {
    return (
      <Comment author={comment.author} key={comment.id} onDelete={onDelete}>
        {comment.text}
      </Comment>
    );
  } else {
    return <div>Comment #{commentId} not found</div>;
  }
};

CommentOrNotFound.propTypes = {
  findCommentById: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export const RoutedComment = ({ findCommentById, dispatch }) => (
  <Route path="/comments/:commentId">
    <CommentOrNotFound findCommentById={findCommentById} dispatch={dispatch} />
  </Route>
);

RoutedComment.propTypes = CommentOrNotFound.propTypes;
