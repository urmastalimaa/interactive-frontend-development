/*
  Has `onSubmit` and `text` props. `onSubmit` is a callback function, it will
  be called whenever the button is clicked (i.e form is submitted).
  Note that `CommentForm` does not handle any submitting logic by itself, the
  parent component that creates the callback function contains submission
  logic.
  CommentForm is only a view that represents one kind of a form (which has no
  fields and which you submit by clicking a button).

  `CommentForm` also initializes the `text` prop if it is not specified in props.
*/
const CommentForm = ( {text = "Submit a comment", onSubmit }) => {
  return (
    <button className="comment-form" onClick={onSubmit}>
      {text}
    </button>
  );
}

export default CommentForm;
