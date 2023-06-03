import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeBottomBar from './HomeBottomBar';
import { ACCOUNT, CART, CATEGORIES, DASHBOARD } from '../constants';
import { Image } from 'react-native';
import Dashboard from 'features/Dashboard';
import Cart from 'features/Cart';
import Profile from 'features/Profile';

//set up routes
const Tab = createBottomTabNavigator();

// variable
const homeOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

function HomeNavigation() {
  return (
    <Tab.Navigator
      screenOptions={homeOptions}
      initialRouteName={DASHBOARD}
      tabBar={(props) => <HomeBottomBar {...props} />}
    >
      <Tab.Screen
        name={DASHBOARD}
        options={{
          // @ts-ignore
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('assets/images/home.png')}
              style={{ width: 18, height: 18, tintColor: color }}
            />
          ),
        }}
        component={Dashboard}
      />
      <Tab.Screen
        name={CATEGORIES}
        options={{
          // @ts-ignore
          title: 'Categories',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('assets/images/menu.png')}
              style={{ width: 18, height: 18, tintColor: color }}
            />
          ),
        }}
        component={Dashboard}
      />
      <Tab.Screen
        name={ACCOUNT}
        options={{
          // @ts-ignore
          title: 'Account',
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <Image
              source={require('assets/images/user.png')}
              style={{ width: 18, height: 18, tintColor: color }}
            />
          ),
        }}
        component={Profile}
      />
      <Tab.Screen
        name={CART}
        options={{
          // @ts-ignore
          title: 'Cart',
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <Image
              source={require('assets/images/cart.png')}
              style={{ width: 18, height: 18, tintColor: color }}
            />
          ),
        }}
        component={Cart}
      />
    </Tab.Navigator>
  );
}

export default HomeNavigation;
