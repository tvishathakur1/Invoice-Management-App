import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import theme from '../src/utils/theme';
import {ThemeProvider } from '@mui/material/styles';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
);
// ReactDOM.createRoot(
//     <ThemeProvider theme={theme}>
//       <App />
//     </ThemeProvider>,
//   document.getElementById('root')
// );
serviceWorker.unregister();