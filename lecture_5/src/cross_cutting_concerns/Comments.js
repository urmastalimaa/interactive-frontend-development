import {
  filterSet,
  filterText,
  filterInitializer,
  filterReducer,
} from "./comments/FilterReducer";
import {
  commentSubmitted,
  commentDeleted,
  commentsFetchStarted,
  commentsFetchSucceeded,
  commentsFetchFailed,
  filterComments,
  commentsInitializer,
  commentsReducer,
} from "./comments/CommentsReducer";

export {
  filterSet,
  commentSubmitted,
  commentDeleted,
  commentsFetchStarted,
  commentsFetchSucceeded,
  commentsFetchFailed,
};

/*
 * Reducer
 */

export const initializer = (initArg) => ({
  comments: commentsInitializer(initArg),
  filter: filterInitializer(initArg),
});

/*
 * The reducer here is a composition of two smaller reducers.
 * Notice that actions and selector functions are imported from the smaller
 * files and re-exported so that the user of this reducer is totally unaware of
 * the implementation details.
 *
 * This pattern is one way of factoring a reducer into smaller pieces.
 */
export const reducer = (state, action) => {
  return {
    comments: commentsReducer(state.comments, action),
    filter: filterReducer(state.filter, action),
  };
};

/*
 * Selector functions
 */

/*
 * This selector function needs to peak into both the "filter" and "comments"
 * state slices. We can do so while retaining encapsulation by using selector
 * functions from the corresponding reducers.
 */
export const filteredComments = ({ filter, comments }) => {
  const filterValue = filterText(filter);
  return filterValue.length == 0 ? comments : filterComments(comments, filter);
};

export const filter = (state) => filterText(state.filter);
