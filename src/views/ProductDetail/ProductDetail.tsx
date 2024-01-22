import React from 'react';
import {MainNavigatorScreenProps} from 'src/navigation/mainNavigator';
import {Text} from 'react-native';

export const ProductDetailScreen: React.FC<
  MainNavigatorScreenProps<'ProductDetailScreen'>
> = ({}) => {
  return (
    <>
      <Text>{'Product Details'}</Text>
    </>
  );
};
