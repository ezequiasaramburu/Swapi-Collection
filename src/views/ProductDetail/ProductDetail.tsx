import React from 'react';
import {MainNavigatorScreenProps} from 'src/navigation/mainNavigator';
import {Text, View} from 'react-native';
import {styles} from './ProductDetail.styles';
import Layout from 'src/components/Layout/Layout';
import IVehicle from 'src/types/vehicle';
import IStarship from 'src/types/starship';

export const ProductDetailScreen: React.FC<
  MainNavigatorScreenProps<'ProductDetailScreen'>
> = ({route}) => {
  const {selectedItem} = route.params;

  // Create different key arrays based on whether it's a starship or vehicle
  const getItemDetails = () => {
    if (!selectedItem) {
      return [];
    }

    if ('starship_class' in selectedItem) {
      // It's a starship
      const starship = selectedItem as IStarship;
      return [
        {key: 'ID: ', value: starship.id?.toString()},
        {key: 'Starship Class: ', value: starship.starship_class},
        {key: 'MGLT: ', value: starship.MGLT},
        {key: 'Hyperdrive Rating: ', value: starship.hyperdrive_rating},
      ];
    } else {
      // It's a vehicle
      const vehicle = selectedItem as IVehicle;
      return [
        {key: 'ID: ', value: vehicle.id?.toString()},
        {key: 'Vehicle Class: ', value: vehicle.vehicle_class},
      ];
    }
  };

  const keys = getItemDetails();

  return (
    <Layout>
      <View style={styles.container}>
        {keys.map((elem, index) => {
          return (
            <Text style={styles.item} key={index}>
              {elem.key}
              <Text style={styles.itemDetail}>{elem.value || 'N/A'}</Text>
            </Text>
          );
        })}
      </View>
    </Layout>
  );
};
