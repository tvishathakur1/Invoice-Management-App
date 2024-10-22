import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import theme from '../src/utils/theme';
import {ThemeProvider } from '@mui/material/styles';
ReactDOM.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
  document.getElementById('root')
);
serviceWorker.unregister();