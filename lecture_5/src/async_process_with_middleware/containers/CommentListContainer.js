import CommentList from '../../async_process_basics/components/CommentList';
import {connect} from 'react-redux';
import {filterComments} from '../../async_process_basics/reducers/CommentListReducer';
import {getCommentsRequested} from '../../async_process_basics/actions';

const mapStateToProps = (state) => ({
  comments: filterComments({
    comments: state.comments.comments,
    filterText: state.filter
  }),
  fetchState: state.comments.fetchState
});

const mapDispatchToProps = (dispatch) => ({
  onRequestComments: () => dispatch(getCommentsRequested())
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
