import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HOME, ITEM_DETAIL, PAYMENT } from './constants';
import HomeNavigation from './Home';
import { RootStackParamList } from './type';
import Payment from '../features/Payment';
import ItemDetail from '../features/ItemDetail';

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
      <RootStack.Screen
        name={ITEM_DETAIL}
        component={ItemDetail}
        options={{
          title: '',
          headerTransparent: true,
          headerTintColor: 'white',
        }}
      />
    </RootStack.Navigator>
  );
}

export default AppNavigators;
