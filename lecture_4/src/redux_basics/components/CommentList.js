import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

const CommentList = (props) => {
  const comments = props.comments.map((comment) => {
    return <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>;
  });
  return (
    <div className="commentList">
      {comments}
    </div>
  );
};
CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired,
};
export default CommentList;
