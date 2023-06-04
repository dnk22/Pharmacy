import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import styles from './styles';
import CategoryItem from 'features/Dashboard/CategoryList/Item';
import Text from 'components/Text';
import PressableHaptic from 'components/PressableHaptic';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import SvgIcon from 'components/SvgIcon';

const data = [
  {
    id: 1,
    title: 'Mobiles',
    link: 'mobile',
    icon: require('assets/images/phone.webp'),
  },
  {
    id: 2,
    title: 'Electronics',
    link: 'Electronics',
    icon: require('assets/images/electronics.webp'),
  },
  {
    id: 3,
    title: 'Fashion',
    link: 'Fashion',
    icon: require('assets/images/fashion.jpeg'),
  },
  {
    id: 4,
    title: 'Furniture',
    link: 'Furniture',
    icon: require('assets/images/Furniture.webp'),
  },
  {
    id: 5,
    title: 'Grocery',
    link: 'Grocery',
    icon: require('assets/images/Grocery.jpeg'),
  },
  {
    id: 6,
    title: 'Appliances',
    link: 'Appliances',
    icon: require('assets/images/Appliances.jpeg'),
  },
  {
    id: 7,
    title: 'Book,Toys',
    link: 'Book',
    icon: require('assets/images/book-toys.webp'),
  },
];

function Categories() {
  const navigation = useNavigation();
  // Use `setOptions`
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <PressableHaptic style={styles.searchIcon}>
          <SvgIcon name="search" />
        </PressableHaptic>
      ),
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.categoryList}>
        {data.map((item) => (
          <View key={item.link}>
            <CategoryItem item={item} />
          </View>
        ))}
      </View>
      <View style={styles.divider} />
      <View style={styles.featured}>
        <Text style={styles.title}>Featured</Text>
        <ScrollView>
          <View style={[styles.card, { backgroundColor: '#335F79' }]}>
            <View style={styles.cardLeft}>
              <Image
                source={require('assets/images/two-girl.png')}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              />
            </View>
            <View style={styles.cardRight}>
              <Text style={styles.cardTitle} color="white" fontSize={22}>
                Cassual
              </Text>
              <Text style={styles.cardSubTitle} color="white">
                Collections
              </Text>
              <PressableHaptic style={styles.shopNow}>
                <Text color="white">Shop now</Text>
              </PressableHaptic>
            </View>
          </View>
          <View style={[styles.card, { backgroundColor: '#E17391' }]}>
            <View style={styles.cardLeft}>
              <Image
                source={require('assets/images/men1.png')}
                style={{ width: '100%', height: '100%' }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.cardRight}>
              <Text style={styles.cardTitle} color="white" fontSize={22}>
                Boyfriend
              </Text>
              <Text style={styles.cardSubTitle} color="white">
                Collections
              </Text>
              <PressableHaptic style={styles.shopNow}>
                <Text color="white">Shop now</Text>
              </PressableHaptic>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
export default Categories;
