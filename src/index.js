import React, { useReducer, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as Sentry from '@sentry/browser';
import * as serviceWorker from './serviceWorker';
import Routes from './routes';

Sentry.init({dsn: process.env.REACT_APP_SENTRY_DNS});


ReactDOM.render(
  <React.StrictMode>
    
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
