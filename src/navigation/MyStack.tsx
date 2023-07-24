import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import MyPage from '../pages/my/MyPage'

const Stack = createNativeStackNavigator()

export default function MyStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="MyPage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="MyPage" component={MyPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}