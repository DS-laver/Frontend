/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// FCM
import messaging from '@react-native-firebase/messaging';

//FCM
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Message hangled in the background!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);