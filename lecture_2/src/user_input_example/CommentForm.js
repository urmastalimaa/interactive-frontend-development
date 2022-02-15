import { useState } from 'react';
import PropTypes from 'prop-types';

/*
  There are two different input fields rendered in `CommentForm`.

  Both have `value={text}` binding the value of the input with
  component state. This means that if you try to type into the field and state
  does not change, the input value stays same, effectively disabling typing
  altogether. The second input also has an `onChange` function which will
  update state and therefore input the input value, allowing typing.

  React also logs a warning to console about input misuse first the first
  input.
*/
const CommentForm = ({ onSubmit }) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('unchangeable text');

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  }

  const onSubmitComment = () => {
    onSubmit({author: author, text: text});
  }

  return (
    <div className="comment-form">
      <input
        type="text"
        placeholder="Say something..."
        value={text}
      />
      <input
        type="text"
        placeholder="Your name"
        value={author}
        onChange={handleAuthorChange}
      />
      <button className="comment-form" onClick={onSubmitComment}>
        Submit comment
      </button>
    </div>
  );
}
CommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CommentForm;
