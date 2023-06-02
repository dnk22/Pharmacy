import { View, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Item from './Item';

const PAGE_WIDTH = Dimensions.get('window').width;

function CarouselComponent() {
  const data = [
    'https://cdn.pixabay.com/photo/2017/12/09/16/41/snow-man-3008179_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/05/19/13/28/bird-8004544_1280.jpg',
  ];
  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH,
    height: 160,
  } as const;

  return (
    <View style={styles.container}>
      <Carousel
        {...baseOptions}
        loop
        autoPlayInterval={2000}
        pagingEnabled
        data={data}
        autoPlay={true}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => <Item link={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 160,
    backgroundColor: 'gray',
  },
});

export default CarouselComponent;
