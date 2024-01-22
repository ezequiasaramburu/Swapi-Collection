import {useFetchStarships, useFetchVehicles} from 'src/api/apiProvider';

export const useShopScreen = () => {
  const vehicle = useFetchVehicles();
  const starship = useFetchStarships();

  return {
    vehicle,
    starship,
  };
};
