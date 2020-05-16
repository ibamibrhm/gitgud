import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StoreProvider } from './store';

const root = document.getElementById('root');

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  root
);
