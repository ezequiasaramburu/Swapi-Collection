import React from 'react';
import {Button, Text, View} from 'react-native';
import IVehicle from 'src/types/vehicle';
import IStarship from 'src/types/starship';
import {styles} from './ShopCard.styles';

interface ICardProps {
  data: IVehicle | IStarship;
  onPress: () => void;
}

export const ShopCard: React.FC<ICardProps> = ({data, onPress}) => {
  const getDisplayData = () => {
    if ('starship_class' in data) {
      const starship = data as IStarship;
      return {
        title: `Starship #${starship.id}`,
        info: starship.starship_class || 'Unknown Class',
        details: starship.MGLT ? `MGLT: ${starship.MGLT}` : '',
      };
    } else {
      const vehicle = data as IVehicle;
      return {
        title: `Vehicle #${vehicle.id}`,
        info: vehicle.vehicle_class || 'Unknown Class',
        details: '',
      };
    }
  };

  const displayData = getDisplayData();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{displayData.title}</Text>
      <Text style={styles.info}>{displayData.info}</Text>
      {displayData.details && (
        <Text style={styles.info}>{displayData.details}</Text>
      )}
      <View style={styles.footer}>
        <Button title="DETAILS" onPress={onPress} />
      </View>
    </View>
  );
};
