import React from 'react';
import { View, StyleSheet } from 'react-native';
import CategoryItem from './Item';
import { useNavigation } from '@react-navigation/native';
import { CATEGORIES } from '../../../navigation/constants';
import PressableHaptic from '../../../components/PressableHaptic';

const data = [
  {
    id: 1,
    title: 'Mobiles',
    link: CATEGORIES,
    icon: require('../../../assets/images/phone.webp'),
  },
  {
    id: 2,
    title: 'Electronics',
    link: CATEGORIES,
    icon: require('../../../assets/images/electronics.webp'),
  },
  {
    id: 3,
    title: 'Fashion',
    link: CATEGORIES,
    icon: require('../../../assets/images/fashion.jpeg'),
  },
  {
    id: 4,
    title: 'Furniture',
    link: CATEGORIES,
    icon: require('../../../assets/images/Furniture.webp'),
  },
  {
    id: 5,
    title: 'Grocery',
    link: CATEGORIES,
    icon: require('../../../assets/images/Grocery.jpeg'),
  },
  {
    id: 6,
    title: 'Appliances',
    link: CATEGORIES,
    icon: require('../../../assets/images/Appliances.jpeg'),
  },
  {
    id: 7,
    title: 'Book,Toys',
    link: 'Book',
    icon: require('../../../assets/images/book-toys.webp'),
  },
  {
    id: 8,
    title: 'More',
    link: CATEGORIES,
    icon: require('../../../assets/images/more.png'),
  },
];
export default function CategoryList() {
  const navigation = useNavigation();

  const onItemPress = (item: any) => {
    try {
      navigation.navigate(item.link);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {data.map((item) => (
        <PressableHaptic key={item.title} onPress={() => onItemPress(item)}>
          <CategoryItem item={item} />
        </PressableHaptic>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
