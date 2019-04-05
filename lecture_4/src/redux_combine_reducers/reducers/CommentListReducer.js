import {
  COMMENT_SUBMITTED,
} from '../actions/index.js';

const initialState = [];

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
  case COMMENT_SUBMITTED: {
    const newComments = state.concat({
      id: action.payload.id,
      author: action.payload.author,
      text: action.payload.text
    });
    return newComments;
  }
  default:
    return state;
  }
};

export default commentReducer;

// Selector functions are usually specified close to reducers as they must be
// pure functions that operator on state (similar to reducers).
export const filterComments = ({comments, filterText}) => {
  return comments.filter((comment) =>
    comment.author.match(filterText) || comment.text.match(filterText)
  );
};
