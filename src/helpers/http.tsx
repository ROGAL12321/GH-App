import axios, { AxiosResponse } from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 15000,
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  error => console.log(error)
);

export const get = (endpoint: string, params = {}) => axiosInstance.get(endpoint, {params});
