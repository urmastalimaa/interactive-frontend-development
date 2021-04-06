/*
 * Actions
 */

export const commentSubmitted = (commentAttributes) => ({
  type: "commentSubmitted",
  payload: commentAttributes,
});

export const commentDeleted = (comment) => ({
  type: "commentDeleted",
  payload: { id: comment.id },
});

export const commentsFetchStarted = () => ({
  type: "commentsFetchStarted",
});

export const commentsFetchSucceeded = (comments) => ({
  type: "commentsFetchSucceeded",
  payload: comments,
});

export const commentsFetchFailed = (error) => ({
  type: "commentsFetchFailed",
  payload: error,
});

/*
 * Reducer
 */

export const commentsInitializer = () => ({
  inFlight: false,
  error: null,
  response: [],
});

const addComment = (state, comment) => ({
  ...state,
  response: state.response.concat(comment),
});

const deleteComment = (state, { id }) => ({
  ...state,
  response: state.response.filter((comment) => comment.id !== id),
});

export const commentsReducer = (state, action) => {
  switch (action.type) {
    case "commentSubmitted":
      return addComment(state, action.payload);
    case "commentDeleted":
      return deleteComment(state, action.payload);
    case "commentsFetchStarted":
      return { ...state, inFlight: true, error: null };
    case "commentsFetchSucceeded":
      return {
        ...state,
        inFlight: false,
        error: null,
        response: action.payload,
      };
    case "commentsFetchFailed":
      return {
        ...state,
        inFlight: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export const filterComments = (state, filterText) => ({
  ...state,
  response: state.response.filter(
    (comment) =>
    comment.author.match(filterText) || comment.text.match(filterText)
  ),
});
