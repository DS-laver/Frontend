import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
