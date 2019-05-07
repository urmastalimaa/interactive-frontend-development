import React from 'react';
import {storiesOf} from '@storybook/react';
import {CommentsWithFilter} from '../src/containers/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../src/reducers';
import StoryRouter from 'storybook-react-router';

// It is also possible to render react-redux containers.
//
// The downside is that this needs more setup: Setting up the `store` and
// adding the `Provider` decorator (together with router decorator if
// `Links`/`Routes` are used inside of the component)
//
// Also such stories are much more subject to require changes when refactoring
// the application.

const initialState = {
  comments: {
    fetchState: {
      inFlight: false
    },
    comments: [
      {
        id: '594b525a-d6ac-47f2-b1a8-9b5f0bd531b5',
        inFlight: false,
        author: 'foo',
        text: 'foo-text'
      },
      {
        id: 'b78085f6-7018-4887-9b67-c6405496f397',
        inFlight: false,
        author: 'bar',
        text: 'bar-long-text'
      }
    ]
  },
  filter: ''
};


const store = createStore(reducer, initialState);

storiesOf('CommentsWithFilter', module)
  // addDecorator adds a wrapper for all following stories in this `storiesOf`
  // context
  .addDecorator((story) => (
    // Add Provider decorator to provide context for react-redux containers
    <Provider store={store}>{story()}</Provider>
  ))
  // Add Router decorator to provide context for CommentList links
  .addDecorator(new StoryRouter())
  .add('with two comments', () => (
    <CommentsWithFilter/>
  ));

// The question is for whom and how are such stories useful.
//
// The individual components for CommentList and Filter can have their own
// stories to develop their look and feel.
// The reducers and selector functions have unit tests.
// The container components should be trivial.
