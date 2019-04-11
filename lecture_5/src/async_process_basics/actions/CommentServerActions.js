// Note that the Fetch API is not supported in every browser and may need to be
// polyfilled in production code:
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

import {
  getCommentsRequested,
  getCommentsFailed,
  getCommentsSucceeded,
  postCommentRequested,
  postCommentFailed,
  postCommentSucceeded
} from './index';

const SERVER_ADDRESS = 'http://localhost:8081';

// Define one method which executes the asynchronous process
export const postComment = ({author, text, localId}, fetch = window.fetch) => {
  return (dispatch) => {
    const requestAction = postCommentRequested({author, text});
    dispatch(requestAction);
    const localId = requestAction.payload.localId;
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
      dispatch(postCommentFailed({localId, error: 'Service unreachable'}));
    });
  };
};

export const getComments = (fetch = window.fetch) => {
  return (dispatch) => {
    dispatch(getCommentsRequested());
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
