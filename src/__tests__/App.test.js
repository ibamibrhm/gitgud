import React from 'react';
import App from '../App';
import Home from '../pages/Home';
import { mount } from 'enzyme';

jest.mock('react-router-dom/BrowserRouter', () => {
  return ({ children }) => <div>{children}</div>;
});

test('renders routes home', () => {
  const wrapper = mount(<App />);

  expect(wrapper.find(Home)).toHaveLength(1);
});
