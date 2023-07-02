import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import HealthCare from '../pages/HealthCare'

const Stack = createNativeStackNavigator()

export default function HealthStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Health"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Health" component={HealthCare} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}