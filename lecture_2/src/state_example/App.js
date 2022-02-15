import { useEffect, useState } from 'react';

import CommentList from './CommentList';

/*
  `App` component now has state: inserted comments.
  Initial comments state is set to empty array in constructor.

  We also mimic receiving new components using `setInterval`,
  every 3 seconds 2 new components are 'received' and added to state.

  We pass down the state as props to `CommentList`. Whenever state changes,
  `App` and all its children are re-rendered.
*/
let id = 1;

const App = () => {
  const [comments, setComments] = useState([]);

  /*
    The useEffect hook will be explained in details in lecture 3.
  */
  useEffect(() => {
    const newComments = [
      {
        author: 'React Reactson',
        text: `This is one comment ${id}`,
        id: id,
      },
      {
        author: 'Java Scriptson',
        text: `This is another comment ${id + 1}`,
        id: id + 1,
      },
    ];

    const interval = setInterval(() => {
      setComments(comments.concat(newComments));
      id += 2;
    }, 3000);

    return () => clearInterval(interval);
}, [comments]);

  return (
    <div className="app">
      <h1>Comments</h1>
      <CommentList comments={comments} />
    </div>
  );
}

export default App;
