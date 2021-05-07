import PropTypes from "prop-types";

const Comment = (props) => {
  return (
    <div className="comment">
      <h3 className="comment-author">{props.author} said:</h3>
      {props.children}
      <div>
        <button onClick={props.onDelete}>DELETE</button>
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
