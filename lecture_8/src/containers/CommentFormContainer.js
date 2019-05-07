import CommentForm from '../components/CommentForm';
import {connect} from 'react-redux';
import {postCommentRequested} from '../actions';
import {push} from 'connected-react-router';

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({author, text}) => {
    dispatch(postCommentRequested({author, text}));
    dispatch(push('/comments'));
  }
});

const mapStateToProps = undefined;

// If there are no props to create from state, `mapStateToProps` can be
// omitted.
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
