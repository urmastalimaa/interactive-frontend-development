import {render, screen} from '@testing-library/react';
import CommentList from '../src/path_to_hooks/CommentList';

describe('CommentList', () => {
  // Any collection-like component should have a test for the empty case.
  // This is a useful first test while test-driving.
  it('renders without comments', () => {
    render(<CommentList comments={[]} />);
  });

  // It is also useful to test that multiple child components are successfully
  // rendered.
  it('renders Comment component for each comment', () => {
    const comments = [
      {id: 1, author: 'a', text: 'a-text'},
      {id: 2, author: 'b', text: 'b-text'}
    ];
    render(<CommentList comments={comments} />);

    screen.getByText('a-text');
    screen.getByText('b-text');
  });
});

