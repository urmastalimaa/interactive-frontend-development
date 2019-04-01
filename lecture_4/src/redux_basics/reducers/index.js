import {
  COMMENT_SUBMITTED,
  TEXT_SET,
  AUTHOR_SET
} from '../actions/index.js';

const initialComments = [];
const initialAuthor = '';
const initialText = '';

const initialState = {
  comments: initialComments,
  author: initialAuthor,
  text: initialText
};

const commentReducer = (state = initialState, action) => {
  // This is executed whenever **any action** occurs in the application
  switch (action.type) {
  case COMMENT_SUBMITTED: {
    // A new comment was submitted, add it to set
    const newComments = state.comments.concat({
      id: action.payload.id,
      author: state.author,
      text: state.text
    });
    return {...state, comments: newComments, author: '', text: ''};
  }
  case AUTHOR_SET: {
    // The author in the form was updated, update state in store
    return {...state, author: action.payload};
  }
  case TEXT_SET: {
    // The text in the form was updated, update state in store
    return {...state, text: action.payload};
  }
  default:
    // Initialization and/or other event which is not handled here, just keep
    // the state from previous call
    return state;
  }
};

export default commentReducer;
