import reducer, {filterComments} from '../../../src/redux_combine_reducers/reducers/CommentListReducer';
import {
  commentSubmitted,
} from '../../../src/redux_combine_reducers/actions/index';

// Note that reducer tests have nothing to do with React.

describe('CommentListReducer', () => {
  it('has no comments initially', () => {
    expect(reducer(undefined, {})).to.eql([]);
  });

  it('adds a comment when comment submitted', () => {
    const firstComment = {author: 'first-author', text: 'first-text'};

    const stateAfterFirstComment = reducer(undefined, commentSubmitted(firstComment));
    // Previous state can be passed to the reducer
    expect(stateAfterFirstComment.length).to.eq(1);

    expect(stateAfterFirstComment[0].author).to.eq('first-author');
    expect(stateAfterFirstComment[0].text).to.eq('first-text');
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
