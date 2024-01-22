import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './ListHeader.styles';

export const ListHeader: React.FC<{title: string}> = ({title}) => (
  <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
