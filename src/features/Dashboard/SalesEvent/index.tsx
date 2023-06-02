import Text from 'components/Text';
import { Image, ImageBackground, View, StyleSheet } from 'react-native';

export default function SalesEvent() {
  return (
    <ImageBackground
      source={require('assets/images/bg-sales.jpg')}
      resizeMode="cover"
      style={styles.container}
    >
      <Image />
      <View style={styles.iconView}>
        <Image source={require('assets/images/big-sale.png')} style={styles.icon} />
      </View>
      <View style={styles.countDown}>
        <Text style={styles.title} color="white">
          Sales end in
        </Text>
        <View style={styles.countDownValue}>
          <Text style={styles.subTitle} color="white" fontSize={12}>
            11 Day
          </Text>
          <Text style={styles.subTitle} color="white" fontSize={12}>
            13 Hrs
          </Text>
          <Text style={styles.subTitle} color="white" fontSize={12}>
            43 Min
          </Text>
          <Text style={styles.subTitle} color="white" fontSize={12}>
            30 Sec
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconView: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 60,
    height: 60,
  },
  countDown: {
    flex: 1,
    paddingLeft: 30,
  },
  countDownValue: {
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subTitle: {
    color: 'white',
    fontWeight: '500',
    marginLeft: 5,
  },
});
