import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => {
  const statusText = props.inFlight ? 'Comment in flight ...' : '';
  return (
    <div className="comment">
      {statusText}
      <h3 className="comment-author">
        {props.author} said:
      </h3>
      {props.children}
    </div>
  );
};

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  inFlight: PropTypes.bool
};

export default Comment;
