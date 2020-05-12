import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/Home';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

test('renders homepage', () => {
  const { getByText, getByTestId } = render(<Home />);
  const hLabel = getByText(/Github Username/i);
  const searchForm = getByTestId('search-form');
  expect(hLabel).toBeInTheDocument();
  expect(searchForm).toBeInTheDocument();
});
