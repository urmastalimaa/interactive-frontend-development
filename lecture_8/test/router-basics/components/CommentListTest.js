import React from 'react';
import {shallow} from 'enzyme';

import CommentList from '../../../src/components/CommentList';
import {Link} from 'react-router-dom';

describe('CommentList', () => {
  it('renders no Comment components without comments', () => {
    expect(shallow(
      <CommentList
        comments={[]}
        onRequestComments={sinon.stub()}
        fetchState={{inFlight: false}} />
    )).to.not.contain.descendants(Link);
  });

  it('renders Comment component for each comment', () => {
    const comments = [
      {id: '1', author: 'a', text: 'a-text', inFlight: true},
      {id: '2', author: 'b', text: 'b-text', inFlight: false}
    ];

    const commentList = shallow(
      <CommentList
        comments={comments}
        onRequestComments={sinon.stub()}
        fetchState={{inFlight: false}} />);

    expect(commentList).to.have.exactly(2).descendants(Link);
    expect(commentList).to.contain(<Link to="/comments/1">Author: a</Link>);
    expect(commentList).to.contain(<Link to="/comments/2">Author: b</Link>);
  });

  it('calls onRequestComments when request button clicked', () => {
    const onRequestComments = sinon.stub();
    const commentList = shallow(
      <CommentList
        comments={[]}
        onRequestComments={onRequestComments}
        fetchState={{inFlight: false}} />);

    commentList.find('button').simulate('click');
    expect(onRequestComments).to.have.been.called;
  });

  it('shows Fetching comments when request in flight', () => {
    const commentList = shallow(
      <CommentList
        comments={[]}
        onRequestComments={sinon.stub()}
        fetchState={{inFlight: true}} />);

    expect(commentList.text()).match(/Fetching/);
  });

  it('shows error when comment fetch failed', () => {
    const commentList = shallow(
      <CommentList
        comments={[]}
        onRequestComments={sinon.stub()}
        fetchState={{inFlight: false, error: 'Error'}} />);

    expect(commentList.text()).match(/Error/);
  });
});
