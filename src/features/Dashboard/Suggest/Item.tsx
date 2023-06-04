import { Pressable, StyleSheet, Image } from 'react-native';

export default function Item({ image, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={image}
        style={{
          width: '100%',
          height: '100%',
        }}
        resizeMode="contain"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 149,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#DFDED9',
  },
  img: {
    width: 100,
    height: 100,
  },
});
