import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import IPeople from 'src/types/people';
import {styles} from './Card.styles';

interface ICardProps {
  data: IPeople;
  onPress: () => void;
}

export const Card: React.FC<ICardProps> = ({data, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Text style={styles.title}>{data.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
