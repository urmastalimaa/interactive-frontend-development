import React, {Component} from 'react';
import PropTypes from 'prop-types';

// CommentForm is reverted to hold internal state. The current author and text
// are not important for the whole application state. The `Filter` component is
// very different, its current state is important for the application and
// therefore synced with application state.
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
  }

  onSubmit() {
    this.props.onSubmit(this.state);
    this.setState({author: '', text: ''});
  }

  render() {
    return (
      <div className='comment-form'>
        <h3>Comment form</h3>
        <input
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
          Submit comment
        </button>
      </div>
    );
  }
}

CommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CommentForm;
