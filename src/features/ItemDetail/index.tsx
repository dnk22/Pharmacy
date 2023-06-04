import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import styles from './styles';
import { useCustomTheme } from 'resources/theme';
import Text from 'components/Text';
import PressableHaptic from 'components/PressableHaptic';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Rating } from 'react-native-ratings';

const colorsPicker = ['#A29698', '#80C6A9', '#8E84CA', '#E5907D'];

function ItemDetail() {
  const navigation = useNavigation();
  const { colors } = useCustomTheme();
  const { bottom: bottomSafeAreaHeight } = useSafeAreaInsets();
  const [colorActive, setColorActive] = useState('#A29698');

  // // Use `setOptions`
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Image
          source={require('assets/images/more.png')}
          style={{ width: 18, height: 18, transform: [{ rotate: '90deg' }] }}
        />
      ),
    });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <View style={styles.like}>
          <Image
            source={require('assets/images/love.png')}
            style={{ tintColor: colors.primary, width: 18, height: 18 }}
          />
        </View>
      </View>
      <View style={styles.detail}>
        <View style={styles.itemCategory}>
          <Text color={colors.primary}>Fashion</Text>
        </View>
        <Text style={styles.itemTitle}>Leather Retail</Text>
        <Text style={styles.itemSubTitle} numberOfLines={3} color="gray" fontSize={12}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, placeat quidem!
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
          <View style={styles.review}>
            <Rating
              ratingCount={5}
              imageSize={15}
              ratingColor="#FFA800"
              ratingBackgroundColor="#FFA800"
            />
            <Text style={{ marginTop: 5 }} color="gray" fontSize={12}>
              (250 Reviews)
            </Text>
          </View>
          <View style={styles.colorView}>
            {colorsPicker.map((item) =>
              colorActive === item ? (
                <View style={styles.colorPicker}>
                  <Pressable
                    style={[styles.color, { backgroundColor: item }]}
                    onPress={() => setColorActive(item)}
                  />
                </View>
              ) : (
                <Pressable
                  style={[styles.color, { backgroundColor: item }]}
                  onPress={() => setColorActive(item)}
                />
              ),
            )}
          </View>
        </View>
        <View style={styles.divider} />
        <View>
          <Text style={styles.itemTitle}>Specifications</Text>
          <View style={styles.rowItem}>
            <Text style={styles.rowItemLabel}>Brand</Text>
            <Text style={styles.rowItemValue} color="gray">
              Female Clothing
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.bottom, { paddingBottom: bottomSafeAreaHeight }]}>
        <View style={{ flex: 1 }}>
          <Text style={styles.bottomAmount}>$258.15</Text>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Text
              fontSize={11}
              color="gray"
              style={{ textDecorationLine: 'line-through', marginRight: 10 }}
            >
              $400
            </Text>
            <Text color={colors.primary} fontSize={11} style={{ fontWeight: '700' }}>
              20% OFF
            </Text>
          </View>
        </View>
        <PressableHaptic style={styles.paynow}>
          <Text color="white">Pay now</Text>
        </PressableHaptic>
      </View>
    </View>
  );
}
export default ItemDetail;
