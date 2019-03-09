import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Example of controlled form
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Refs allow accessing the underlying DOM elements tied to React elements.
    // This is usually only necessary for creating side-effects, such as
    // focusing inputs which do not map well to React's functional nature.
    this.authorInput = React.createRef();
  }

  focus() {
    // The DOM element is accessible through the ref's `current` attribute.
    this.authorInput.current.focus();
  }

  handleInputChange(event) {
    // Update state, matching state key with input name.
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
  }

  onSubmit() {
    // Get author, text values from React state.
    this.props.onSubmit(this.state);
    // Clear React state
    this.setState({author: '', text: ''});
  }

  render() {
    // The input element is tied with the reference created in constructor. The
    // reference is taken for allowing focusing the input.
    const props = this.props;
    return (
      <div className='comment-form'>
        <h3>Controlled form</h3>
        <input
          ref={this.authorInput}
          name="author"
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleInputChange}
        />
        <input
          name="text"
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleInputChange}
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
