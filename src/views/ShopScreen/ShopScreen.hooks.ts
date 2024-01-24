import {useFetchStarships, useFetchVehicles} from 'src/api/apiProvider';

export const useShopScreen = () => {
  const vehicle = useFetchVehicles();
  const starship = useFetchStarships();

  const handleRetry = () => {
    vehicle.refetch();
    starship.refetch();
  };

  return {
    vehicle,
    starship,
    handleRetry,
  };
};
