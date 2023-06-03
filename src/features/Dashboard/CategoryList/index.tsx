import { View, StyleSheet } from 'react-native';
import CategoryItem from './Item';

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
  {
    id: 8,
    title: 'More',
    link: 'More',
    icon: require('assets/images/more.png'),
  },
];
export default function CategoryList() {
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <CategoryItem item={item} key={item.link} />
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
