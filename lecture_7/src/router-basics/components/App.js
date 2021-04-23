import React, { useReducer } from "react";
import PropTypes from "prop-types";
import AppHeader from "../components/AppHeader";
import { BrowserRouter, Route } from "react-router-dom";
import {
  reducer,
  initializer,
  filter,
  filteredComments,
  findCommentById,
  filterSet,
} from "../Comments";
import CommentFormWithServer from "./CommentFormWithServer";
import Filter from "./Filter";
import CommentListWithServer from "./CommentListWithServer";
import { ServerContext } from "../ServerContext";
import useServerBasedOnParams from "../hooks/UseServerBasedOnParams";
import { RoutedComment } from "./CommentOrNotFound";

const CommentListWithFilter = ({ state, dispatch }) => {
  const filterValue = filter(state);
  const commentsRequestState = filteredComments(state);
  const onFilterChange = (filterValue) => dispatch(filterSet(filterValue));
  return (
    <Route path="/comments">
      <Filter value={filterValue} onChange={onFilterChange} />
      <CommentListWithServer
        dispatch={dispatch}
        requestState={commentsRequestState}
      />
    </Route>
  );
};

CommentListWithFilter.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const StateApp = () => {
  console.count("App");
  const [state, dispatch] = useReducer(reducer, undefined, initializer);

  /*
   * Here we choose the server based on query parameters, to illustrate how the
   * value in Context.Provider can change. Similarly, you can provide a
   * different provider in tests, based on user preferences etc.
   */

  const findComment = (id) => findCommentById(state, id);

  /*
   * `Route` components render when the current path matches their `path` prop.
   * The "inside" of the Route can be specified using either a `render`
   * callback or simply by providing `children` to the `Route`.
   * Routes can be defined at any level of the application and if the current
   * URL does not match the `path`, they simply return `null`.
   *
   * Note that the `Route` components act as a separation layer between the
   * components which gives some "optimizations" for free, i.e. when the route
   * changes from "/comments/:foo" to "/comments/:bar", the component defined
   * under "/comments" Route is not re-rendered.
   *
   * Also note that simply defining `children` under a `Route` is made viable
   * by having access to the `Router` context via hooks. Without access to the
   * routing `context` and associated hooks it wouldn't be possible to render
   * `Link` elements, redirects or change the history via `history.pushState`
   * and some "router" object would have to be threaded to the component
   * layers.
   *
   * However, when using hooks instead of simply passing props, the components
   * implicitly depend on the `Router` context being available, which
   * necessitates that any usage of the component - including tests - must wrap
   * the component in a Router context. Also, when a component uses
   * `useParams()` hook, the component is re-rendered every time URL params
   * change.
   *
   * `/comments/:commentId` path matches both the CommentList (/comments) and
   * CommentOrNotFound Routes. The `exact` prop could be specified to show
   * Component only on exact URL match to avoid this.
   *
   * There is one more option, wrapping `Route`-s in a `Switch` component
   * from react-router-dom. A `Switch` renders only a single - first match -
   * `Route`.
   */
  return (
    <div>
      <AppHeader />
      <Route
        path="/addComment"
        render={() => <CommentFormWithServer dispatch={dispatch} />}
      />
      <CommentListWithFilter state={state} dispatch={dispatch} />
      <RoutedComment findCommentById={findComment} dispatch={dispatch} />
    </div>
  );
};

const App = () => {
  const server = useServerBasedOnParams();
  /*
   * Try to move components which do not depend on values from hooks outside of
   * the component. In this case, neither `BrowserRouter` nor `ServerContext`
   * depend on the state from `useReducer` and do not need to be re-rendered
   * whenever state changes.
   */
  return (
    <BrowserRouter>
      <ServerContext.Provider value={server}>
        <StateApp />
      </ServerContext.Provider>
    </BrowserRouter>
  );
};

export default App;
