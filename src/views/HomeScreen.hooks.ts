import {useFetchPeople} from 'src/api/apiProvider';

export const useHomeScreen = () => {
  const {data, error, isLoading} = useFetchPeople();

  return {
    data,
    isLoading,
    error,
  };
};
