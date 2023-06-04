import React from 'react';
import { LogBox, StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store';
import AppNavigators from 'navigation/index';
import { MyAppTheme } from 'resources/theme';
import { logBoxIgnore } from 'utils/constant';

LogBox.ignoreLogs(logBoxIgnore);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyAppTheme[isDarkMode ? 'dark' : 'default']}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppNavigators />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
