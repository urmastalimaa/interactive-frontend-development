import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

/*
  CommentList has been updated to receive `comments` as props.
  An instance of `Comment` component is created for each comment in `comments`
  array.
  When dealing with lists of elements, each unique element must have a special
  `key` property.
  This allows React to distinguish between elements that changed vs elements
  that were removed and replaced with a different element.
*/
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
