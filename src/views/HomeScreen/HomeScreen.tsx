import React from 'react';
import {DrawerNavigatorScreenProps} from 'src/navigation/drawerNavigator';
import {FlatList, Text} from 'react-native';
import {useHomeScreen} from './HomeScreen.hooks';
import {ItemDetailsModal} from 'src/components/Modal';
import {ListItem} from './components/ListItem';

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
          <ListItem item={item} onPressItem={openModal} />
        )}
      />
    </>
  );
};
