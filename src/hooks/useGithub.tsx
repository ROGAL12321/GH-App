import { createStore } from 'reusable';
import { useState } from 'react';

const useGithub = createStore(() => {
  const [searchName, setSearchName] = useState<string>('')

  const search = async (search: string) => {
    setSearchName(search)
  }

  return {
    searchName,
    search
  }
})

export default useGithub
