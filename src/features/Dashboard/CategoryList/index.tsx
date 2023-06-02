import { View, StyleSheet } from 'react-native';
import CategoryItem from './Item';

const data = [
  {
    id: 1,
    title: 'Mobiles',
    link: 'mobile',
    icon: '',
  },
  {
    id: 2,
    title: 'Electronics',
    link: 'Electronics',
    icon: '',
  },
  {
    id: 3,
    title: 'Fashion',
    link: 'Fashion',
    icon: '',
  },
  {
    id: 4,
    title: 'Furniture',
    link: 'Furniture',
    icon: '',
  },
  {
    id: 5,
    title: 'Grocery',
    link: 'Grocery',
    icon: '',
  },
  {
    id: 6,
    title: 'Appliances',
    link: 'Appliances',
    icon: '',
  },
  {
    id: 7,
    title: 'Book,Toys',
    link: 'Book',
    icon: '',
  },
  {
    id: 8,
    title: 'More',
    link: 'More',
    icon: 'more',
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
