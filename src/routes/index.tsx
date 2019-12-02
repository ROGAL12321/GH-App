import React from 'react';
import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';
import { ReusableProvider } from 'reusable';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import Global from 'styles/global';
import Layout from 'styles/layout';

import Header from 'common/Header';

import Search from 'pages/Search';
import Results from 'pages/Results';
import Details from 'pages/Details';

const Router: React.FC = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <ReusableProvider>
        <Header />
          <Layout>
            <Switch>
              <Route exact path="/" component={Search} />
              <Route path="/results" component={Results} />
              <Route path="/details/:id" component={Details} />
            </Switch>
          </Layout>
        <Global />
      </ReusableProvider>
    </ThemeProvider>
  </BrowserRouter>
)

export default Router;
