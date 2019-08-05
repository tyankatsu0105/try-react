import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { client } from '@api/index';
import { ApolloProvider } from '@apollo/react-hooks';

import '@styles/core/style.scss';

import { App } from './App';

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
