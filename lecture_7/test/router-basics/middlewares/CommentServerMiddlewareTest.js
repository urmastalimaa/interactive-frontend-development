import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  POST_COMMENT_SUCCEEDED,
  POST_COMMENT_FAILED
} from '../../../src/router-basics/actions/index';
import {
  postComment
} from '../../../src/router-basics/middlewares/CommentServerMiddleware';

describe('postComment', () => {
  context('when comment posted', () => {
    const middlewares = [thunk];
    const createMockStore = configureStore(middlewares);
    let store;
    let fetch;

    beforeEach(() => {
      const initialState = {};
      store = createMockStore(initialState);

      fetch = sinon.stub();
      fetch.returns(Promise.resolve({}));
    });

    it('dispatches comment post failed when fetch fails', () => {
      fetch.returns(Promise.reject(new Error({error: 'error'})));
      const localId = 'local-id';

      return store.dispatch(postComment({author: 'author', text: 'text', localId}, fetch))
        .catch(() => {
          expect(store.getActions()).to.deep.contain({
            type: POST_COMMENT_FAILED,
            payload: {localId, error: 'error'}
          });
        });
    });

    it('dispatches comment post succeeded when fetch succeeds', () => {
      const localId = 'local-id';
      fetch.returns(Promise.resolve({
        ok: true,
        json: () => Promise.resolve({id: 'comment-id'})
      }));

      return store.dispatch(postComment({author: 'author', text: 'text', localId}, fetch))
        .then(() => {
          expect(store.getActions()).to.deep.contain({
            type: POST_COMMENT_SUCCEEDED,
            payload: {localId, id: 'comment-id'}
          });
        });
    });
  });
});
