import reducer from '../../../src/redux_basics/reducers/index';
import {
  commentSubmitted,
  authorSet,
  textSet
} from '../../../src/redux_basics/actions/index';

// Note that reducer tests have nothing to do with React.

describe('reducer', () => {
  it('has no comments or author/text initially', () => {
    // If undefined is passed as previous state, initialState is set in the reducer.
    // If a no-op action ({}) is passed then no reducer branch takes effect.
    expect(reducer(undefined, {})).to.eql({
      comments: [],
      author: '',
      text: ''
    });
  });

  it('adds a comment when comment submitted', () => {
    // Previous state can be passed to the reducer
    const previousState = {comments: [], author: 'author', text: 'text'};
    // An action creator can be used to create the action to pass to the reducer
    const newState = reducer(previousState, commentSubmitted()).comments;
    expect(newState.length).to.eq(1);
    expect(newState[0].author).to.eq('author');
    expect(newState[0].text).to.eq('text');
  });

  it('clears author and text when comment submitted', () => {
    const previousState = {comments: [], author: 'author', text: 'text'};
    const stateAfterCommentAdded = reducer(previousState, commentSubmitted('author', 'text'));
    expect(stateAfterCommentAdded.author).to.eql('');
    expect(stateAfterCommentAdded.text).to.eql('');
  });

  it('sets text when text set', () => {
    expect(reducer(undefined, textSet('text')).text).to.eql('text');
  });

  it('sets author when author set', () => {
    expect(reducer(undefined, authorSet('author')).author).to.eql('author');
  });
});
