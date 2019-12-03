import { createStore } from 'reusable';
import axios from 'axios'
import { useState } from 'react';
import createClient from 'apollo';

const getCode = () => {
  if(!window.location.href) {
    return null;
  }

  const x = window.location.href.indexOf("=")
  const code = window.location.href.slice(x + 1, -2)

  return code;
}

const useGithub = createStore(() => {
  const [searchName, setSearchName] = useState<string>('')
  const [token, setToken] = useState<string | null>(null)
  const [apolloClient, setApolloClient] = useState<any>(null);

  const authorize = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&scope=user`;
  }

  const initApolloClient = () => {
    const code = getCode();

    if(token) {
      return setApolloClient(createClient(token))
    }

    axios.post(`https://github.com/login/oauth/access_token?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=http://localhost:3001/&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}&code=${code}`)
    .then((data) => {
      const response = data.data.toString();

      if(response.includes('access_token')) {
        const x = response.indexOf("=")
        const y = response.indexOf("&")
        const token = response.toString().slice(x + 1, y)

        setToken(token)
        setApolloClient(createClient(token))
      }
    })
  }

  const logout = () => {
    setToken(null)
    setApolloClient(null)
  }

  const search = async (search: string) => {
    setSearchName(search)
  }

  return {
    searchName,
    search,
    token,
    authorize,
    apolloClient,
    initApolloClient,
    logout
  }
})

export default useGithub
