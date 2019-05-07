import {
  GET_COMMENTS_REQUESTED,
  POST_COMMENT_REQUESTED,
  getCommentsFailed,
  getCommentsSucceeded,
  postCommentFailed,
  postCommentSucceeded
} from '../actions';

const SERVER_ADDRESS = 'http://localhost:8081';

export const postComment = ({author, text, localId}, fetch = window.fetch) => {
  return (dispatch) => {
    return fetch(
      SERVER_ADDRESS + '/comments',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({author, text})
      },
    ).then((response) => {
      if (response.ok) {
        response.json().then(
          ({id}) => dispatch(postCommentSucceeded({localId, id})),
          (error) => dispatch(postCommentFailed({localId, error: 'Unparseable response'}))
        );
      } else {
        response.json().then(
          ({error}) => dispatch(postCommentFailed({localId, error: error})),
          (error) => dispatch(postCommentFailed({localId, error: 'Unparseable response'}))
        );
      }
    }).catch((error) => {
      dispatch(dispatch(postCommentFailed({localId, error: 'Service unreachable'})));
    });
  };
};

export const getComments = (fetch = window.fetch) => {
  return (dispatch) => {
    return fetch(SERVER_ADDRESS + '/comments')
      .then((response) => {
        if (response.ok) {
          response.json().then(
            (comments) => dispatch(getCommentsSucceeded(comments)),
            (error) => dispatch(getCommentsFailed('Unparseable response'))
          );
        } else {
          response.json().then(
            ({error}) => dispatch(getCommentsFailed(error)),
            (error) => dispatch(getCommentsFailed('Unparseable response'))
          );
        }
      }).catch((error) => {
        dispatch(dispatch(getCommentsFailed('Service unreachable')));
      });
  };
};

const commentServerMiddleware = (store) => (next) => {
  return (action) => {
    if (action.type === GET_COMMENTS_REQUESTED) {
      store.dispatch(getComments());
    } else if (action.type === POST_COMMENT_REQUESTED) {
      store.dispatch(postComment(action.payload));
    }
    return next(action);
  };
};

export default commentServerMiddleware;
