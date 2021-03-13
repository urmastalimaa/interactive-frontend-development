import {
  filterSet,
} from '../../../src/async_process_basics/actions/index.js';

import reducer from '../../../src/async_process_basics/reducers/CommentFilterReducer';

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
