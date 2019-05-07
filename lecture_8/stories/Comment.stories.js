import React from 'react';
import {storiesOf} from '@storybook/react';
import Comment from '../src/components/Comment';

// Declare a component
storiesOf('Comment', module)
  // add a story, which is just a component with fixed props and state
  .add('in flight', () => (
    <Comment inFlight={true} author="foo">Comment text</Comment>
  ))
  .add('sent', () => (
    <Comment inFlight={false} author="foo">Comment text</Comment>
  ));
