import {useFetchPeople, useFetchStarships, useFetchVehicles} from 'src/api/apiProvider';

export const useHomeScreen = () => {
  const {data, error, isLoading} = useFetchVehicles();
  // set data on context for details screen

  return {
    data,
    isLoading,
    error,
  };
};
