import React, { useState, useEffect, useMemo } from "react";
import AppHeader from "../components/AppHeader";
import { BrowserRouter, Route } from "react-router-dom";
import {
  reducer,
  initializer,
  findCommentById
} from "../Comments";
import CommentFormWithServer from "./CommentFormWithServer";
import { ServerContext } from "../ServerContext";
import useServerBasedOnParams from "../hooks/UseServerBasedOnParams";
import { RoutedComment } from "./CommentOrNotFound";
import { CommentListWithFilter } from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

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
   */
  const store = useMemo(() =>
    configureStore({
        preloadedState: initializer(),
        reducer,
        devTools: true
      }
    ), []);

  /*
   * Dispatch works the same as with `useReducer`, just take it from the store hook
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
    <Provider store={store}>
      <div>
        <AppHeader />
        <Route
          path="/addComment"
          render={() => <CommentFormWithServer dispatch={dispatch} />}
        />
        <CommentListWithFilter state={state} dispatch={dispatch} />
        <RoutedComment findCommentById={findComment} dispatch={dispatch} />
      </div>
    </Provider>
  );
};

const App = () => {
  // A never-changing store due to empty deps provided to useMemo
  const server = useServerBasedOnParams();

  return (
    <BrowserRouter>
      <ServerContext.Provider value={server}>
        <StateApp />
      </ServerContext.Provider>
    </BrowserRouter>
  );
};

export default App;
