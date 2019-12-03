import React from 'react';

import { Container } from 'styles/grid';
import Layout from 'styles/layout';

import Header from 'common/Header';

const MainLayout: React.FC = ({ children }): JSX.Element => (
  <>
    <Header/>
    <Container>
      <Layout>
        {children}
      </Layout>
    </Container>
  </>
)

export default MainLayout
