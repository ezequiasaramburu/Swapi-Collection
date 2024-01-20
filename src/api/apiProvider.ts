import {useQuery, UseQueryOptions} from 'react-query';
import IPeople from 'src/types/people';
import IStarship from 'src/types/starship';
import IVehicle from 'src/types/vehicle';

interface Response<T> {
  results: T[];
}
// on a real project this should be on an .env file
const apiBaseUrl = 'https://swapi.dev/api';

export const apiProvider = {
  fetchPeople: async (): Promise<IPeople[]> => {
    const response = await fetch(`${apiBaseUrl}/people/`);
    const data: Response<IPeople> = await response.json();
    return data.results;
  },
  fetchStarships: async (): Promise<IStarship[]> => {
    const response = await fetch(`${apiBaseUrl}/starships/`);
    const data: Response<IStarship> = await response.json();
    return data.results;
  },
  fetchVehicles: async (): Promise<IVehicle[]> => {
    const response = await fetch(`${apiBaseUrl}/vehicles/`);
    const data: Response<IVehicle> = await response.json();
    return data.results;
  },
};

export const useFetchPeople = (options?: UseQueryOptions<IPeople[]>) => {
  return useQuery<IPeople[]>('People', apiProvider.fetchPeople, options);
};

export const useFetchStarships = (options?: UseQueryOptions<IStarship[]>) => {
  return useQuery<IStarship[]>(
    'Starships',
    apiProvider.fetchStarships,
    options,
  );
};

export const useFetchVehicles = (options?: UseQueryOptions<IVehicle[]>) => {
  return useQuery<IVehicle[]>('Vehicles', apiProvider.fetchVehicles, options);
};
