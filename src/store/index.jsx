import React from 'react';
import githubReducer, { initialState } from './reducers/githubReducer';
import asyncDispatcher from '../middlewares/asyncDispatcher';

export const Store = React.createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(githubReducer, initialState);

  const enhanceDispatch = asyncDispatcher(dispatch);

  return <Store.Provider value={{ state, dispatch: enhanceDispatch }}>{children}</Store.Provider>;
};
