/*
 * An action must be a plain JavaScript object (no instances of classes!).  If
 * dealing with complex objects or instances of class, extract relevant
 * attributes when creating an action.
 */
export const commentSubmitted = (commentAttributes) => ({
  type: "commentSubmitted",
  payload: commentAttributes,
});

export const commentDeleted = (comment) => ({
  type: "commentDeleted",
  payload: { id: comment.id },
});

export const filterSet = (filterText) => ({
  type: "filterSet",
  payload: filterText,
});

export const initializer = () => ({
  comments: [],
  nextId: 1,
  filter: "",
});

/*
 * "Passing through" all state properties using `...state` keeps the function
 * working when new attributes are added to the state object.
 *
 * Note that the user interface is totally unaware of how ID's are generated.
 */
const addComment = (state, comment) => ({
  ...state,
  comments: state.comments.concat({ ...comment, id: state.nextId + 1 }),
  nextId: state.nextId + 1,
});

const deleteComment = (state, { id }) => ({
  ...state,
  comments: state.comments.filter((comment) => comment.id !== id),
});

/*
 * Functions which create new objects based on the state object are called
 * "selector" functions.
 *
 * Note that the user interface is totally unaware of how filtering is
 * implemented.
 */
export const filteredComments = ({ comments, filter }) =>
  filter.length == 0
    ? comments
    : comments.filter(
        (comment) => comment.author.match(filter) || comment.text.match(filter)
      );

export const filter = (state) => state.filter;

export const reducer = (state, action) => {
  switch (action.type) {
    case "commentSubmitted":
      return addComment(state, action.payload);
    case "commentDeleted":
      return deleteComment(state, action.payload);
    case "filterSet":
      return { ...state, filter: action.payload };
    default:
      throw new Error("Invalid Comments reducer usage");
  }
};
