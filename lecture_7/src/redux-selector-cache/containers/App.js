import React from 'react';
import PropTypes from 'prop-types';

import AppHeader from '../../router-basics/components/AppHeader';
import CommentContainer from '../../router-basics/containers/CommentContainer';
import CommentListContainer from './CommentListContainer';
import CommentFormContainer from '../../connected-react-router/containers/CommentFormContainer';
import FilterContainer from '../../router-basics/containers/FilterContainer';
import {
  Route
} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';

const CommentsWithFilter = () => (
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
