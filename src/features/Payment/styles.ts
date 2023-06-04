import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  topTitle: {
    fontWeight: '700',
    marginLeft: 10,
  },
  paymentOptions: {},
  optionTitle: {
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
  },
  paymentItem: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderColor: '#EEEEEE',
    borderBottomWidth: 1,
  },
  paymentItemIcon: {
    width: 20,
    height: 20,
  },
  paymentTitle: {
    flex: 1,
    marginHorizontal: 10,
    fontWeight: '600',
  },
  arrow: {
    transform: [{ rotate: '90deg' }],
  },
  giftCode: {
    height: 46,
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
  },
  giftCodeText: {
    flex: 1,
    fontWeight: '600',
    marginLeft: 10,
  },
  giftCodeApply: {
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  itemDetails: {
    padding: 10,
  },
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
    flex: 1.5,
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
});
export default styles;
