import React from 'react';
import {MainNavigatorScreenProps} from 'src/navigation/mainNavigator';
import {Text, View} from 'react-native';
import {styles} from './ProductDetail.styles';
import Layout from 'src/components/Layout/Layout';

export const ProductDetailScreen: React.FC<
  MainNavigatorScreenProps<'ProductDetailScreen'>
> = ({route}) => {
  const {selectedItem} = route.params;

  const keys = [
    {key: 'Name: ', value: selectedItem?.name},
    {key: 'Model: ', value: selectedItem?.model},
    {key: 'Length: ', value: selectedItem?.length},
    {key: 'Crew: ', value: selectedItem?.crew},
    {key: 'Passengers: ', value: selectedItem?.passengers},
    {key: 'Manufacturer: ', value: selectedItem?.manufacturer},
    {
      key: 'Max Atmosphering Speed: ',
      value: selectedItem?.max_atmosphering_speed,
    },
    {key: 'Cost In Credits: ', value: selectedItem?.cost_in_credits},
    {key: 'Cargo Capacity: ', value: selectedItem?.cargo_capacity},
  ];

  return (
    <Layout>
      <View style={styles.container}>
        {keys.map((elem, index) => {
          return (
            <Text style={styles.item} key={index}>
              {elem.key}
              <Text style={styles.itemDetail}>{elem.value}</Text>
            </Text>
          );
        })}
      </View>
    </Layout>
  );
};
