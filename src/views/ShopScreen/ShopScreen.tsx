import React from 'react';
import {Text, SectionList} from 'react-native';
import {useShopScreen} from './ShopScreen.hooks';
import {DrawerNavigatorScreenProps} from 'src/navigation/drawerNavigator';
import {Loader} from 'src/components/Loader';
import {RenderItem} from './components/ListItem';
import {ListHeader} from './components/ListHeader';
import IVehicle from 'src/types/vehicle';
import IStarship from 'src/types/starship';

export const ShopScreen: React.FC<
  DrawerNavigatorScreenProps<'ShopScreen'>
> = ({}) => {
  const {vehicle, starship} = useShopScreen();

  if (vehicle.isLoading || starship.isLoading) {
    return <Loader />;
  }
  if (vehicle.error || starship.error) {
    return <Text>Error</Text>;
  }

  const data: {title: string; data: (IVehicle | IStarship)[]}[] = [
    {title: 'VEHICLES', data: vehicle.data || []},
    {title: 'STARHIPS', data: starship.data || []},
  ];

  return (
    <>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <RenderItem
            item={item}
            onPressItem={() => console.log('item pressed')}
          />
        )}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({section: {title}}) => (
          <ListHeader title={title} />
        )}
      />
    </>
  );
};
