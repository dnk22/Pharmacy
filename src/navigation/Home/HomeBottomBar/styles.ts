import { StyleSheet } from 'react-native';
import { DIMENSIONS, SCREEN_WIDTH } from 'share/scale';

const styles = StyleSheet.create({
  tabBar: {
    height: DIMENSIONS.bottomBarHeight,
    borderTopColor: '#F2F2F2',
    borderTopWidth: 1,
  },
  activeBackground: {
    position: 'absolute',
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  component: {
    position: 'relative',
    height: 60,
    width: (SCREEN_WIDTH - 80) / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemActive: {
    width: '100%',
    height: 5,
    backgroundColor: '#FE4288',
    top: -8,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  icon: {
    marginBottom: 5,
  },
});

export default styles;
