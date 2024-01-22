import React from 'react';
import {Card} from 'src/components/Card';
import IPeople from 'src/types/people';

export const ListItem: React.FC<{
  item: IPeople;
  onPressItem: (item: IPeople) => void;
}> = ({item, onPressItem}) => {
  return <Card data={item} onPress={() => onPressItem(item)} />;
};
