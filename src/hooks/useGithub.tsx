import { createStore } from 'reusable';
import axios, { AxiosResponse } from 'axios'
import { useState } from 'react';
import createClient from 'apollo';
import { getUrlParameter } from 'helpers/url';
import { getItem, setItem } from 'helpers/storage';

interface IUseGithub {
  searchName?: string,
  search?: (query: string) => Promise<any>,
  authorize?: () => void,
  errors?: {
    cors?: string
  },
  fetching?: boolean,
  apolloClient?: any,
  initApolloClient?: () => void,
  logout?: () => void
}

const useGithub = createStore((): IUseGithub => {
  const [searchName, setSearchName] = useState<string>('')
  const [apolloClient, setApolloClient] = useState<any>(null);
  const [errors, setErrors] = useState<{cors? : string}>({})
  const [fetching, setFetching] = useState<boolean>(false);

  const GITHUB_URL = 'https://github.com/login/oauth'
  const GITHUB_TOKEN_KEY = 'GITHUB_TOKEN'

  const authorize = () => {
    window.location.href = `${GITHUB_URL}/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&scope=user`;
  }

  const getAccessToken = (code: string): Promise<any> => {
    return axios({
      method: 'post',
      url: `${GITHUB_URL}/access_token`,
      params: {
        client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
        client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
        code
      }
    })
      .then(saveAccessToken)
      .catch(() => {
        setErrors({ cors: 'CORS Error' })
        setFetching(false)
      })
  }

  const saveAccessToken = ({ data }: AxiosResponse): void => {
    const token = getUrlParameter(`?${data}`, 'access_token')

    if(!token) {
      return setFetching(false)
    }

    setItem(GITHUB_TOKEN_KEY, token)
    setApolloClient(createClient(token))
    setFetching(false)
  }

  const initApolloClient = (): void => {
    const code = getUrlParameter(window.location.href, 'code');
    const tokenValue = getItem(GITHUB_TOKEN_KEY);
    if(!code) return;

    tokenValue
      ? setApolloClient(createClient(tokenValue))
      : getAccessToken(code)
  }

  const logout = (): void => {
    setItem(GITHUB_TOKEN_KEY, '')
    setApolloClient(null)
  }

  const search = async (search: string): Promise<any> => {
    setSearchName(search)
  }

  return {
    searchName,
    search,
    authorize,
    apolloClient,
    initApolloClient,
    logout,
    fetching,
    errors
  }
})

export default useGithub
