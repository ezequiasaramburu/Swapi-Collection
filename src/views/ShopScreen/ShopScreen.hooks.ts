import {useFetchVehicles} from 'src/api/apiProvider';

export const useProductScreen = () => {
  const {data, error, isLoading} = useFetchVehicles();

  return {
    data,
    isLoading,
    error,
  };
};
