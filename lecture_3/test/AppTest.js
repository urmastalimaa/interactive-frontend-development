import React from 'react';
import {shallow} from 'enzyme';

import App from '../src/types_of_components/App';
import CommentList from '../src/types_of_components/CommentList';
import CommentForm from '../src/types_of_components/ControlledCommentForm';
import AppHeader from '../src/types_of_components/AppHeader';

describe('App', () => {
  it('initially renders empty CommentList', () => {
    // `to.contain` checks that an exactly equal component exists
    expect(
      shallow(<App />)
    ).to.contain(
      <CommentList comments={[]} />
    );
  });

  it('renders AppHeader', () => {
    expect(
      shallow(<App />)
    ).to.contain(
      <AppHeader />
    );
  });

  it('renders CommentForm', () => {
    // `to.contain.descendants` checks that an element with a specified type
    // exists (props are not checked)
    expect(
      shallow(<App />)
    ).to.contain.descendants(
      CommentForm
    );
  });

  // Logic inside container components should be tested.  It is convenient to
  // shallow render and explicitly invoke callbacks that were passed to child
  // components as props. This avoids child component logic leaking into the
  // container test.
  it('adds new comment to CommentList when submitted from CommentForm', () => {
    const app = shallow(<App focusForms={false} />);

    app.find(CommentForm).props().onSubmit({author: 'author', text: 'text'});
    app.update();

    expect(app).to.contain(
      <CommentList comments={[
        {id: 1, author: 'author', text: 'text'}
      ]} />
    );
  });
});
