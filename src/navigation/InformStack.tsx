import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import Information from '../pages/Information'

const Stack = createNativeStackNavigator()

export default function InformStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Inform"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Inform" component={Information} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}