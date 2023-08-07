import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'

import LoginPage from '../pages/Login/LoginPage'
import JoinNamePage from '../pages/Login/JoinNamePage'
import JoinIdPage from '../pages/Login/JoinIdPage'
import JoinMediPage from '../pages/Login/JoinMediPage'
import JoinProfPage from '../pages/Login/JoinProfPage'
import JoinDonePage from '../pages/Login/JoinDonePage'

const Stack = createNativeStackNavigator()

export default function LoginStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="LoginPage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="JoinNamePage" component={JoinNamePage} />
        <Stack.Screen name="JoinIdPage" component={JoinIdPage} />
        <Stack.Screen name="JoinMediPage" component={JoinMediPage} />
        <Stack.Screen name="JoinProfPage" component={JoinProfPage} />
        <Stack.Screen name="JoinDonePage" component={JoinDonePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}