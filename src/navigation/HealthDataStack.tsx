import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import HealthDataPage from '../pages/healthData/HealthDataPage'

const Stack = createNativeStackNavigator()

export default function HealthDataStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="HealthDataPage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HealthDataPage" component={HealthDataPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}