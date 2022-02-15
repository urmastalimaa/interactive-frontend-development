import { useState } from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

/*
  We pass down the state as props to `CommentList`. Whenever state changes,
  `App` and all its children are re-rendered.
*/
const App = () => {
  const [comments, setComments] = useState([
    {author: 'React Reactson', text: 'This is one comment', id: 1},
    {author: 'Java Scriptson', text: 'This is another comment', id: 2},
  ]);

  const onSubmit = () => {
    console.log('posting comment!'); // eslint-disable-line no-console
  }

  return (
    <div className="app">
      <h1>Comments</h1>
      <CommentList comments={comments} />
      <CommentForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
