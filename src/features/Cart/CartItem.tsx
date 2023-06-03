import { StyleSheet, View, Image } from 'react-native';
import PressableHaptic from 'components/PressableHaptic';
import Text from 'components/Text';
import { useState } from 'react';
import { dataProps } from './data';

export default function CartItem({ item }: { item: dataProps }) {
  const [amount, setAmount] = useState(item.amount);

  const onChangeAmount = (type: string) => {
    if (!amount && type === 'down') return;
    type === 'up' ? setAmount(amount + 1) : setAmount(amount - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemImage}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.itemInfo}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subTitle} color="gray" fontSize={12}>
            {item.subTitle}
          </Text>
        </View>
        <View style={styles.itemBottomDetail}>
          <View style={styles.detailCol}>
            <Text style={styles.priceOrigin}>{item.priceOrigin}</Text>
            <Text style={styles.priceDiscount} color="gray" fontSize={13}>
              {item.priceDiscount}
            </Text>
          </View>
          <View style={styles.detailCol}>
            <PressableHaptic style={styles.button} onPress={() => onChangeAmount('down')}>
              <Text>-</Text>
            </PressableHaptic>
            <Text style={styles.amount}>{amount}</Text>
            <PressableHaptic style={styles.button} onPress={() => onChangeAmount('up')}>
              <Text>+</Text>
            </PressableHaptic>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  itemImage: {
    backgroundColor: '#DFDEDB',
    borderRadius: 10,
  },
  image: {
    height: 86,
    width: 74,
    resizeMode: 'contain',
  },
  itemInfo: {
    paddingLeft: 10,
    flex: 1,
  },
  title: {
    fontWeight: '700',
  },
  subTitle: {
    marginTop: 5,
  },
  itemBottomDetail: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceOrigin: {
    fontWeight: '900',
    marginRight: 5,
  },
  priceDiscount: {
    textDecorationLine: 'line-through',
  },
  detailCol: { flexDirection: 'row', alignItems: 'center' },
  amount: {
    marginHorizontal: 15,
    width: 20,
    textAlign: 'center',
  },
  button: {
    width: 24,
    height: 24,
    borderRadius: 5,
    borderColor: '#DFDEDB',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
