import React from 'react';
import { HashRouter } from 'react-router-dom';
import { ReusableProvider } from 'reusable';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import Global from 'styles/global';

import MainLayout from 'layouts/main'

import App from 'pages/App';

const Router: React.FC = () => (
  <HashRouter>
    <ThemeProvider theme={theme}>
      <ReusableProvider>
        <MainLayout>
          <App />
        </MainLayout>
        <Global />
      </ReusableProvider>
    </ThemeProvider>
  </HashRouter>
)

export default Router;
