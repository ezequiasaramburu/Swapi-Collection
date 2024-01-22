import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProductDetailScreen} from 'src/views/ProductDetail';
import {DrawerNavigator} from '../drawerNavigator';

export type MainNavigatorParamList = {
  DrawerNavigator: undefined;
  ProductDetailScreen: undefined;
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
