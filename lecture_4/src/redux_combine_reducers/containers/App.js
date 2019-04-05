import React from 'react';

import AppHeader from '../../redux_basics/components/AppHeader';
import CommentListContainer from './CommentListContainer';
import CommentFormContainer from './CommentFormContainer';
import FilterContainer from './FilterContainer';

// It is best to avoid creating too many container components in the first
// place. Start by composing React components instead and if there are clearly
// separate parts of the application, consider separating them into different
// containers.
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
