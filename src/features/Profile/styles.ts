import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from 'share/scale';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  edit: {
    width: 24,
    height: 24,
  },
  userInfo: {
    flex: 1,
    marginHorizontal: 15,
  },
  title: {
    fontWeight: '900',
    marginBottom: 8,
  },
  widget: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 15,
  },
  widgetItem: {
    width: (SCREEN_WIDTH - 26 - 14) / 2,
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#EAEAEA',
    backgroundColor: '#FAFAFA',
  },
  widgetItemIcon: {
    width: 22,
    height: 22,
    tintColor: '#666666',
  },
  widgetItemTitle: {
    marginLeft: 15,
    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: '#ECECEC',
    width: '100%',
  },
  settings: {
    padding: 10,
    paddingTop: 15,
  },
  settingsItem: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },
  settingItemIcon: {
    width: 20,
    height: 20,
    tintColor: '#531449',
  },
  settingItemTitle: {
    flex: 1,
    marginHorizontal: 15,
    fontWeight: '500',
  },
});

export default styles;
