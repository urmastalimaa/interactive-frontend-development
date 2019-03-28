import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Example of uncontrolled form
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.focus = this.focus.bind(this);
    this.authorInput = React.createRef();
    this.textInput = React.createRef();
  }

  focus() {
    this.authorInput.current.focus();
  }

  onSubmit() {
    // Get author, text values from input refs
    const author = this.authorInput.current.value;
    const text = this.textInput.current.value;

    // Clear inputs by directly manipulating DOM because the values are not
    // synced with this component state.
    this.authorInput.current.value = '';
    this.textInput.current.value = '';

    this.props.onSubmit({author, text});
  }

  render() {
    const props = this.props;
    return (
      <div className='comment-form'>
        <h3>Uncontrolled form</h3>
        <input
          ref={this.authorInput}
          name="author"
          type="text"
          placeholder="Your name"
        />
        <input
          ref={this.textInput}
          name="text"
          type="text"
          placeholder="Say something..."
        />
        <button type='submit' onClick={this.onSubmit}>
          {props.text}
        </button>
      </div>
    );
  }
}

CommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  text: PropTypes.string
};

export default CommentForm;
