import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// FCM
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

// FCM
messaging().setBackgroundMessageHandler(async (remoteMessage)=> {
  console.log('Message hangled in the background!', remoteMessage);
});

export default function App() {
  const Stack = createNativeStackNavigator()

  // FCM
  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log('Message hangled in the background!', remoteMessage);

  });

  React.useEffect(()=>{
    const unsubscribe = messaging().onMessage(async remoteMessage =>{
      Alert.alert("약을 복용할 시간입니다!", remoteMessage.notification?.body);   // JSON.stringify(remoteMessage)
    });
    return unsubscribe;
  });
  // FCM 끝

  
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}