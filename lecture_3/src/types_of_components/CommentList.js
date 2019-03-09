import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

const CommentList = (props) => {
  const commentElements = props.comments.map((comment) => {
    return (
      <Comment author={comment.author} key={comment.id}>
        {comment.text}
      </Comment>
    );
  });
  return (
    <div className="comment-list">
      <h2>Comments:</h2>
      {commentElements}
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    id: PropTypes.number,
    text: PropTypes.string
  })).isRequired
};

export default CommentList;
