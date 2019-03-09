import React, {Component} from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

const onSubmit = () => {
  console.log('posting comment!'); // eslint-disable-line no-console
};

/*
  App is a composition of `CommentList` and `CommentForm`. Form submission is
  handled by just logging a line to console.
  Has no props.
*/
class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Comments</h1>
        <CommentList />
        <CommentForm onSubmit={onSubmit} />
      </div>
    );
  }
}

export default App;
