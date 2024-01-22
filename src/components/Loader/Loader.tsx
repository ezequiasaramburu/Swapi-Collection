import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './Loader.styles';

export const Loader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'LOADING...'}</Text>
    </View>
  );
};
