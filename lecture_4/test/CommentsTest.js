import { expect } from "chai";
import {
  commentDeleted,
  commentSubmitted,
  filteredComments,
  filterSet,
  initializer,
  reducer,
} from "../src/reducers_with_react/Comments";

describe("Comments", () => {
  it("adds comments", () => {
    const initialState = initializer();
    const state = reducer(
      initialState,
      commentSubmitted({ author: "foo", text: "bar" })
    );
    // Using selector functions in tests as well as components allows the state
    // object to be easily refactored.
    expect(filteredComments(state).length).to.eql(1);
  });

  /*
   * Helper functions can always be used to simplify test setup
   */
  const createStateWithComment = (commentAttributes) =>
    reducer(initializer(), commentSubmitted(commentAttributes));

  it("deletes comments", () => {
    const initialState = createStateWithComment({ author: "foo", text: "bar" });
    const commentToDelete = filteredComments(initialState)[0];
    const state = reducer(initialState, commentDeleted(commentToDelete));
    expect(filteredComments(state)).to.be.empty;
  });

  it("filters comments", () => {
    const initialState = createStateWithComment({ author: "foo", text: "bar" });
    const stateWithTwoComments = reducer(
      initialState,
      commentSubmitted({ author: "fooz", text: "baz" })
    );
    const state = reducer(stateWithTwoComments, filterSet("fooz"));
    expect(filteredComments(state))
      .to.have.lengthOf(1)
      .and.to.have.nested.property("[0].author", "fooz");
  });
});
