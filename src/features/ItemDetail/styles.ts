import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    position: 'relative',
    height: 300,
    backgroundColor: 'gray',
  },
  like: {
    position: 'absolute',
    bottom: -30,
    right: 20,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    backgroundColor: '#FFE8F0',
  },
  detail: {
    padding: 10,
    paddingTop: 20,
  },
  itemCategory: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#FFE8F0',
    marginBottom: 15,
  },
  itemTitle: {
    fontWeight: '700',
  },
  itemSubTitle: {
    marginTop: 10,
  },
  review: {
    flex: 1,
    alignItems: 'flex-start',
  },
  colorView: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorPicker: {
    backgroundColor: '#FE85B1',
    height: 20,
    width: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  color: {
    height: 16,
    width: 16,
    backgroundColor: '#A29698',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2,
    marginHorizontal: 5,
  },
  rowItem: {
    height: 34,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowItemLabel: {
    fontWeight: '500',
  },
  rowItemValue: {},
  bottom: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    zIndex: 100,
    height: 100,
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#EEEEEE',
    flexDirection: 'row',
  },
  bottomAmount: {
    fontWeight: '700',
  },
  paynow: {
    flex: 0.5,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#FE4487',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FD4487',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 5,
    elevation: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#ECECEC',
    width: '100%',
    marginVertical: 20,
  },
});
export default styles;
