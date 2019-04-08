import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  POST_COMMENT_REQUESTED,
  POST_COMMENT_SUCCEEDED,
  POST_COMMENT_FAILED,
  getLastLocalCommentId
} from '../../../src/async_process_basics/actions/index';
import {
  postComment
} from '../../../src/async_process_basics/actions/CommentServerActions';

describe('postComment', () => {
  context('when comment posted', () => {
    const middlewares = [thunk];
    const createMockStore = configureStore(middlewares);
    let store;
    let fetch;

    const waitForPromiseToSettle = (fn) => {
      // Promises by design resolve/reject on the *next event loop*.
      // We can delay execution of assertion code also by *one event loop* by
      // delaying it by 0 using setTimeout.
      setTimeout(fn, 0);
    };

    beforeEach(() => {
      const initialState = {};
      store = createMockStore(initialState);

      fetch = sinon.stub();
      fetch.returns(Promise.resolve({}));
    });

    it('dispatches comment post requested', () => {
      store.dispatch(postComment({author: 'author', text: 'text'}, fetch));

      expect(store.getActions()).to.deep.contain({
        type: POST_COMMENT_REQUESTED,
        payload: {localId: getLastLocalCommentId(), text: 'text', author: 'author'}
      });
    });

    it('uses different local id for next comment post', () => {
      store.dispatch(postComment({author: 'author', text: 'text'}, fetch));
      store.dispatch(postComment({author: 'author', text: 'text'}, fetch));

      const firstCommentId = store.getActions()[0].payload.localId;
      const secondCommentId = store.getActions()[1].payload.localId;

      expect(firstCommentId).not.to.eql(secondCommentId);
    });

    it('dispatches comment post failed when fetch fails', (done) => {
      fetch.returns(Promise.reject(new Error({error: 'error'})));

      store.dispatch(postComment({author: 'author', text: 'text'}, fetch));

      waitForPromiseToSettle(() => {
        expect(store.getActions()).to.deep.contain({
          type: POST_COMMENT_FAILED,
          payload: {localId: getLastLocalCommentId(), error: 'Service unreachable'}
        });

        // done must be used as the test run asynchronously
        // otherwise the test would run to completion before our assertions run
        done();
      });
    });

    it('dispatches comment post succeeded when fetch succeeds', (done) => {
      fetch.returns(Promise.resolve({
        ok: true,
        json: () => Promise.resolve({id: 'comment-id'})
      }));

      store.dispatch(postComment({author: 'author', text: 'text'}, fetch));

      waitForPromiseToSettle(() => {
        expect(store.getActions()).to.deep.contain({
          type: POST_COMMENT_SUCCEEDED,
          payload: {localId: getLastLocalCommentId(), id: 'comment-id'}
        });

        done();
      });
    });
  });
});
