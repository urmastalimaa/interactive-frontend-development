import React from 'react';
import Comment from '../components/Comment';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const CommentOrNotFound = ({comment, commentId}) => {
  if (comment) {
    return <Comment author={comment.author} inFlight={comment.inFlight}>{comment.text}</Comment>;
  } else {
    return <p>Comment {commentId} not found</p>;
  }
};
CommentOrNotFound.propTypes = {
  comment: PropTypes.object,
  commentId: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
  // Use match.params provided by React Router to get comment ID
  const commentId = ownProps.match.params.commentId;
  // Find comment by ID from comments in state
  const comment = state.comments.comments.find((comment) => comment.id === commentId);
  return {comment, commentId: commentId};
};

export default connect(mapStateToProps)(CommentOrNotFound);
