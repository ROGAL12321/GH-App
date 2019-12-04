import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import Search from 'pages/Search';
import Results from 'pages/Results';
import Details from 'pages/Details';

import { PrimaryButton, ButtonContainer } from 'styles/buttons';
import useGithub from 'hooks/useGithub';

import Loader from 'common/Loader';

import { H2 } from 'styles/typo';

const App: React.FC = (): JSX.Element => {
  const { authorize, initApolloClient, apolloClient, errors, fetching } = useGithub()
  useEffect(initApolloClient, [])

  if(fetching) return <Loader />

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
    <>
    {errors.cors &&  <H2 centered>Make sure you have CORS enabled in your browser</H2> }
    <ButtonContainer>
      <PrimaryButton disabled={errors.cors} onClick={authorize}> Login </PrimaryButton>
    </ButtonContainer>
    </>
  )
}

export default App;
