import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "chai";
import { MemoryRouter, Route } from "react-router";
import CommentList from "../src/router-basics/components/CommentList";

describe("CommentList", () => {
  it("renders without comments", () => {
    render(
      <MemoryRouter>
        <CommentList comments={[]} />
      </MemoryRouter>
    );
  });

  it("renders Comment link for each comment", () => {
    const comments = [
      { id: 1, author: "a", text: "a-text" },
      { id: 2, author: "b", text: "b-text" },
    ];
    render(
      <MemoryRouter>
        <CommentList comments={comments} />
      </MemoryRouter>
    );

    screen.getByText("Author: a");
    screen.getByText("Author: b");
  });

  it("navigates to /comments/:commentId on clicking", () => {
    let currentLocation;
    const comments = [
      { id: "some-comment-id", author: "a", text: "a-text" },
      { id: "another-comment-id", author: "b", text: "b-text" },
    ];
    render(
      <MemoryRouter>
        <CommentList comments={comments} />
        <Route
          path="*"
          render={({ location }) => {
            /*
             * If the "current" or "last" location needs to be accessed in tests,
             * a Route component can be added to the test rendering that is always
             * rendered (path="*") which updates a local variable with the latest
             * location.
             */
            currentLocation = location;
            return null;
          }}
        />
      </MemoryRouter>
    );

    userEvent.click(screen.getByText("Author: a"));
    expect(currentLocation.pathname).to.eql("/comments/some-comment-id");
  });
});
