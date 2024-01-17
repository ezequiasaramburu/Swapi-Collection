import React from 'react';
import {RootStackScreenProps} from 'src/navigation/rootStack';
import {Text} from 'react-native';

export const HomeScreen: React.FC<RootStackScreenProps<'Home'>> = ({}) => {
  return <Text>{'HOME SCREEN'}</Text>;
};
