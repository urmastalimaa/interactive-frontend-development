import React from 'react';
import PropTypes from 'prop-types';

import AppHeader from '../components/AppHeader';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import {connect} from 'react-redux';
import {commentSubmitted, authorSet, textSet} from '../actions';

// App could be moved to a separate file under components folder, but sometimes
// having a trivial presentational component together with its container can be
// easier to maintain.

const App = (props) => {
  return (
    <div>
      <AppHeader />
      <CommentForm
        author={props.author}
        text={props.text}
        submitText='Submit comment'
        handleSubmit={props.commentSubmitted}
        onAuthorChange={props.onAuthorChange}
        onTextChange={props.onTextChange}
      />
      <CommentList comments={props.comments}/>
    </div>
  );
};

App.propTypes = {
  comments: PropTypes.array.isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onAuthorChange: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  commentSubmitted: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    text: state.text,
    author: state.author
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    commentSubmitted: () => dispatch(commentSubmitted()),
    onAuthorChange: (author) => dispatch(authorSet(author)),
    onTextChange: (text) => dispatch(textSet(text))
  };
};

// `connect` creates a React component that uses `store.dispatch`,
// `store.subscribe`, `store.getState()` from Redux store to pass props to the
// provided presentational component. The component is only updated when the
// props provided from `mapStateToProps` change (implementing React
// `shouldComponentUpdate` hooks)
export default connect(mapStateToProps, mapDispatchToProps)(App);
