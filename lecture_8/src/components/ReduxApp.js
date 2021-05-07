import React, { useState, useEffect, useMemo } from "react";
import AppHeader from "../components/AppHeader";
import { BrowserRouter, Route } from "react-router-dom";
import {
  reducer,
  initializer,
  findCommentById,
} from "../Comments";
import CommentFormWithServer from "./CommentFormWithServer";
import { ServerContext } from "../ServerContext";
import useServerBasedOnParams from "../hooks/UseServerBasedOnParams";
import { RoutedComment } from "./CommentOrNotFound";
import { CommentListWithFilter } from "./App";
import {createStore} from "redux";

/*
 * This "App" integrates with the Redux state-management library instead of the
 * `useReducer` hook. Redux is the inspiration for the `useReducer` hook so it
 * is not surprising that changing our application to be "a Redux application"
 * is very simple.
 *
 * Note that Redux is a general state management tool and not specific to
 * React, its philosophy just works very well in React applications.  Redux
 * mandates "one store" which would translate to "only one useReducer usage" in
 * pure React terms. You can observe the benefits of the whole reducer-based
 * approach and Redux by observing action history in Redux development tools
 * (https://addons.mozilla.org/et/firefox/addon/reduxdevtools/).
 *
 * See more at https://redux.js.org/introduction/getting-started
 */
export const StateApp = () => {
  /*
   * Create a store passing a reducer and initial state,
   * very similar to `useReducer` hook.
   *
   * A "store enhancer" is provided which hooks the store to the Redux
   * development tools plugin if provided.
   */
  const store = useMemo(() =>
    createStore(
      reducer,
      initializer(),
      /* eslint-disable no-underscore-dangle */
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      /* eslint-enable */
    ), []);

  /*
   * Dispatch works the same as with `useReducer`, just take it from the store
   * interface instead of the hook return value.
   *
   * State is kept up-to-date using `store.subscribe` + `store.getState`
   * functions.
   *
   * The rest of the application works identically.
   *
   */
  const [state, setState] = useState(store.getState());
  useEffect(
    () => store.subscribe(() => setState(store.getState())),
    []
  );
  const dispatch = store.dispatch;

  const findComment = (id) => findCommentById(state, id);

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
  // A never-changing store due to empty deps provided to useMemo
  const server = useServerBasedOnParams();

  return (
    <BrowserRouter>
      <ServerContext.Provider value={server}>
        <StateApp/>
      </ServerContext.Provider>
    </BrowserRouter>
  );
};

export default App;
