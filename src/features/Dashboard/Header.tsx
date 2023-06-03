import SvgIcon from 'components/SvgIcon';
import Text from 'components/Text';
import { Pressable, View, StyleSheet, Image } from 'react-native';
export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Pressable style={styles.buttonNavigation}>
          <SvgIcon name="menu" size={16} />
        </Pressable>
        <Text>Home</Text>
      </View>
      <View style={styles.right}>
        <Pressable style={styles.rightIcon}>
          <SvgIcon name="search" />
        </Pressable>
        <Pressable style={styles.rightIcon}>
          <SvgIcon name="heart" />
        </Pressable>
        <Pressable style={styles.rightIcon}>
          <Image source={require('assets/images/cart.png')} style={{ width: 24, height: 24 }} />
          <View style={styles.dot}>
            <Text fontSize={9} color="white">
              2
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomColor: '#B2B2BC',
    borderBottomWidth: 0.3,
  },
  icon: {
    height: 26,
    width: 26,
    marginLeft: 40,
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 20,
    alignItems: 'center',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonNavigation: {
    width: 34,
    height: 34,
    marginRight: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.19,
    shadowRadius: 2,
    elevation: 2,
  },
  rightIcon: {
    marginLeft: 30,
  },
  dot: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FD2B75',
    borderRadius: 50,
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
