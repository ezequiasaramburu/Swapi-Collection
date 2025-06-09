import React from 'react';
import {RefreshControl, SectionList} from 'react-native';
import {useShopScreen} from './ShopScreen.hooks';
import {DrawerNavigatorScreenProps} from 'src/navigation/drawerNavigator';
import {Loader} from 'src/components/Loader';
import {RenderItem} from './components/ListItem';
import {ListHeader} from './components/ListHeader';
import IVehicle from 'src/types/vehicle';
import IStarship from 'src/types/starship';
import {ErrorCatcher} from 'src/components/ErrorCatcher';
import Layout from 'src/components/Layout/Layout';

export const ShopScreen: React.FC<DrawerNavigatorScreenProps<'ShopScreen'>> = ({
  navigation,
}) => {
  const {vehicle, starship, handleRetry} = useShopScreen();

  if (vehicle.isLoading || starship.isLoading) {
    return <Loader />;
  }
  if (vehicle.error || starship.error) {
    return <ErrorCatcher onRetry={handleRetry} />;
  }

  const data: {title: string; data: (IVehicle | IStarship)[]}[] = [
    {title: 'VEHICLES', data: vehicle.data || []},
    {title: 'STARSHIPS', data: starship.data || []},
  ];

  return (
    <Layout>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        renderItem={({item}) => (
          <RenderItem
            item={item}
            onPressItem={selectedItem =>
              navigation.navigate('ProductDetailScreen', {selectedItem})
            }
          />
        )}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({section: {title}}) => (
          <ListHeader title={title} />
        )}
        refreshControl={
          <RefreshControl
            refreshing={vehicle.isLoading || starship.isLoading}
            onRefresh={handleRetry}
          />
        }
      />
    </Layout>
  );
};
