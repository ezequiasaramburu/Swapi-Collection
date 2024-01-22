import React from 'react';
import {DrawerNavigatorScreenProps} from 'src/navigation/drawerNavigator';
import {FlatList, Text} from 'react-native';
import {useHomeScreen} from './HomeScreen.hooks';
import {Card} from 'src/components/Card';
import {ItemDetailsModal} from 'src/components/Modal';
import IPeople from 'src/types/people';

const RenderItem: React.FC<{
  item: IPeople;
  onPressItem: (item: IPeople) => void;
}> = ({item, onPressItem}) => {
  return <Card data={item} onPress={() => onPressItem(item)} />;
};

export const HomeScreen: React.FC<
  DrawerNavigatorScreenProps<'HomeScreen'>
> = ({}) => {
  const {
    data,
    error,
    isLoading,
    selectedItem,
    isModalOpen,
    openModal,
    closeModal,
  } = useHomeScreen();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <>
      <ItemDetailsModal
        isVisible={isModalOpen}
        item={selectedItem}
        onClose={closeModal}
      />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <RenderItem item={item} onPressItem={openModal} />
        )}
      />
    </>
  );
};
