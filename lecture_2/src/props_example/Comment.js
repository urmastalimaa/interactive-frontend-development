import React, {Component} from 'react';

/*
  Has `author` and `children` props. `children` is a special prop that has
  contained components.
*/
class Comment extends Component {
  render() {
    return (
      <div className='comment'>
        <h2 className='author'>
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
}

export default Comment;
