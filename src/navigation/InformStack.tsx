import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import InformationPage from '../pages/InformationPage'

const Stack = createNativeStackNavigator()

export default function InformStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="InformationPage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="InformationPage" component={InformationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}