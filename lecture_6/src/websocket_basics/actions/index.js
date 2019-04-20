let commentCounter = 0;

export const POST_COMMENT_REQUESTED = 'POST_COMMENT_REQUESTED';
export const postCommentRequested = (comment) => {
  commentCounter += 1;
  const localId = commentCounter.toString();

  return {
    type: POST_COMMENT_REQUESTED,
    payload: {...comment, localId}
  };
};

export const POST_COMMENT_SUCCEEDED = 'POST_COMMENT_SUCCEEDED';
export const postCommentSucceeded = (response) => ({
  type: POST_COMMENT_SUCCEEDED,
  payload: response
});

export const POST_COMMENT_FAILED = 'POST_COMMENT_FAILED';
export const postCommentFailed = (reason) => ({
  type: POST_COMMENT_FAILED,
  payload: reason
});

export const GET_COMMENTS_REQUESTED = 'GET_COMMENTS_REQUESTED';
export const getCommentsRequested = () => ({type: GET_COMMENTS_REQUESTED});

export const GET_COMMENTS_SUCCEEDED = 'GET_COMMENTS_SUCCEEDED';
export const getCommentsSucceeded = (comments) => ({
  type: GET_COMMENTS_SUCCEEDED,
  payload: comments
});

export const GET_COMMENTS_FAILED = 'GET_COMMENTS_FAILED';
export const getCommentsFailed = (reason) => ({
  type: GET_COMMENTS_FAILED,
  payload: reason
});

export const FILTER_SET = 'FILTER_SET';
export const filterSet = (filter) => ({
  type: FILTER_SET,
  payload: filter
});
