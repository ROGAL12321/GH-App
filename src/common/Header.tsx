import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from 'styles/grid';
import { Header, HeaderContainer } from './Header.styled';
import { H1 } from 'styles/typo';

const HeaderComponent = (): JSX.Element => (
  <Header>
    <Container>
      <HeaderContainer>
        <Link to="/">
          <H1>Github App</H1>
        </Link>
      </HeaderContainer>
    </Container>
  </Header>
)

export default HeaderComponent
