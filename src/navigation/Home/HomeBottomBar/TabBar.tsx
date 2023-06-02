import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Pressable, View } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import styles from './styles';
import Text from 'components/Text';

type ITabBarProps = {
  active?: boolean;
  options: BottomTabNavigationOptions;
  onPress: () => void;
  colors: any;
};

const TabBar = ({ active, options, onPress, colors }: ITabBarProps) => {
  const animatedComponentCircleStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(active ? 1 : 0, { duration: 400 }),
        },
      ],
    };
  });

  const animatedIconContainerStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(active ? 1.2 : 1, { duration: 400 }),
        },
      ],
    };
  });

  return (
    <Pressable onPress={onPress}>
      <View style={styles.component}>
        <Animated.View style={[styles.itemActive, animatedComponentCircleStyles]} />
        <Animated.View style={[styles.icon, animatedIconContainerStyles]}>
          {/* @ts-ignore */}
          {options.tabBarIcon({ color: active ? '#FE4288' : '#000000' })}
        </Animated.View>
        <Text>{options.title}</Text>
      </View>
    </Pressable>
  );
};

export default TabBar;
