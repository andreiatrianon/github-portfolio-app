import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import './setupTests'; // enzyme configure
import { mount } from 'enzyme';

import CommitPage from './CommitPage';

describe('<CommitPage />', () => {
  
  beforeEach(() => {
    fetch.mockResponse(JSON.stringify([{ items: 1 }]))
  })
  
  afterEach(() => {
    fetch.resetMocks()
  })
  
  it('update after didMount', async () => {
    const appWrapper = await mount(<CommitPage />);
    await appWrapper.instance().componentDidMount();
    expect(appWrapper.state("items")).toEqual([{items: 1}]);
  })

  it('should be render a <div>', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<CommitPage />);
    const result = renderer.getRenderOutput();  
    expect(result.type).toBe('div');
  })
  
});