import React from 'react';

import AppHeader from '../components/AppHeader';
import CommentListContainer from './CommentListContainer';
import CommentFormContainer from './CommentFormContainer';
import FilterContainer from './FilterContainer';

const App = () => {
  return (
    <div>
      <AppHeader />
      <CommentFormContainer />
      <FilterContainer text='Filter comments' />
      <CommentListContainer />
    </div>
  );
};

export default App;
