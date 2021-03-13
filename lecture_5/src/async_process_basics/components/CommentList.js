import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

const CommentList = (props) => {
  const comments = props.comments.map((comment) => {
    return (
      <Comment
        author={comment.author}
        key={comment.id}
        inFlight={comment.inFlight}
      >
        {comment.text}
      </Comment>
    );
  });

  // Use different views for in-flight, succeeded and failed requests.

  const requestButton = <button onClick={props.onRequestComments}>Request comments</button>;

  if (props.fetchState.inFlight) {
    return <h3>Fetching comments...</h3>;
  } else if (props.fetchState.error) {
    return (
      <div>
        <h3>Failed to fetch comments</h3>
        <p>{props.fetchState.error}</p>
        {requestButton}
      </div>
    );
  } else {
    return (
      <div className='commentList'>
        {requestButton}
        {comments}
      </div>
    );
  }
};
CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      inFlight: PropTypes.bool
    })
  ).isRequired,
  onRequestComments: PropTypes.func.isRequired,
  fetchState: PropTypes.shape({
    inFlight: PropTypes.bool.isRequired,
    error: PropTypes.string
  }).isRequired
};
export default CommentList;
