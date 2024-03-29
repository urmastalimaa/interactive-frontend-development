import {useState} from 'react';
import PropTypes from 'prop-types';

const CommentForm = (props) => {
  const [author, setAuthor] = useState('');
  const onAuthorChange = (event) => setAuthor(event.target.value);

  const [text, setText] = useState('');
  const onTextChange = (event) => setText(event.target.value);

  const submit = () => {
    setAuthor('');
    setText('');
    props.onSubmit({author, text});
  };

  return (
    <div className="comment-form" title="Comment form">
      <h2>Comment form</h2>
      <div className="input__container">
        <label htmlFor="author-input">Author</label>
        <input
          id="author-input"
          name="author"
          type="text"
          placeholder="Your name"
          value={author}
          onChange={onAuthorChange}
        />
      </div>
      <div className="input__container">
        <label htmlFor="text-input">Text</label>
        <input
          id="text-input"
          name="text"
          type="text"
          placeholder="Say something..."
          value={text}
          onChange={onTextChange}
        />
      </div>
      <button type="submit" onClick={submit}>
        Submit comment
      </button>
    </div>
  );
};

CommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CommentForm;
