import { StateApp as App } from "../components/App";
import { MemoryRouter as Router } from "react-router-dom";
import { createServer } from "../FakeServerAPI";
import { ServerContext } from "../ServerContext";

const server = createServer();

/*
 * Another way of "decorating" a story is to provide "decorators".
 * The same can be achieved using the "template" pattern.
 * https://storybook.js.org/docs/react/writing-stories/introduction#using-decorators
 */
export default {
  title: "App",
  component: App,
  decorators: [
    (Story) => (
      <ServerContext.Provider value={server}>
        <Router>
          <Story />
        </Router>
      </ServerContext.Provider>
    ),
  ],
};

/*
 * This story renders a fully-functioning application using a fake server and
 * in-memory routing.
 */
export const Default = (args) => <App {...args} />;
