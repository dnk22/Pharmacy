import Text from 'components/Text';
import { View, StyleSheet } from 'react-native';
import { Dimensions, Image } from 'react-native';

const ITEM_WIDTH = Dimensions.get('window').width / 4;

type CategoryItemProps = {
  item: {
    id: number;
    title: string;
    link: string;
    icon: string;
  };
};
export default function CategoryItem({ item }: CategoryItemProps) {
  const size =
    item.title === 'More'
      ? { width: 30, height: 30, tintColor: '#FD2572' }
      : { width: 58, height: 58 };
  return (
    <View style={styles.container}>
      <View style={styles.imgBackground}>
        <Image source={item.icon} style={{ borderRadius: 60, ...size }} />
      </View>
      <Text style={styles.title} fontSize={10}>
        {item.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBackground: {
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF1F6',
    borderColor: '#FFE8F0',
    borderWidth: 1,
    marginBottom: 5,
  },
  title: {
    fontWeight: 'bold',
  },
});
