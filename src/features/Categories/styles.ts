import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  categoryList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#ECECEC',
    width: '100%',
  },
  featured: {
    padding: 10,
    paddingTop: 20,
  },
  title: {
    fontWeight: '700',
  },
  card: {
    height: 168,
    marginTop: 20,
    borderRadius: 10,
    flexDirection: 'row',
  },
  cardLeft: {
    flex: 1,
  },
  cardRight: {
    flex: 1,
    justifyContent: 'center',
  },
  shopNow: {
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FD4487',
    borderRadius: 10,
    marginTop: 20,
  },
  cardTitle: {
    fontWeight: '700',
  },
  cardSubTitle: {
    marginTop: 10,
  },
  searchIcon: {
    marginRight: 10,
    padding: 4,
  },
});
export default styles;
