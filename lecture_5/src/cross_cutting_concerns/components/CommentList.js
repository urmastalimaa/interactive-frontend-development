import Comment from "./Comment";
import PropTypes from "prop-types";

const CommentList = (props) => {
  const commentElements = props.comments.map((comment) => {
    const onDelete = () => props.onCommentDelete(comment);
    return (
      <Comment author={comment.author} key={comment.id} onDelete={onDelete}>
        {comment.text}
      </Comment>
    );
  });
  return (
    <div className="comment-list" title="Comment list" role="list">
      <h2>Comments:</h2>
      {commentElements}
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      id: PropTypes.string.isRequired,
      text: PropTypes.string,
    })
  ).isRequired,
  onCommentDelete: PropTypes.func.isRequired,
};

export default CommentList;
