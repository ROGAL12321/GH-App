import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

const createClient = (token: string) => {
  if(!token) {
    return null;
  }

  return new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: `Bearer ${token}`
    },
    cache: new InMemoryCache()
  });
}

export default createClient
