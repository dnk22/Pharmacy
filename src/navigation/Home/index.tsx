import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeBottomBar from './HomeBottomBar';
import { ACCOUNT, CART, CATEGORIES, DASHBOARD } from '../constants';
import { Image } from 'react-native';
import Dashboard from 'features/Dashboard';
import Cart from 'features/Cart';
import Profile from 'features/Profile';
import Categories from 'features/Categories';

//set up routes
const Tab = createBottomTabNavigator();

function HomeNavigation() {
  return (
    <Tab.Navigator initialRouteName={DASHBOARD} tabBar={(props) => <HomeBottomBar {...props} />}>
      <Tab.Screen
        name={DASHBOARD}
        options={{
          // @ts-ignore
          title: 'Home',
          headerShown: false,
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
          title: 'All Categories',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('assets/images/menu.png')}
              style={{ width: 18, height: 18, tintColor: color }}
            />
          ),
        }}
        component={Categories}
      />
      <Tab.Screen
        name={ACCOUNT}
        options={{
          // @ts-ignore
          title: 'Account',
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
