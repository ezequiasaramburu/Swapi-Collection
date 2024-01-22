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
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.info}>{data.model}</Text>
      <View style={styles.footer}>
        <Button title="DETAILS" onPress={onPress} />
      </View>
    </View>
  );
};
