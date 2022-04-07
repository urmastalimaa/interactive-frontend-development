import {render, screen, waitForElementToBeRemoved} from '@testing-library/react';

import {
  postComment,
  getComments,
  deleteComment,
  createServer,
} from '../src/cross_cutting_concerns/ServerAPI';
import App from '../src/cross_cutting_concerns/components/App';

const postCommentMock = jest.mocked(postComment);
const getCommentsMock = jest.mocked(getComments);
const deleteCommentsMock = jest.mocked(deleteComment);
const createServerMock = jest.mocked(createServer);
jest.mock('../src/cross_cutting_concerns/ServerAPI');

createServerMock.mockReturnValue({
  postComment: postCommentMock,
  deleteComment: deleteCommentsMock,
  getComments: getCommentsMock
})

const renderWithRealServer = () => {
  return render(
    <App/>
  );
};

describe('App full', function () {
  test('renders comment with mocking success', async () => {
    getCommentsMock.mockReturnValueOnce(Promise.resolve([
      {id: 'uuid-1', author: 'John', text: 'Amazing'},
      {id: 'uuid-2', author: 'Silver', text: 'Awesome'},
    ]));
    renderWithRealServer()

    await waitForElementToBeRemoved(screen.getByText(/Fetching comments/));

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  test('renders comment with mocking failed', async () => {
    getCommentsMock.mockReturnValueOnce(Promise.reject({error: 'Service temporarily unavailable'}));
    renderWithRealServer()

    await waitForElementToBeRemoved(screen.getByText(/Fetching comments/));

    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });
});
