import { View, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Item from './Item';
import { SCREEN_WIDTH } from 'share/scale';
import { dataCarousel } from 'utils/constant';

function CarouselComponent() {
  const baseOptions = {
    vertical: false,
    width: SCREEN_WIDTH,
    height: 160,
  } as const;

  return (
    <View style={styles.container}>
      <Carousel
        {...baseOptions}
        loop
        autoPlayInterval={2000}
        pagingEnabled
        data={dataCarousel}
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
