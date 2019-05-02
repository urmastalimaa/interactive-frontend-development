import CommentListReducer from '../../router-basics/reducers/CommentListReducer';
import CommentFilterReducer from '../../router-basics/reducers/CommentFilterReducer';

import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

// `combineReducers` is used to create different _slices_ of application state
// which are managed by different reducers.
export default (history) => combineReducers({
  router: connectRouter(history),
  comments: CommentListReducer,
  filter: CommentFilterReducer
});
