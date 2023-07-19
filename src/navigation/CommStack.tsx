import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import CommunicationPage from '../pages/CommunicationPage'
import TalkPage from '../pages/TalkPage'
import SettingPage from '../pages/SettingPage'
import WritingPage from '../pages/WritingPage'
import DetailBoardPage from '../pages/DetailBoardPage'

const Stack = createNativeStackNavigator()

export default function CommStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="CommunicationPage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="CommunicationPage" component={CommunicationPage} />
        <Stack.Screen name="TalkPage" component={TalkPage} />
        <Stack.Screen name="SettingPage" component={SettingPage} />
        <Stack.Screen name="WritingPage" component={WritingPage} />
        <Stack.Screen name="DetailBoardPage" component={DetailBoardPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}