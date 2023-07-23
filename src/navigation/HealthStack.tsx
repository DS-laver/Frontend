import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import HealthCarePage from '../pages/HealthCarePage'
import HealthSurvey from '../pages/HealthCare/HealthSurvey'

const Stack = createNativeStackNavigator()

export default function HealthStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="HealthCarePage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HealthCarePage" component={HealthCarePage} />
        <Stack.Screen name="HealthSurvey" component={HealthSurvey} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}