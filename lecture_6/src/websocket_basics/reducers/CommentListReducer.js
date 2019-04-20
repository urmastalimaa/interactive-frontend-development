import {
  POST_COMMENT_REQUESTED,
  POST_COMMENT_SUCCEEDED,
  POST_COMMENT_FAILED,
  GET_COMMENTS_REQUESTED,
  GET_COMMENTS_SUCCEEDED,
  GET_COMMENTS_FAILED
} from '../actions/index.js';

const initialState = {
  fetchState: {inFlight: false},
  comments: [],
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_COMMENTS_REQUESTED: {
    return {...state,
      fetchState: {inFlight: true}
    };
  }
  case GET_COMMENTS_SUCCEEDED: {
    return {...state,
      fetchState: {inFlight: false},
      comments: action.payload
    };
  }
  case GET_COMMENTS_FAILED: {
    return {...state,
      fetchState: {inFlight: false, error: action.payload},
    };
  }
  case POST_COMMENT_REQUESTED: {
    return {...state,
      comments: state.comments.concat({
        id: action.payload.localId,
        inFlight: true,
        author: action.payload.author,
        text: action.payload.text
      })
    };
  }
  case POST_COMMENT_SUCCEEDED: {
    return {...state,
      comments: state.comments.map((comment) => {
        if (comment.id === action.payload.localId) {
          return {...comment, id: action.payload.id, inFlight: false};
        } else {
          return comment;
        }
      })
    };
  }
  case POST_COMMENT_FAILED: {
    return {...state,
      comments: state.comments.filter((comment) =>
        comment.id !== action.payload.localId
      )
    };
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
