import React from 'react';

import AppHeader from '../components/AppHeader';
import CommentContainer from './CommentContainer';
import CommentListContainer from './CommentListContainer';
import CommentFormContainer from './CommentFormContainer';
import FilterContainer from './FilterContainer';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const CommentsWithFilter = () => (
  <div>
    <FilterContainer text='Filter comments' />
    <CommentListContainer />
  </div>
);

const App = () => {
  // Each route checks if the path matches the current URL.
  // If it does, the `component` is shown with path variables passed as `match.params` in props.
  //
  // Routes can be defined at any level of the application.
  // Obviously only Routes which are actually rendered will take effect.
  //
  // `/comments/:commentId` path matches both the following Routes.
  // `exact` prop can be specified to show Component only on exact URL match.
  return (
    <Router>
      <div>
        <AppHeader />
        <Route path="/addComment" component={CommentFormContainer} />
        <Route path="/comments" component={CommentsWithFilter} />
        <Route path="/comments/:commentId" component={CommentContainer} />
      </div>
    </Router>
  );
};

export default App;
