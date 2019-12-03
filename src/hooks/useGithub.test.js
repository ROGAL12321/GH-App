import React from 'react';
import { ReusableProvider } from 'reusable';
import { renderHook, act } from '@testing-library/react-hooks'
import useGithub from './useGithub'

test('should render hook', () => {
  const wrapper = ({ children }) => <ReusableProvider> {children} </ReusableProvider>

  const { result } = renderHook(() => useGithub(), { wrapper })
  const SEARCH = 'Hi'

  act(() => { result.current.search(SEARCH) })

  expect(result.current.searchName).toBe(SEARCH)
})
