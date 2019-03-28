import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => {
  return (
    <div className="comment">
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
};

export default Comment;
