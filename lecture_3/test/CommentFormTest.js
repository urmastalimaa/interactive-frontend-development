import React from 'react';
import {shallow} from 'enzyme';

import CommentForm from '../src/types_of_components/ControlledCommentForm';

describe('CommentForm', () => {
  it('renders', () => {
    expect(shallow(
      <CommentForm onSubmit={sinon.stub()} text='text' />
    )).to.exist;
  });

  // This test is arguably dubious. A Comment form in general could output
  // slightly different markup. Should such a form fail unit tests?
  // Debatable.
  it('has an h3, two inputs and a button', () => {
    const form = shallow(<CommentForm onSubmit={sinon.stub()} text='text' />);

    expect(form).to.contain(<h3>Controlled form</h3>);

    // The two following assertions test the behaviour.
    // The first one is more readable and provides much better error messages
    // should the test fail.
    expect(form).to.have.exactly(2).descendants('input');
    expect(form.find('input').length).to.eq(2);

    expect(form).to.have.exactly(1).descendants('button');
    expect(form).to.contain.text('text');
  });

  // Testing callbacks and the arguments that callbacks receive is generally
  // very useful.
  it('calls submit with author and text when submit button clicked', () => {
    const onSubmit = sinon.stub();
    const form = shallow(<CommentForm onSubmit={onSubmit} text='text' />);

    form.setState({author: 'author', text: 'text'});

    form.find('button').simulate('click');
    // simulate('click') in shallow rendering is equivalent to
    //   const button = form.find('button');
    //   button.props().onClick({target: button});
    // The simulated event will not propagate to parent elements.

    expect(onSubmit).to.have.been.calledWith({author: 'author', text: 'text'});
  });

  // Testing any other behaviour that a component has is also useful
  it('clears state when submit button clicked', () => {
    const form = shallow(<CommentForm onSubmit={sinon.stub()} text='text' />);

    form.setState({author: 'author', text: 'text'});
    form.find('button').simulate('click');
    expect(form.state()).to.eql({author: '', text: ''});
  });
});

