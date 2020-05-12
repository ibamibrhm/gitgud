import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../components/Navbar';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

test('renders navbar', () => {
  const title = 'gitgud';
  const { getByText, getByTestId } = render(<Navbar title={title} />);
  const navbarTitle = getByText(title);
  const searchForm = getByTestId('search-form');
  expect(navbarTitle).toBeInTheDocument();
  expect(searchForm).toBeInTheDocument();
});
