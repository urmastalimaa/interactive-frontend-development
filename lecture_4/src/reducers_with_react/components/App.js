import { useReducer } from "react";
import AppHeader from "./AppHeader";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import Filter from "./Filter";
import {
  reducer,
  initializer,
  commentSubmitted,
  commentDeleted,
  filterSet,
  filteredComments,
  filter,
} from "../Comments";

const App = () => {
  /*
   * All the application logic is contained in the reducer.
   * The App React component is only
   *   - maintaining a variable containing application `state`
   *   - mapping callbacks to action creator functions
   *   - using selector functions to create props
   *
   * The component is unaware of how filtering works, under which "key" the
   * filter is kept etc. Application logic does not leak into the user
   * interface.
   *
   * If the component hierarchy gets deep, `dispatch` can also be passed as a
   * property to child components but most of the components should still use
   * callbacks as passing `dispatch` can make components less understandable
   * and reusable.
   */
  const [state, dispatch] = useReducer(reducer, undefined, initializer);
  const onCommentSubmit = (comment) => dispatch(commentSubmitted(comment));
  const onCommentDelete = (comment) => dispatch(commentDeleted(comment));
  const onFilterChange = (filter) => dispatch(filterSet(filter));
  const comments = filteredComments(state);
  const filterValue = filter(state);

  return (
    <div>
      <AppHeader />
      <CommentForm onSubmit={onCommentSubmit} />
      <Filter value={filterValue} onChange={onFilterChange} />
      <CommentList comments={comments} onCommentDelete={onCommentDelete} />
    </div>
  );
};

export default App;
