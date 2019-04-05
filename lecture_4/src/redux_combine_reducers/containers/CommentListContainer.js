import CommentList from '../../redux_basics/components/CommentList';
import {connect} from 'react-redux';
import {filterComments} from '../reducers/CommentListReducer';

const mapStateToProps = (state) => ({
  // Selector functions can be used to create new objects based on application
  // state.
  // Note that it is a *very bad idea* to put the filtered comment list into
  // application state. If that would be done, state in application would be
  // duplicated and updating it would become more complex.
  comments: filterComments({
    comments: state.comments,
    filterText: state.filter
  })
});

const mapDispatchToProps = undefined; // no dispatched actions

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
