import {StyleSheet} from 'react-native';
import colors from 'src/style/color';

export const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  title: {
    fontSize: 26,
    marginBottom: 8,
    fontWeight: 'bold',
    color: colors.darkBlue,
  },
  item: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  itemDetail: {
    fontSize: 20,
    marginLeft: 8,
    color: colors.lightBlue,
  },
});
