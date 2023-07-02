import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import Communication from '../pages/Communication'

const Stack = createNativeStackNavigator()

export default function CommStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Comm"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Comm" component={Communication} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}