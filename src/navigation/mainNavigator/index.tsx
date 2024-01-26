import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProductDetailScreen} from 'src/views/ProductDetail';
import {DrawerNavigator} from 'src/navigation/drawerNavigator';
import IVehicle from 'src/types/vehicle';
import IStarship from 'src/types/starship';

export type MainNavigatorParamList = {
  DrawerNavigator: undefined;
  ProductDetailScreen: {selectedItem: IVehicle | IStarship};
};

const Stack = createNativeStackNavigator<MainNavigatorParamList>();

export type MainNavigatorScreenProps<T extends keyof MainNavigatorParamList> =
  NativeStackScreenProps<MainNavigatorParamList, T>;

export const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
        options={{
          headerBackTitle: 'Shop',
          title: 'PRODUCT DETAIL',
        }}
      />
    </Stack.Navigator>
  );
};
