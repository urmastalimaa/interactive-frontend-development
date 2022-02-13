import { useState } from 'react';

import CommentList from '../pure_function_example/CommentList';
import CommentForm from './CommentForm';

const App = () => {
  const [comments, setComments] = useState([
    {author: 'React Reactson', text: 'This is one comment', id: 1},
    {author: 'Java Scriptson', text: 'This is another comment', id: 2},
  ]);

  const handleCommentSubmit = ({author, text}) => {
    const lastComment = comments[comments.length - 1];
    setComments(comments.concat({
        author,
        text,
        id: lastComment.id + 1,
      }),
    );
  }

  return (
    <div className="app">
      <h1>Comments</h1>
      <CommentList comments={comments} />
      <CommentForm onSubmit={handleCommentSubmit} />
    </div>
  );
}

export default App;
