import {
  commentDeleted,
  commentSubmitted,
  filteredComments,
  filterSet,
  initializer,
  reducer,
} from "../src/reducers_with_react/Comments";

describe("Comments", () => {
  test("adds comments", () => {
    const initialState = initializer();
    const state = reducer(
      initialState,
      commentSubmitted({ author: "foo", text: "bar" })
    );
    // Using selector functions in tests as well as components allows the state
    // object to be easily refactored.
    expect(filteredComments(state)).toHaveLength(1);
  });

  /*
   * Helper functions can always be used to simplify test setup
   */
  const createStateWithComment = (commentAttributes) =>
    reducer(initializer(), commentSubmitted(commentAttributes));

  test("deletes comments", () => {
    const initialState = createStateWithComment({ author: "foo", text: "bar" });
    const commentToDelete = filteredComments(initialState)[0];
    const state = reducer(initialState, commentDeleted(commentToDelete));
    expect(filteredComments(state)).toHaveLength(0);
  });

  test("filters comments", () => {
    const initialState = createStateWithComment({ author: "foo", text: "bar" });
    const stateWithTwoComments = reducer(
      initialState,
      commentSubmitted({ author: "fooz", text: "baz" })
    );
    const state = reducer(stateWithTwoComments, filterSet("fooz"));
    const comments = filteredComments(state);
    expect(comments).toHaveLength(1);
    expect(comments).toHaveProperty("[0].author", "fooz");
  });
});
