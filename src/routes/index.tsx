import React from 'react';
import {
	HashRouter,
	Route,
	Switch
} from 'react-router-dom';
import { ReusableProvider } from 'reusable';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';

import client from 'apollo'

import theme from 'styles/theme';
import Global from 'styles/global';
import Layout from 'styles/layout';

import Header from 'common/Header';

import Search from 'pages/Search';
import Results from 'pages/Results';
import Details from 'pages/Details';

const Router: React.FC = () => (
  <HashRouter>
    <ThemeProvider theme={theme}>
      <ReusableProvider>
        <ApolloProvider client={client}>
          <Header />
          <Layout>
            <Switch>
              <Route exact path="/" component={Search} />
              <Route path="/results" component={Results} />
              <Route path="/details/:owner/:name" component={Details} />
              <Route path="/:code" component={Search} />
            </Switch>
          </Layout>
          <Global />
        </ApolloProvider>
      </ReusableProvider>
    </ThemeProvider>
  </HashRouter>
)

export default Router;
