
import React from 'react';
import Text from '../../../components/Text';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import Item from './Item';
import { useNavigation } from '@react-navigation/native';
import { ITEM_DETAIL } from '../../../navigation/constants';
const men = require('../../../assets/images/men1.png');
const girl = require('../../../assets/images/girl.png');

export default function Suggest() {
  const navigation = useNavigation();

  const onItemPress = () => {
    navigation.navigate(ITEM_DETAIL);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: '700' }}>Suggest For You</Text>
        <View style={styles.viewAll}>
          <Text style={{ fontWeight: '700' }}>View all </Text>
          <Image
            source={require('../../../assets/images/forward.png')}
            style={{ width: 16, height: 16 }}
          />
        </View>
      </View>
      <ScrollView style={styles.content} horizontal>
        <Item image={men} onPress={onItemPress} />
        <Item image={girl} onPress={onItemPress} />
        <Item image={men} onPress={onItemPress} />
        <Item image={girl} onPress={onItemPress} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 5,
    height: 300,
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewAll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    marginTop: 10,
    borderRadius: 10,
  },
});
