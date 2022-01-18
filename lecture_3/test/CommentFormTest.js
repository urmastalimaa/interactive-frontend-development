import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CommentForm from "../src/path_to_hooks/ControlledCommentForm";

describe("CommentForm", () => {
  // This test has both good and bad examples.
  //
  // Bad practice is to assert presence of exact markup.
  //
  // Better practice is to assert presence of text and of elements with a
  // "role". A "role" here is an implicit ARIA role which generally maps to
  // what kind of content a user sees (or hears when vision is impaired!) on the page.
  //
  // See https://www.w3.org/TR/html-aria/#docconformance for how HTML elements map to roles.
  // Do not underestimate the importance of accessibility!
  test("has an h3, two text boxes and a button", () => {
    const rendering = render(
      <CommentForm onSubmit={jest.fn()} text="button-text" />
    );

    // Bad
    expect(rendering.container.innerHTML).toContain(
      "<h3>Controlled form</h3>"
    );
    // Better
    screen.getByRole("heading", { name: "Controlled form" });

    // Also good
    expect(screen.getAllByRole("textbox")).toHaveLength(2);
    screen.queryByRole("button", { name: "button-text" });
  });

  // Testing callbacks and the arguments that callbacks receive is generally
  // very useful.
  test("calls onSubmit with author and text when submit button clicked", () => {
    const onSubmit = jest.fn();
    render(<CommentForm onSubmit={onSubmit} text="text" />);

    // Using @testing-library query methods and avoiding using .querySelector directly
    // forces us towards having an application with good accessibility.
    userEvent.type(screen.getByRole("textbox", { name: "Author" }), "foo");
    userEvent.type(screen.getByRole("textbox", { name: "Text" }), "bar");
    userEvent.click(screen.getByRole("button"));

    expect(onSubmit).toHaveBeenCalledWith({ author: "foo", text: "bar" });
  });

  // Testing any other behaviour that a component has is also useful
  test("clears inputs after submit", () => {
    render(<CommentForm onSubmit={jest.fn()} text="text" />);

    userEvent.type(screen.getByRole("textbox", { name: "Author" }), "foo");
    userEvent.type(screen.getByRole("textbox", { name: "Text" }), "bar");
    userEvent.click(screen.getByRole("button"));

    expect(screen.getByRole("textbox", { name: "Author" })).toHaveProperty(
      "value",
      ""
    );
    expect(screen.getByRole("textbox", { name: "Text" })).toHaveProperty(
      "value",
      ""
    );
  });
});
