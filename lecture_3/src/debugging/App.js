import React, {Component} from 'react';
import CommentList from '../types_of_components/CommentList';
import CommentForm from '../types_of_components/ControlledCommentForm';

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
    debugger; // eslint-disable-line no-debugger
    this.setState({
      comments: this.state.comments.concat({author, text, id: lastComment.id + 1})
    });
  }

  render() {
    return (
      <div className='app'>
        <h1>Comments</h1>
        <CommentList comments={this.state.comments}/>
        <CommentForm onSubmit={this.handleCommentSubmit.bind(this)} text='Submit comment'/>
      </div>
    );
  }
}

export default App;
