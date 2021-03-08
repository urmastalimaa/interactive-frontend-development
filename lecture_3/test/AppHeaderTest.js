import React from 'react';
import {shallow} from 'enzyme';

import AppHeader from '../src/types_of_components/AppHeader';

describe('AppHeader', () => {
  it('renders', () => {
    // App Header component has no logic or control flow. There isn't much
    // point to test the exact markup that it outputs.
    expect(shallow(<AppHeader />)).to.exist;
  });
});
