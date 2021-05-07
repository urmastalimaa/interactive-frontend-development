import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CommentList = (props) => {
  /*
   * Link implicitly depends on a `Router` context being available,
   * which in turn makes this component depend on a `Router` context.
   *
   * By introducing more and more implicit dependencies, components can become
   * hard to understand and test, which is why React.Context should be used
   * sparingly.
   */
  const commentElements = props.comments.map((comment) => {
    return (
      <li key={comment.id}>
        <Link to={`/comments/${comment.id}`}>Author: {comment.author}</Link>
      </li>
    );
  });
  return (
    <div className="comment-list" title="Comment list">
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
    })
  ).isRequired,
};

export default CommentList;
