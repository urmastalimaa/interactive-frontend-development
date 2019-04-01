import React from 'react';
import {shallow} from 'enzyme';

import CommentForm from '../../../src/redux_basics/components/CommentForm';

describe('CommentForm', () => {
  it('renders', () => {
    expect(shallow(
      <CommentForm
        author='author'
        text='text'
        submitText='submit'
        onAuthorChange={sinon.stub()}
        onTextChange={sinon.stub()}
        handleSubmit={sinon.stub()}
      />
    )).to.exist;
  });
});

