/**
 * A fake server that just keeps an in-memory array of comments.
 * The server can be modified to start responding with failure.
 *
 * @return {Object} Server API - {postComment, deleteComment, getComments} and
 *   additionally, {fake: true, respondWithSuccess, respondWithFailure}.
 */
export const createServer = () => {
  let comments = [];
  let lastId = 0;

  let errorOnActions = null;
  const maybeError = (successReturnValue) =>
    errorOnActions
      ? Promise.reject(errorOnActions)
      : Promise.resolve(successReturnValue);

  const postComment = (comment) => {
    lastId++;
    const id = lastId.toString();
    comments = comments.concat({ ...comment, id });
    return maybeError({ id });
  };

  const deleteComment = ({ id }) => {
    comments = comments.filter((comment) => comment.id !== id);
    return maybeError({ id });
  };

  const getComments = () => {
    return maybeError(comments);
  };

  /*
   * Simple functions to control server behaviour for tests
   */
  const respondWithSuccess = () => {
    errorOnActions = null;
  };
  const respondWithFailure = (errorMessage) => {
    errorOnActions = new Error(errorMessage);
  };

  return {
    postComment,
    deleteComment,
    getComments,
    fake: true,
    respondWithSuccess,
    respondWithFailure,
  };
};
