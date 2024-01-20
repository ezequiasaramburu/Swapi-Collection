import React from 'react';
import {RootStackScreenProps} from 'src/navigation/rootStack';
import {Text, View} from 'react-native';
import {useHomeScreen} from './HomeScreen.hooks';

export const HomeScreen: React.FC<RootStackScreenProps<'Home'>> = ({}) => {
  const {data, error, isLoading} = useHomeScreen();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Loading...</Text>;
  }
  return (
    <View>
      {data?.map(person => (
        <View key={person.url}>
          <Text>{person.name}</Text>
        </View>
      ))}
    </View>
  );
};
