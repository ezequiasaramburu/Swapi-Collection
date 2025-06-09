import {useQuery, UseQueryOptions} from 'react-query';
import IPeople from 'src/types/people';
import IStarship from 'src/types/starship';
import IVehicle from 'src/types/vehicle';

// on a real project this should be on an .env file
const apiBaseUrl = 'https://swapi.online/api';

export const apiProvider = {
  fetchPeople: async (): Promise<IPeople[]> => {
    const response = await fetch(`${apiBaseUrl}/characters/`);
    const responseData: IPeople[] = await response.json();
    return responseData;
  },
  fetchStarships: async (): Promise<IStarship[]> => {
    const response = await fetch(`${apiBaseUrl}/starships/`);
    const responseData: IStarship[] = await response.json();
    return responseData;
  },
  fetchVehicles: async (): Promise<IVehicle[]> => {
    const response = await fetch(`${apiBaseUrl}/vehicles/`);
    const responseData: IVehicle[] = await response.json();
    return responseData;
  },
};

export const useFetchPeople = (options?: UseQueryOptions<IPeople[]>) => {
  return useQuery<IPeople[]>(['People'], apiProvider.fetchPeople, options);
};

export const useFetchStarships = (options?: UseQueryOptions<IStarship[]>) => {
  return useQuery<IStarship[]>(
    ['Starships'],
    apiProvider.fetchStarships,
    options,
  );
};

export const useFetchVehicles = (options?: UseQueryOptions<IVehicle[]>) => {
  return useQuery<IVehicle[]>(['Vehicles'], apiProvider.fetchVehicles, options);
};
