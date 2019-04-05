import {commentSubmitted} from '../../../src/redux_combine_reducers/actions/index';

describe('commentSubmitted', () => {
  it('has increasing comment ID', () => {
    const actions = [
      commentSubmitted({author: 'author', text: 'text'}),
      commentSubmitted({author: 'author', text: 'text'})
    ];
    expect(actions[1].payload.id).to.eq(
      actions[0].payload.id + 1
    );
  });
});
