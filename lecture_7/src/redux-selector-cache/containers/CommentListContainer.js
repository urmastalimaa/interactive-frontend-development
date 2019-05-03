import CommentList from '../components/CommentList';
import {connect} from 'react-redux';
import {filterComments} from '../../router-basics/reducers/CommentListReducer';
import {getCommentsRequested} from '../../router-basics/actions';
import {createSelector} from 'reselect';

// Initial try to memoize filtering function
// This doesn't work. Why?
const memoize = (fn) => {
  let previousResult = undefined;
  let previousParams = undefined;
  return (params) => {
    if (params === previousParams) {
      return previousResult;
    } else {
      previousParams = params;
      previousResult = fn(params);
      return previousResult;
    }
  };
};
const filterCommentsMemoized = memoize(({comments, filter}) => // eslint-disable-line no-unused-vars
  filterComments({comments: comments.comments, filter: filter})
);

// Create memoized filter by using `createSelector` from reselect
const filteredCommentsSelector = createSelector( // eslint-disable-line no-unused-vars
  (state) => state.comments.comments,
  (state) => state.filter,
  (comments, filterText) => filterComments({comments, filterText})
);

const mapStateToProps = (state) => ({
  comments: filteredCommentsSelector(state), // Change to filteredCommentsSelector to see render counts drop
  fetchState: state.comments.fetchState
});

const mapDispatchToProps = (dispatch) => ({
  onRequestComments: () => dispatch(getCommentsRequested())
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
