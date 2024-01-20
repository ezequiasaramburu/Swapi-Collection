import {useQuery, UseQueryOptions} from 'react-query';
import IPeople from 'src/types/people';

interface Response<T> {
  results: T[];
}
// on a real project this should go on an .env file
const apiBaseUrl = 'https://swapi.dev/api/';

export const apiProvider = {
  fetchPeople: async (): Promise<IPeople[]> => {
    const response = await fetch(`${apiBaseUrl}people/`);
    const data: Response<IPeople> = await response.json();
    return data.results;
  },
  // Add more fetch functions for other entities (films, species, vehicles, starships, etc.)
};

export const useFetchPeople = (options?: UseQueryOptions<IPeople[]>) => {
  return useQuery<IPeople[]>('People', apiProvider.fetchPeople, options);
};
