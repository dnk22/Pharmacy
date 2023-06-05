import React from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import styles from './styles';
import Text from '../../components/Text';
import { paymentOptions } from './const';
import { useCustomTheme } from '../../resources/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PressableHaptic from '../../components/PressableHaptic';

function Payment() {
  const { colors } = useCustomTheme();
  const { bottom: bottomSafeAreaHeight } = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View style={{ flexDirection: 'row', marginBottom: 15 }}>
          <Image
            source={require('../../assets/images/discount.png')}
            style={{ width: 18, height: 18 }}
          />
          <Text style={styles.topTitle}>Bank Offer</Text>
        </View>
        <Text color="gray" numberOfLines={2} style={{ marginLeft: 10 }}>
          . 10% instant Savings on Citi Credit and Debit Cards on min spent of Rs 3,0000. TCA
        </Text>
      </View>
      <View style={styles.paymentOptions}>
        <View style={styles.optionTitle}>
          <Text color="gray">Payment Options</Text>
        </View>
        {paymentOptions.map((item) => (
          <View style={styles.paymentItem} key={item.type}>
            <Image source={item.icon} style={styles.paymentItemIcon} />
            <Text style={styles.paymentTitle}>{item.title}</Text>
            <Image
              source={require('../../assets/images/forward.png')}
              style={[styles.arrow, { width: 18, height: 18 }]}
            />
          </View>
        ))}
        <View style={styles.giftCode}>
          <Image source={require('../../assets/images/gift.png')} style={styles.paymentItemIcon} />
          <Text style={styles.giftCodeText}>Have a Gift Card?</Text>
          <Text style={styles.giftCodeApply} color={colors.primary}>
            Apply
          </Text>
        </View>
      </View>
      <View style={styles.itemDetails}>
        <Text style={styles.bottomAmount}>Price Details (1 item)</Text>
      </View>
      <View style={[styles.bottom, { paddingBottom: bottomSafeAreaHeight }]}>
        <View style={{ flex: 1 }}>
          <Text style={styles.bottomAmount}>$759</Text>
          <Text color={colors.primary} fontSize={12}>
            View Details
          </Text>
        </View>
        <PressableHaptic style={styles.paynow}>
          <Text color="white">Pay now</Text>
        </PressableHaptic>
      </View>
    </SafeAreaView>
  );
}
export default Payment;
