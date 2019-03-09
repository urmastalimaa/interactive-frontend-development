import React, {Component} from 'react';

import CommentList from './CommentList';

/*
  `App` component now has state: inserted comments.
  Initial comments state is set to empty array in constructor.

  In the constructor we also mimic receiving new components using
  `setInterval`, every 5 seconds 2 new components are 'received' and added to
  state.

  We pass down the state as props to `CommentList`. Whenever state changes,
  `App` and all its children are re-rendered.
*/
class App extends Component {
  constructor(props) {
    super(props); // every component must call superclass constructor with props
    this.state = {comments: []};

    let id = 1;
    setInterval(() => {
      this.setState({
        comments: this.state.comments.concat([
          {author: 'React Reactson', text: `This is one comment ${id}`, id: id},
          {author: 'Java Scriptson', text: `This is another comment ${id + 1}`, id: id + 1}
        ])
      });
      id += 2;
    }, 5000);
  }

  onSubmit() {
    console.log('posting comment!'); // eslint-disable-line no-console
  }

  render() {
    return (
      <div className='app'>
        <h1>Comments</h1>
        <CommentList comments={this.state.comments}/>
      </div>
    );
  }
}

export default App;
