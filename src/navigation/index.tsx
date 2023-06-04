import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HOME, PAYMENT } from './constants';
import HomeNavigation from './Home';
import { RootStackParamList } from './type';
import Payment from 'features/Payment';

//set up routes
const RootStack = createNativeStackNavigator<RootStackParamList>();
function AppNavigators() {
  return (
    <RootStack.Navigator initialRouteName={HOME}>
      <RootStack.Screen name={HOME} component={HomeNavigation} options={{ headerShown: false }} />
      <RootStack.Screen
        name={PAYMENT}
        component={Payment}
        options={{
          headerTitleAlign: 'left',
        }}
      />
    </RootStack.Navigator>
  );
}

export default AppNavigators;
