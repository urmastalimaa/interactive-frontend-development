import CommentForm from '../components/CommentForm';
import {connect} from 'react-redux';
import {commentSubmitted} from '../actions';

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({author, text}) => dispatch(commentSubmitted({author, text}))
});

const mapStateToProps = undefined; // no state required

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
