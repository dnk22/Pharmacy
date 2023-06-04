import { Image, ScrollView, View } from 'react-native';
import styles from './styles';
import Text from 'components/Text';
import SvgIcon from 'components/SvgIcon';
import { useCustomTheme } from 'resources/theme';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import CartItem from './CartItem';
import { data } from './data';
import FlatList from 'components/FlatList';
import PressableHaptic from 'components/PressableHaptic';
import { PAYMENT } from 'navigation/constants';

export default function Cart() {
  const { colors } = useCustomTheme();
  const navigation = useNavigation();

  // // Use `setOptions`
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Image source={require('assets/images/more.png')} style={styles.headerConfig} />
      ),
    });
  }, []);

  function renderItem({ item }) {
    return <CartItem item={item} key={item.image} />;
  }

  function navigateToCheckout() {
    navigation.navigate(PAYMENT);
  }

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <View style={styles.col}>
          <Image source={require('assets/images/girl-avatar.jpeg')} style={styles.userAvatar} />
          <Text style={{ fontWeight: '700', marginLeft: 10 }}>Deliver to Yatin</Text>
        </View>
        <View style={styles.col}>
          <Text fontSize={12} color={colors.primary}>
            Ram krishan, puram
          </Text>
          <SvgIcon name="forward" style={styles.arrow} size={12} color={colors.primary} />
        </View>
      </View>
      <View style={styles.itemList}>
        <FlatList data={data} renderItem={renderItem} />
      </View>
      <ScrollView style={styles.discount}>
        <Text color="#7B7B7B" style={{ fontWeight: '700' }}>
          Have a coupon code? Enter here
        </Text>
        <View style={styles.coupon}>
          <View style={styles.couponCode}>
            <Image
              source={require('assets/images/cut.png')}
              style={{ tintColor: colors.primary, width: 18, height: 18 }}
            />
            <Text style={{ fontWeight: '700', marginLeft: 15 }}>MHG76T</Text>
          </View>
          <SvgIcon name="forward" size={16} />
        </View>
        <View style={styles.discountItem}>
          <Text color="gray">Price:</Text>
          <Text style={styles.value}>$152</Text>
        </View>
        <View style={styles.discountItem}>
          <Text color="gray">Tax:</Text>
          <Text style={styles.value}>0.5%</Text>
        </View>
      </ScrollView>
      <View style={styles.checkout}>
        <View>
          <Text style={{ fontWeight: '900', marginBottom: 5 }}>$215.5</Text>
          <Text fontSize={13} color={colors.primary}>
            View Price Details
          </Text>
        </View>
        <PressableHaptic
          style={[styles.checkoutButton, { backgroundColor: colors.primary }]}
          onPress={navigateToCheckout}
        >
          <Text color="white" fontSize={16}>
            Checkout
          </Text>
        </PressableHaptic>
      </View>
    </View>
  );
}
