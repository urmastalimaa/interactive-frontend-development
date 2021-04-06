import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommentFormWithServer from "../src/cross_cutting_concerns/components/CommentFormWithServer";
import Sinon from "sinon";
import { ServerContext } from "../src/cross_cutting_concerns/ServerContext";
import { createServer } from "../src/cross_cutting_concerns/FakeServerAPI";

describe("CommentFormWithServer", () => {
  let server;

  const renderWithFakeServer = () => {
    const dispatch = Sinon.stub();
    server = createServer();
    return render(
      <ServerContext.Provider value={server}>
        <CommentFormWithServer dispatch={dispatch} />
      </ServerContext.Provider>
    );
  };

  const submitComment = () => {
    userEvent.type(
      screen.getByRole("textbox", { name: "Author" }),
      "my-author"
    );
    userEvent.type(screen.getByRole("textbox", { name: "Text" }), "my-comment");
    userEvent.click(screen.getByRole("button", { name: /Submit/ }));
  };

  it("renders", () => {
    renderWithFakeServer();
  });

  it('renders "Posting comment" after submitting comment', () => {
    renderWithFakeServer();
    submitComment();

    screen.getByText(/Posting comment/);
  });

  it("renders comment form after successful submit", () => {
    renderWithFakeServer();
    submitComment();

    // findByXXX returns a promise, mocha waits for promises returned from
    // tests to resolve before passing the test
    return screen.findByRole("button", { name: /Submit/ });
  });

  /*
   * "async" functions are functions in which you can "await" on Promises and
   * where execution continues only after the Promise resolves. "async"
   * functions provide a readable way of waiting on multiple Promises.
   * The return value of an "async" function is a Promise, which behaves in
   * exactly the same way with regards to mocha as the previous test.
   *
   * See more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
   */
  it("renders comment form with error after failed submit", async () => {
    renderWithFakeServer();
    server.respondWithFailure("test-error");
    submitComment();

    await screen.findByText("test-error");
    await screen.findByRole("button", { name: /Submit/ });
  });
});
