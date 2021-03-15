import { expect } from "chai";
import { render, screen } from "@testing-library/react";
import Comment from "../src/path_to_hooks/Comment";

describe("Comment", () => {
  // For simple components just smoke-testing that rendering succeeds is
  // sufficient. If there is logic in the component, further testing is
  // required.
  it("renders", () => {
    render(<Comment author="author">text</Comment>);
  });

  // It is useful to test that containment works as expected.
  it("renders contained element", () => {
    render(<Comment author="author">comment-text</Comment>);
    screen.getByText("comment-text");
  });

  // How useful is this test?
  //
  // It is way too specific.
  // The component cannot be changed in any way without also changing the test
  it("renders div with comment class and h3 with author and contained text", () => {
    const result = render(<Comment author="author">contained</Comment>);
    expect(result.container.innerHTML).contain(
      '<h3 class="comment-author">author said:</h3>contained'
    );
  });
});
