import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import MyPage from '../pages/MyPage'

const Stack = createNativeStackNavigator()

export default function MyStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="My"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="My" component={MyPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}