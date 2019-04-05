import React from 'react';
import PropTypes from 'prop-types';

// This CommentForm does not hold state itself. Instead form state is synced
// with redux store. If the current form state is important to application
// state, it should be synced with the store, otherwise it might be better to
// avoid creating unnecessary application state changes.
const CommentForm = (props) => {
  const onAuthorChange = (event) => props.onAuthorChange(event.target.value);
  const onTextChange = (event) => props.onTextChange(event.target.value);
  const onSubmit = (event) => props.handleSubmit();

  return (
    <div className='comment-form'>
      <h3>Comment form</h3>
      <input
        name="author"
        type="text"
        placeholder="Your name"
        value={props.author}
        onChange={onAuthorChange}
      />
      <input
        name="text"
        type="text"
        placeholder="Say something..."
        value={props.text}
        onChange={onTextChange}
      />
      <button type='submit' onClick={onSubmit}>
        {props.submitText}
      </button>
    </div>
  );
};

CommentForm.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  submitText: PropTypes.string.isRequired,
  onAuthorChange: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default CommentForm;
