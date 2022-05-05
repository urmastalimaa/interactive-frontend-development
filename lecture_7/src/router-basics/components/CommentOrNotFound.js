import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useParams, useNavigate, Route } from "react-router-dom";
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
  const navigate = useNavigate();
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
        navigate("/comments");
      })
      .catch(() => {
        /*
         * Having identical behaviour on failure and success is generally
         * **not** a good idea.
         */
        navigate("/comments");
      });
  };

  if (comment) {
    return (
      <Comment author={comment.author} key={comment.id} onDelete={onDelete}>
        {comment.text}
      </Comment>
    );
  } else {
    return <div className="notification warning">Comment #{commentId} not found</div>;
  }
};

CommentOrNotFound.propTypes = {
  findCommentById: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};
