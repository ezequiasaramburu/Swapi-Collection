import React from 'react';
import {Button, Text} from 'react-native';
import {useProductScreen} from './ShopScreen.hooks';
import {DrawerNavigatorScreenProps} from 'src/navigation/drawerNavigator';

export const ShopScreen: React.FC<DrawerNavigatorScreenProps<'ShopScreen'>> = ({
  navigation,
}) => {
  const {error, isLoading} = useProductScreen();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <>
      <Text>{'Products List'}</Text>
      <Button
        onPress={() => navigation.navigate('ProductDetailScreen')}
        title="Detalles"
        color="#841584"
      />
    </>
  );
};
