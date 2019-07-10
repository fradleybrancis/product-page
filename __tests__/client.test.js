import Enzyme from 'enzyme';
import React from 'react';
import App from '../client/src/Components/App.jsx';

describe('Check if all components exist', () => {
  it('expects App component to exist', () => {
    const wrapper = Enzyme.shallow(<App />);
    expect(wrapper.exists()).toBe(true)
  })
})