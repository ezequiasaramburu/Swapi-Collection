import React from 'react';
import {ShopCard} from 'src/components/ShopCard';
import IVehicle from 'src/types/vehicle';
import IStarship from 'src/types/starship';

export const RenderItem: React.FC<{
  item: IVehicle | IStarship;
  onPressItem: (item: IVehicle | IStarship) => void;
}> = ({item, onPressItem}) => {
  return <ShopCard data={item} onPress={() => onPressItem(item)} />;
};
