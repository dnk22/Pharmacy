import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigators from './navigation/index';
import { MyAppTheme } from './resources/theme';
import { SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ width: '100%', height: '100%' }}>
      <NavigationContainer theme={MyAppTheme['default']}>
        <AppNavigators />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
