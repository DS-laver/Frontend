import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import HealthDataPage from '../pages/healthData/HealthDataPage'
import ChatBotPage from '../pages/healthData/ChatBotPage'

const Stack = createNativeStackNavigator()

export default function HealthDataStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="HealthDataPage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HealthDataPage" component={HealthDataPage} />
        <Stack.Screen name="ChatBotPage" component={ChatBotPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}