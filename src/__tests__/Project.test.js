import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Project from '../pages/Project';
import mockResponse from '../utils/mockResponse';
import { Store } from '../store/index';
import { initialState } from '../store/reducers/githubReducer';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
  useParams: jest.fn().mockReturnValue({ project: 'gitgud', username: 'ibamibrhm' }),
}));

test('renders Project page', () => {
  const { getByTestId } = render(
    <Store.Provider value={{ state: initialState, dispatch: () => jest.fn() }}>
      <Project />
    </Store.Provider>
  );
  const searchForm = getByTestId('search-form');
  expect(searchForm).toBeInTheDocument();
});

test('renders projects and fetch success', async () => {
  const fakeData = {
    content:
      'IyBNZW5hcmkgJm1pZGRvdDsgWyFbR2l0SHViIGxpY2Vuc2VdKGh0dHBzOi8vaW1nLnNoaWVsZHMuaW8vYmFkZ2UvbGljZW5zZS1NSVQtYmx1ZS5zdmcpXShodHRwczovL2dpdGh1Yi5jb20vaWJhbWlicmhtL21lbmFyaS9ibG9iL21hc3Rlci9MSUNFTlNFKSBbIVtucG0gdmVyc2lvbl0oaHR0cHM6Ly9pbWcuc2hpZWxkcy5pby9ucG0vdi9tZW5hcmkpXShodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9tZW5hcmkpICFbbnBtIGJ1bmRsZSBzaXplXShodHRwczovL2ltZy5zaGllbGRzLmlvL2J1bmRsZXBob2JpYS9taW4vbWVuYXJpKQoKTWVuYXJpIGlzIGEgQ0xJIGZvciBbcmlja3JvbGxyY10oaHR0cHM6Ly9naXRodWIuY29tL2tlcm9zZXJlbmUvcmlja3JvbGxyYykuIDxiciAvPgpXaXRoIDxzdHJvbmc+bWVuYXJpPC9zdHJvbmc+IHlvdSBjYW4gcnVuIHRoZSByaWNrcm9sbHJjIHNoZWxsIHNjcmlwdCB1c2luZyBOb2RlLmpzCgojIyBVc2FnZQoKYGBgCiQgbnB4IG1lbmFyaQpgYGAKCiFbXShodHRwOi8vaS5pbWd1ci5jb20vNXEzUjkuZ2lmKQ==',
  };

  jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve(mockResponse(200, null, JSON.stringify(fakeData))));

  await act(async () => {
    render(
      <Store.Provider value={{ state: initialState, dispatch: () => jest.fn() }}>
        <Project />
      </Store.Provider>
    );
  });

  const mockResponseValue = await global.fetch.mock.results[0].value;
  expect(mockResponseValue.ok).toBeTruthy();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('https://api.github.com/repos/ibamibrhm/gitgud/readme');

  global.fetch.mockRestore();
});
