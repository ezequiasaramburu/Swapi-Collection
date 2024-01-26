import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeScreen} from 'src/views/HomeScreen';
import {ShopScreen} from 'src/views/ShopScreen';
import IVehicle from 'src/types/vehicle';
import IStarship from 'src/types/starship';

export type DrawerNavigatorParamList = {
  HomeScreen: undefined;
  ShopScreen: undefined;
  ProductDetailScreen: {selectedItem: IVehicle | IStarship};
};

const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();

export type DrawerNavigatorScreenProps<
  T extends keyof DrawerNavigatorParamList,
> = NativeStackScreenProps<DrawerNavigatorParamList, T>;

export const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'CHARACTERS'}}
      />
      <Drawer.Screen
        name="ShopScreen"
        component={ShopScreen}
        options={{title: 'SHOP'}}
      />
    </Drawer.Navigator>
  );
};
