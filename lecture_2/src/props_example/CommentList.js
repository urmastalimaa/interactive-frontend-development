import React, {Component} from 'react';
import Comment from './Comment';

/*
  Passes `author` prop to multiple `Comment`s. Also passes an inline text
  component as `children` to `Comment`. Has no props itself.
*/
class CommentList extends Component {
  render() {
    return (
      <div className='comment-list'>
        <Comment author='React Reactson'>This is one comment</Comment>
        <Comment author='Java Scriptson'>This is another comment</Comment>
      </div>
    );
  }
}

export default CommentList;
