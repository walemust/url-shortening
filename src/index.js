import React from 'react';
import ReactDOM from 'react-dom';
import { ShortenUrlProvider } from 'react-shorten-url';
import './index.css';
import App from './App';

ReactDOM.render(
  <ShortenUrlProvider config={{ accessToken: 'bitly_access_token '}}>
    <App />
  </ShortenUrlProvider>,
  document.getElementById('root')
);

