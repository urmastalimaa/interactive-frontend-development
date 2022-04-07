import PropTypes from "prop-types";

const Comment = (props) => {
  return (
    <div className="comment" role="listitem">
      <p className="comment-author">{props.author} said:</p>
      <p>{props.children}</p>
      <div className="comment__action">
        <button className="red small" onClick={props.onDelete}>Delete</button>
      </div>
    </div>
  );
};

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Comment;
