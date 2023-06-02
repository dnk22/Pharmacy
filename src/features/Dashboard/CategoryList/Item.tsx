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
  key: string;
};
export default function CategoryItem({ item, key }: CategoryItemProps) {
  return (
    <View style={styles.container} key={key}>
      <View style={styles.imgBackground}>
        {item.icon === 'more' ? (
          <Image
            source={require('assets/images/more.png')}
            style={{ width: 30, height: 30, tintColor: '#FD2572' }}
          />
        ) : (
          <Image
            source={require('assets/images/phone.webp')}
            style={{ width: 58, height: 58, borderRadius: 60 }}
          />
        )}
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
