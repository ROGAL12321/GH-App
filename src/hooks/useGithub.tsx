import { createStore } from 'reusable';
import { useState } from 'react';
import { get } from 'helpers/http';

const useGithub = createStore(() => {
  const [results, setResults] = useState<any>([])

  const search = async (dataType: string, query: any): Promise<void> => {
    const results = await get(dataType, query);
    setResults(results);
  }

  return {
    results,
    search
  }
})

export default useGithub
