import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'

import MyPage from '../pages/my/MyPage'
import SettingPage from '../pages/my/SettingPage'
import AddMediPage from '../pages/my/AddMediPage'
import ModifyMediPage from '../pages/my/ModifyMediPage'

const Stack = createNativeStackNavigator()

export default function MyStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="MyPage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="MyPage" component={MyPage} />
        <Stack.Screen name="SettingPage" component={SettingPage} />
        <Stack.Screen name="AddMediPage" component={AddMediPage} />
        <Stack.Screen name="ModifyMediPage" component={ModifyMediPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}