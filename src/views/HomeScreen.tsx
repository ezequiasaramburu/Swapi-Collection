import React from 'react';
import {RootStackScreenProps} from 'src/navigation/rootStack';
import {FlatList, Text} from 'react-native';
import {useHomeScreen} from './HomeScreen.hooks';
import {Card} from 'src/components/Card/Card';
import IPeople from 'src/types/people';

const RenderItem: React.FC<{item: IPeople}> = ({item}) => {
  const handlePress = () => console.log('pressed');

  return <Card data={item} onPress={handlePress} />;
};

export const HomeScreen: React.FC<RootStackScreenProps<'Home'>> = ({}) => {
  const {data, error, isLoading} = useHomeScreen();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Loading...</Text>;
  }
  return (
    <FlatList data={data} renderItem={({item}) => <RenderItem item={item} />} />
  );
};
