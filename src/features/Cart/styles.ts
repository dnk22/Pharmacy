import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  userInfo: {
    paddingHorizontal: 15,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#E9E9E9',
    justifyContent: 'space-between',
  },
  col: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    height: 32,
    width: 32,
    borderRadius: 40,
  },
  arrow: {
    transform: [{ rotate: '90deg' }],
    marginLeft: 5,
    FontDefault: '500',
  },
  headerConfig: {
    width: 20,
    height: 20,
    marginRight: 20,
    transform: [{ rotate: '90deg' }],
  },
  itemList: {
    maxHeight: 360,
  },
  discount: {
    padding: 10,
  },
  coupon: {
    marginTop: 10,
    height: 50,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E9E9E9',
  },
  couponCode: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountItem: {
    height: 34,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  value: {
    fontWeight: '700',
  },
  checkout: {
    height: 66,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderColor: '#E9E9E9',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkoutButton: {
    width: 175,
    height: 40,
    borderRadius: 10,
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
});
export default styles;
