import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../routes/component/Routes';
import App from '../App';

describe('My Test Suite', () => {
  it('My Test Case', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Routes />)).toBe(true);
  });
});
