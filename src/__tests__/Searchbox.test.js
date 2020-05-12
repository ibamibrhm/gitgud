import React from 'react';
import Searchbox from '../components/Searchbox';
import { shallow } from 'enzyme';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

test('renders searchbox', () => {
  const submitForm = jest.fn();
  const wrapper = shallow(<Searchbox />);

  const input = wrapper.find('input');
  input.simulate('change', { target: { value: 'ibamibrhm' } });

  const form = wrapper.find('form');
  form.simulate('submit', { preventDefault: submitForm });
  expect(submitForm).toHaveBeenCalledTimes(1);
});
