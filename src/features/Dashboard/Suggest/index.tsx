import SvgIcon from 'components/SvgIcon';
import Text from 'components/Text';
import { View, StyleSheet, ScrollView } from 'react-native';
import Item from './Item';
const men = require('assets/images/men1.png');
const girl = require('assets/images/girl.png');

export default function Suggest() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: '700' }}>Suggest For You</Text>
        <View style={styles.viewAll}>
          <Text style={{ fontWeight: '700' }}>View all </Text>
          <SvgIcon name="forward" size={14} />
        </View>
      </View>
      <ScrollView style={styles.content} horizontal>
        <Item image={men} />
        <Item image={girl} />
        <Item image={men} />
        <Item image={girl} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
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
