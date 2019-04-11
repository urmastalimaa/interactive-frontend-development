import CommentList from '../components/CommentList';
import {connect} from 'react-redux';
import {filterComments} from '../reducers/CommentListReducer';
import {getComments} from '../actions/CommentServerActions';

const mapStateToProps = (state) => ({
  comments: filterComments({
    comments: state.comments.comments,
    filterText: state.filter
  }),
  fetchState: state.comments.fetchState
});

const mapDispatchToProps = (dispatch) => ({
  onRequestComments: () => dispatch(getComments())
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
