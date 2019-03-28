import React, {Component} from 'react';
import PropTypes from 'prop-types';

import AppHeader from './AppHeader';
import CommentList from './CommentList';
import ControlledCommentForm from './ControlledCommentForm';
import UncontrolledCommentForm from './UncontrolledCommentForm';
import HooksCommentForm from './HooksCommentForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastCommentId: 0,
      comments: []
    };
    this.addComment = this.addComment.bind(this);
    this.controlledCommentForm = React.createRef();
    this.uncontrolledCommentForm = React.createRef();
    this.hooksCommentForm = React.createRef();
  }

  addComment(comment) {
    const newCommentId = this.state.lastCommentId + 1;
    const newComments = this.state.comments.concat({...comment, id: newCommentId});
    this.setState({
      lastCommentId: newCommentId,
      comments: newComments
    });
  }

  render() {
    // Any components can expose functions such as focus, a form being
    // controlled/uncontrolled makes no difference.
    return (
      <div>
        <AppHeader />
        <ControlledCommentForm
          ref={this.controlledCommentForm}
          onSubmit={(comment) => {
            this.addComment(comment);
            if (this.props.focusForms) {
              this.controlledCommentForm.current.focus();
            }
          }}
          text='Submit comment'
        />
        <UncontrolledCommentForm
          ref={this.uncontrolledCommentForm}
          onSubmit={(comment) => {
            this.addComment(comment);
            if (this.props.focusForms) {
              this.uncontrolledCommentForm.current.focus();
            }
          }}
          text='Submit comment'
        />
        <HooksCommentForm
          ref={this.hooksCommentForm}
          onSubmit={(comment) => {
            this.addComment(comment);
            if (this.props.focusForms) {
              this.hooksCommentForm.current.focus();
            }
          }}
          text='Submit comment'
        />
        <CommentList comments={this.state.comments}/>
      </div>
    );
  }
}

App.propTypes = {
  focusForms: PropTypes.bool.isRequired
};

App.defaultProps = {
  focusForms: true
};

export default App;
