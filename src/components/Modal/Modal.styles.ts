import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignContent: 'center',
  },
  view: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginHorizontal: 16,
  },
  item: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  itemDetail: {
    fontSize: 20,
    marginLeft: 5,
    color: '#0e38f0',
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
