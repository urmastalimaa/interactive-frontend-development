import Comment from '../props_example/Comment';

/*
  CommentList has been updated to receive `comments` as props.
  A `Comment` component is created for each comment in `comments` array.
  When dealing with lists of elements, each unique element must have a special
  `key` property.
  This allows React to distinguish between elements that changed vs elements
  that were removed and replaced with a different element.
*/
const CommentList = ({ comments }) => {
  const commentElements = comments.map((comment) => {
    return (
      <Comment author={comment.author} key={comment.id}>
        {comment.text}
      </Comment>
    );
  });

  return <div className="comment-list">{commentElements}</div>;
}

export default CommentList;
