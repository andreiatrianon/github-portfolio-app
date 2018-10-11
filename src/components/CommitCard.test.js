import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import './setupTests'; // enzyme configure
import { shallow } from 'enzyme';

import CommitCard from './CommitCard';

describe('<CommitCard />', () => {

  it('should be render a <div>', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<CommitCard />);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
  })

});
