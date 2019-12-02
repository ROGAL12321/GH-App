import { renderHook, act } from '@testing-library/react-hooks'
import useGithub from './useGithub'

test('should render hook', () => {
  const { result } = renderHook(() => useGithub())

  expect(result.current).toBe({})
})
