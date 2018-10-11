import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import './setupTests'; // enzyme configure
import { shallow } from 'enzyme';

import RepositoryCard from './RepositoryCard';

describe('<RepositoryCard />', () => {

  it('should be render a <div>', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<RepositoryCard />);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
  })

  it('should has a title as a button to open the repository on GitHub', () => {
    const handleRepositoryClick = jest.fn();
    const wrapper = shallow((<h4 onClick={handleRepositoryClick}>repository name</h4>));
    wrapper.find('h4').simulate('click');
  })

  it('should has a button to open the repository commits', () => {
    const handleCommitClick = jest.fn();
    const wrapper = shallow((<button type="button" onClick={handleCommitClick}>See commits</button>));
    wrapper.find('button').simulate('click');
  })

  it('should has a button to open the repository commits with a input search', () => {
    const onSearchInput = jest.fn();
    const wrapper = shallow((<input type="search" placeholder="Search..." onInput={onSearchInput}></input>));
    wrapper.find('input').simulate('oninput');
  })

});