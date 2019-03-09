import React, {Component} from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

/*
  We pass down the state as props to `CommentList`. Whenever state changes,
  `App` and all its children are re-rendered.
*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {author: 'React Reactson', text: 'This is one comment', id: 1},
        {author: 'Java Scriptson', text: 'This is another comment', id: 2}
      ]
    };
  }

  onSubmit() {
    console.log('posting comment!'); // eslint-disable-line no-console
  }

  render() {
    return (
      <div className='app'>
        <h1>Comments</h1>
        <CommentList comments={this.state.comments}/>
        <CommentForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
