import CommentList from "../components/CommentList";
import { MemoryRouter as Router } from "react-router-dom";

export default {
  title: "Comments/List",
  component: CommentList,
};

/*
 * A "template" component can be used to wrap and configure the target story
 * component.  New components for the stories can be created by creating new
 * component functions using `bind`, which without arguments just clones a
 * function.
 */
const Template = (args) => (
  <Router>
    <CommentList {...args} />
  </Router>
);

export const Empty = Template.bind({});
Empty.args = {
  comments: [],
};

// Following stories would fail to build without the `Router` wrapper
export const OneComment = Template.bind({});
OneComment.args = {
  comments: [{ id: "a", author: "a", text: "a-text" }],
};

export const ContainingManyComments = Template.bind({});
ContainingManyComments.args = {
  comments: [
    { id: "a", author: "a", text: "a-text" },
    { id: "b", author: "b", text: "b-text" },
    { id: "c", author: "c", text: "c-text" },
    { id: "d", author: "d", text: "d-text" },
  ],
};
