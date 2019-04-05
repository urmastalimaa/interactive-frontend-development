import CommentListReducer from './CommentListReducer';
import CommentFilterReducer from './CommentFilterReducer';

import {combineReducers} from 'redux';

// `combineReducers` is used to create different _slices_ of application state
// which are managed by different reducers.
export default combineReducers({
  comments: CommentListReducer,
  filter: CommentFilterReducer
});
