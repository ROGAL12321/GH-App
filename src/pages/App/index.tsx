import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';

import Search from 'pages/Search';
import Results from 'pages/Results';
import Details from 'pages/Details';

import { PrimaryButton, ButtonContainer } from 'styles/buttons';
import useGithub from 'hooks/useGithub';

import { ApolloProvider } from '@apollo/react-hooks';

const App: React.FC = (): JSX.Element => {
  const { authorize, initApolloClient, apolloClient } = useGithub()
  useEffect(initApolloClient, [])

  if(apolloClient) {
    return (
      <ApolloProvider client={apolloClient}>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/results" component={Results} />
          <Route path="/details/:owner/:name" component={Details} />
        </Switch>
      </ApolloProvider>
    )
  }

  return (
    <ButtonContainer>
      <PrimaryButton onClick={authorize}> Login </PrimaryButton>
    </ButtonContainer>
  )
}

export default App;
