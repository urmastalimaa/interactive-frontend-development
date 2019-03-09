import React, {Component} from 'react';

import CommentList from '../pure_function_example/CommentList';
import CommentForm from './CommentForm';

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

  handleCommentSubmit({author, text}) {
    const lastComment = this.state.comments[this.state.comments.length - 1];
    this.setState({
      comments: this.state.comments.concat({author, text, id: lastComment.id + 1})
    });
  }

  render() {
    return (
      <div className='app'>
        <h1>Comments</h1>
        <CommentList comments={this.state.comments}/>
        <CommentForm onSubmit={this.handleCommentSubmit.bind(this)} />
      </div>
    );
  }
}

export default App;
