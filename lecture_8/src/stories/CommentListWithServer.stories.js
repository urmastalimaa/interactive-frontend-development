import CommentListWithServer from "../components/CommentListWithServer";
import { MemoryRouter as Router } from "react-router-dom";
import { createServer } from "../FakeServerAPI";
import { ServerContext } from "../ServerContext";

const server = createServer();

export default {
  title: "Comments/ListWithServer",
  component: CommentListWithServer,
  argTypes: {
    dispatch: { action: "dispatch" },
  },
};

/*
 * A "template" component can be used to wrap and configure the target story
 * component.  New components for the stories can be created by creating new
 * component functions using `bind`, which without arguments just clones a
 * function.
 */
const Template = (args) => (
  <ServerContext.Provider value={server}>
    <Router>
      <CommentListWithServer {...args} />
    </Router>
  </ServerContext.Provider>
);

export const Fetching = Template.bind({});
Fetching.args = {
  requestState: {
    inFlight: true,
  },
};

export const Error = Template.bind({});
Error.args = {
  requestState: {
    inFlight: false,
    error: "Service Unavailable",
  },
};

// This story requires both the server and the router wrappers
export const WithComments = Template.bind({});
WithComments.args = {
  requestState: {
    inFlight: false,
    error: null,
    response: [{ id: "a", author: "a", text: "a-text" }],
  },
};
