import React from 'react';
import UserProjects from '../pages/UserProjects';
import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';
import mockResponse from '../utils/mockResponse';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
  useParams: jest.fn().mockReturnValue({ username: 'ibamibrhm' }),
  useRouteMatch: () => ({ url: '/ibamibrhm' }),
}));

test('renders UserProjects page', async () => {
  jest.useFakeTimers();

  const fakeRepos = [
    {
      id: 1,
      name: 'gitgud',
    },
    {
      id: 2,
      name: 'menari',
    },
  ];

  jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve(mockResponse(200, null, JSON.stringify(fakeRepos))));

  await act(async () => {
    shallow(<UserProjects />);
  });
});
