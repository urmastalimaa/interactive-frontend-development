import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "../src/path_to_hooks/App";

describe("App", () => {
  test("renders heading", () => {
    render(<App />);
    screen.getByRole("heading", { name: "Comment App" });
  });

  test("renders 3 comment forms", () => {
    render(<App />);
    expect(screen.getAllByRole("textbox")).toHaveLength(3 * 2);
  });

  // Application logic should be tested. It is however much more convenient to
  // test individual functions directly rather than through React.
  test("adds new comment to list when submitted from form", () => {
    render(<App />);

    const form = within(screen.getByTitle("Hooks form"));

    userEvent.type(form.getByRole("textbox", { name: "Author" }), "my-author");
    userEvent.type(form.getByRole("textbox", { name: "Text" }), "my-comment");
    userEvent.click(form.getByRole("button"));

    const list = within(screen.getByTitle("Comment list"));

    list.getByText("my-author said:");
    list.getByText("my-comment");
  });
});
