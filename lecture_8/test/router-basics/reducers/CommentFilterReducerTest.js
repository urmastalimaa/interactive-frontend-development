import {
  filterSet,
} from '../../../src/actions/index.js';

import reducer from '../../../src/reducers/CommentFilterReducer';

describe('CommentFilterReducer', () => {
  it('is empty initially', () => {
    expect(reducer(undefined, {})).to.eql('');
  });

  it('sets filter when filter set', () => {
    expect(reducer(undefined, filterSet('filter-value'))).to.eql(
      'filter-value'
    );
  });
});
