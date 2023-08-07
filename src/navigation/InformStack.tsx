import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import InformationPage from '../pages/information/InformationPage'
import Youtube from '../components/information/Youtube'
import YoutubeDetail from '../components/information/YoutubeDetail'

const Stack = createNativeStackNavigator()

export default function InformStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="InformationPage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="InformationPage" component={InformationPage} />
        <Stack.Screen name="Youtube" component={Youtube} />
        <Stack.Screen name="YoutubeDetail" component={YoutubeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}