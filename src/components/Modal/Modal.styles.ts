import {StyleSheet} from 'react-native';
import colors from 'src/style/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBackground,
    justifyContent: 'center',
    alignContent: 'center',
  },
  view: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: colors.white,
    borderRadius: 5,
    marginHorizontal: 16,
  },
  item: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: colors.black,
  },
  itemDetail: {
    fontSize: 20,
    marginLeft: 5,
    color: colors.lightBlue,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  closeButton: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
