import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const CommentList = (props) => {
  console.count('CommentList render'); // eslint-disable-line no-console
  const comments = props.comments.map((comment) => {
    return (
      <li key={comment.id}>
        <Link to={`/comments/${comment.id}`}>Author: {comment.author}</Link>
      </li>
    );
  });

  // Use different views for in-flight, succeeded and failed requests.

  if (props.fetchState.inFlight) {
    return <h3>Fetching comments...</h3>;
  } else if (props.fetchState.error) {
    return (
      <div>
        <h3>Failed to fetch comments</h3>
        <p>{props.fetchState.error}</p>
        <button onClick={props.onRequestComments}>Request comments</button>
      </div>
    );
  } else {
    return (
      <div className='commentList'>
        <button onClick={props.onRequestComments}>Request comments</button>
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
