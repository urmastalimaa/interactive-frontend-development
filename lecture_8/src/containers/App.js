import React from 'react';
import PropTypes from 'prop-types';

import AppHeader from '../components/AppHeader';
import CommentContainer from './CommentContainer';
import CommentListContainer from './CommentListContainer';
import CommentFormContainer from './CommentFormContainer';
import FilterContainer from './FilterContainer';
import {
  Route
} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';

export const CommentsWithFilter = () => (
  <div>
    <FilterContainer text='Filter comments' />
    <CommentListContainer />
  </div>
);

const App = ({history}) => {
  // Use `ConnectedRouter` with an instance of `history` instead of `Router` from React Router.
  return (
    <ConnectedRouter history={history}>
      <div>
        <AppHeader />
        <Route path="/addComment" component={CommentFormContainer} />
        <Route path="/comments" component={CommentsWithFilter} />
        <Route path="/comments/:commentId" component={CommentContainer} />
      </div>
    </ConnectedRouter>
  );
};

App.propTypes = {
  history: PropTypes.object.isRequired
};

export default App;
