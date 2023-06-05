/* global __DEV__ */
import { AppRegistry } from 'react-native';
// import { name as appName } from '../app.json';
import App from './App';

AppRegistry.registerComponent('ReactNativeTemplate', () => App);
AppRegistry.runApplication('ReactNativeTemplate', { rootTag: document.getElementById('root') });
