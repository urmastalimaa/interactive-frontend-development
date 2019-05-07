import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import CommentForm from '../src/components/CommentForm';

// Components with internal state can also be rendered
// Actions can be logged using @storybook/addon-actions
storiesOf('CommentForm', module)
  .add('empty', () => (
    <CommentForm
      onSubmit={action('submit comment')}
    />
  ));
