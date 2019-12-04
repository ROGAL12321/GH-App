import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from 'styles/grid';
import { Header, HeaderContainer } from './Header.styled';
import useGithub from 'hooks/useGithub';

import { H1 } from 'styles/typo';
import { PrimaryButton } from 'styles/buttons';

const HeaderComponent = (): JSX.Element => {
  const { apolloClient, logout }  = useGithub();
  return (
    <Header>
      <Container>
        <HeaderContainer>
          <Link to="/">
            <H1>Github App</H1>
          </Link>

          {apolloClient && <PrimaryButton onClick={logout}>Logout</PrimaryButton>}
        </HeaderContainer>
      </Container>
    </Header>
  )
}
export default HeaderComponent
