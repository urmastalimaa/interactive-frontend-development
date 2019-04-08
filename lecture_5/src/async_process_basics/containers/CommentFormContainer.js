import CommentForm from '../components/CommentForm';
import {connect} from 'react-redux';
import {postComment} from '../actions/CommentServerActions';

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({author, text}) => dispatch(postComment({author, text}))
});

const mapStateToProps = undefined;

// If there are no props to create from state, `mapStateToProps` can be
// omitted.
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
