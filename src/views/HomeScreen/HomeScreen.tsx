import React from 'react';
import {DrawerNavigatorScreenProps} from 'src/navigation/drawerNavigator';
import {FlatList, RefreshControl} from 'react-native';
import {useHomeScreen} from './HomeScreen.hooks';
import {ItemDetailsModal} from 'src/components/Modal';
import {ListItem} from './components/ListItem';
import {Loader} from 'src/components/Loader';
import {ErrorCatcher} from 'src/components/ErrorCatcher';
import Layout from 'src/components/Layout/Layout';

export const HomeScreen: React.FC<
  DrawerNavigatorScreenProps<'HomeScreen'>
> = ({}) => {
  const {
    people,
    selectedItem,
    isModalOpen,
    openModal,
    closeModal,
    handleRetry,
  } = useHomeScreen();

  if (people.isLoading) {
    return <Loader />;
  }
  if (people.error) {
    return <ErrorCatcher onRetry={handleRetry} />;
  }

  return (
    <Layout>
      <ItemDetailsModal
        isVisible={isModalOpen}
        item={selectedItem}
        onClose={closeModal}
      />
      <FlatList
        data={people.data}
        renderItem={({item}) => (
          <ListItem item={item} onPressItem={openModal} />
        )}
        refreshControl={
          <RefreshControl
            refreshing={people.isLoading}
            onRefresh={handleRetry}
          />
        }
      />
    </Layout>
  );
};
