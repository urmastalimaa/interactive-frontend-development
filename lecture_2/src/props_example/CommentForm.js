import React, {Component} from 'react';

/*
  Has `onSubmit` and `text` props. `onSubmit` is a callback function, it will
  be called whenever the button is clicked (i.e form is submitted).
  Note that `CommentForm` does not handle any submitting logic by itself, the
  parent component that creates the callback function contains submission
  logic.
  CommentForm is only a view that represents one kind of a form (which has no
  fields and which you submit by clicking a button).

  `CommentForm` also specifies `defaultProps` to initialize the `text` prop if
  it is not specified in props.
*/
class CommentForm extends Component {
  render() {
    return (
      <button className='comment-form' onClick={this.props.onSubmit}>
        {this.props.text}
      </button>
    );
  }
}
CommentForm.defaultProps = {text: 'Submit a comment'};

export default CommentForm;
