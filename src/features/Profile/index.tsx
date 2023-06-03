import { Image, View } from 'react-native';
import styles from './styles';
import { useCustomTheme } from 'resources/theme';
import Text from 'components/Text';
import PressableHaptic from 'components/PressableHaptic';
import SvgIcon from 'components/SvgIcon';

export default function Profile() {
  const { colors } = useCustomTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <View style={{ padding: 15 }}>
        <View style={styles.summary}>
          <Image source={require('assets/images/girl-avatar.jpeg')} style={styles.avatar} />
          <View style={styles.userInfo}>
            <Text style={styles.title}>Elena</Text>
            <Text color="gray">elena@example.com</Text>
          </View>
          <Image
            source={require('assets/images/pen.png')}
            style={[styles.edit, { tintColor: colors.primary }]}
          />
        </View>
        <View style={styles.widget}>
          <View style={[styles.widgetItem, { marginBottom: 10, marginRight: 10 }]}>
            <Image source={require('assets/images/box.png')} style={styles.widgetItemIcon} />
            <Text style={styles.widgetItemTitle}>Orders</Text>
          </View>
          <View style={styles.widgetItem}>
            <Image source={require('assets/images/love.png')} style={styles.widgetItemIcon} />
            <Text style={styles.widgetItemTitle}>Wishlist</Text>
          </View>
          <View style={[styles.widgetItem, { marginRight: 10 }]}>
            <Image source={require('assets/images/gift.png')} style={styles.widgetItemIcon} />
            <Text style={styles.widgetItemTitle}>Coupon</Text>
          </View>
          <View style={styles.widgetItem}>
            <Image source={require('assets/images/headphone.png')} style={styles.widgetItemIcon} />
            <Text style={styles.widgetItemTitle}>Help center</Text>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.settings}>
        <Text style={{ fontWeight: '700' }} fontSize={16}>
          Account Settings
        </Text>
        <PressableHaptic style={styles.settingsItem}>
          <Image source={require('assets/images/user.png')} style={styles.settingItemIcon} />
          <Text style={styles.settingItemTitle} fontSize={15}>
            Edit Profile
          </Text>
          <SvgIcon name="forward" size={16} />
        </PressableHaptic>
        <PressableHaptic style={styles.settingsItem}>
          <Image source={require('assets/images/location.png')} style={styles.settingItemIcon} />
          <Text style={styles.settingItemTitle} fontSize={15}>
            Saved Addresses
          </Text>
          <SvgIcon name="forward" size={16} />
        </PressableHaptic>
        <PressableHaptic style={styles.settingsItem}>
          <Image source={require('assets/images/translate.png')} style={styles.settingItemIcon} />
          <Text style={styles.settingItemTitle} fontSize={15}>
            Select Language
          </Text>
          <SvgIcon name="forward" size={16} />
        </PressableHaptic>
        <PressableHaptic style={styles.settingsItem}>
          <Image source={require('assets/images/bell.png')} style={styles.settingItemIcon} />
          <Text style={styles.settingItemTitle} fontSize={15}>
            Notification Setting
          </Text>
          <SvgIcon name="forward" size={16} />
        </PressableHaptic>
        <PressableHaptic style={styles.settingsItem}>
          <Image source={require('assets/images/logout.png')} style={styles.settingItemIcon} />
          <Text style={styles.settingItemTitle} fontSize={15}>
            Log out
          </Text>
          <SvgIcon name="forward" size={16} />
        </PressableHaptic>
      </View>
    </View>
  );
}
