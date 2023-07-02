import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import Production from '../pages/Production'

const Stack = createNativeStackNavigator()

export default function ProductionStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Production"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Production" component={Production} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}