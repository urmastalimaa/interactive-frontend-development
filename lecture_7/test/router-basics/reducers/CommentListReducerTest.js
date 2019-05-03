import reducer, {
  filterComments
} from '../../../src/router-basics/reducers/CommentListReducer';
import {
  getCommentsRequested,
  getCommentsSucceeded,
  getCommentsFailed,
  postCommentRequested,
  postCommentSucceeded,
  postCommentFailed
} from '../../../src/router-basics/actions/index';

describe('CommentListReducer', () => {
  it('has no comments or pending request initially', () => {
    expect(reducer(undefined, {})).to.eql({comments: [], fetchState: {inFlight: false}});
  });

  it('sets request in flight when comments requested', () => {
    expect(
      reducer(undefined, getCommentsRequested())
    ).to.eql({
      comments: [],
      fetchState: {inFlight: true}
    });
  });

  it('sets comments when comment request succeeds', () => {
    const initialState = reducer(undefined, getCommentsRequested());
    expect(
      reducer(initialState, getCommentsSucceeded(['comment']))
    ).to.eql({
      comments: ['comment'],
      fetchState: {inFlight: false}
    });
  });

  it('sets error when comment request fails', () => {
    const initialState = reducer(undefined, getCommentsRequested());
    expect(
      reducer(initialState, getCommentsFailed('error'))
    ).to.eql({
      comments: [],
      fetchState: {inFlight: false, error: 'error'}
    });
  });

  it('adds in-flight comment when comment post requested', () => {
    const comment = {author: 'author', text: 'text'};
    const requestAction = postCommentRequested(comment);
    expect(reducer(undefined, requestAction)).to.eql({
      comments: [{...comment, id: requestAction.payload.localId, inFlight: true}],
      fetchState: {inFlight: false}
    });
  });

  it('sets comment as not in flight when post succeeds', () => {
    const comment = {author: 'author', text: 'text'};
    const requestAction = postCommentRequested(comment);
    const localId = requestAction.payload.localId;
    const initialState = reducer(undefined, requestAction);
    expect(
      reducer(initialState, postCommentSucceeded({id: 'id', localId}))
    ).to.eql({
      comments: [{...comment, id: 'id', inFlight: false}],
      fetchState: {inFlight: false}
    });
  });

  it('removes comment when post fails', () => {
    const comment = {author: 'author', text: 'text'};
    const requestAction = postCommentRequested(comment);
    const localId = requestAction.payload.localId;
    const initialState = reducer(undefined, requestAction);
    expect(
      reducer(initialState, postCommentFailed({localId, error: 'error'}))
    ).to.eql({
      comments: [],
      fetchState: {inFlight: false}
    });
  });
});

describe('filterComments', () => {
  const comments = [
    {author: 'foo', text: 'red', id: 1},
    {author: 'bar', text: 'fooish', id: 2},
    {author: 'baz', text: 'light-red', id: 3}
  ];

  it('has all comments when filter empty', () => {
    expect(filterComments({comments, filterText: ''})).to.eql(comments);
  });

  it('matches authors', () => {
    expect(filterComments({comments, filterText: 'ba'})).to.eql([
      comments[1], comments[2]
    ]);
  });

  it('matches text', () => {
    expect(filterComments({comments, filterText: 'red'})).to.eql([
      comments[0], comments[2]
    ]);
  });

  it('matches author or text', () => {
    expect(filterComments({comments, filterText: 'foo'})).to.eql([
      comments[0], comments[1]
    ]);
  });
});
