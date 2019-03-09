import React, {Component} from 'react';
import PropTypes from 'prop-types';

/*
  There are two different input fields rendered in `CommentForm`.

  Both have `value={this.state.text}` binding the value of the input with
  component state. This means that if you try to type into the field and state
  does not change, the input value stays same, effectively disabling typing
  altogether. The second input also has an `onChange` function which will
  update state and therefore input the input value, allowing typing.

  React also logs a warning to console about input misuse first the first
  input.
*/
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: 'unchangeable text'
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleAuthorChange(event) {
    this.setState({author: event.target.value});
  }

  onSubmit() {
    this.props.onSubmit({author: this.state.author, text: this.state.text});
  }

  render() {
    return (
      <div className='comment-form'>
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
        />
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange.bind(this)}
        />
        <button className='comment-form' onClick={this.onSubmit}>
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
