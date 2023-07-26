import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'

import HealthCarePage from '../pages/healthCare/HealthCarePage'
import HealthSurveyInput from '../pages/healthCare/HealthSurveyInput'
import CalendarPage from '../pages/healthCare/CalendarPage'
import HealthSurveyResult from '../pages/healthCare/HealthSurveyResult'
import AddEatMedicine from '../pages/healthCare/AddEatMedicine'

const Stack = createNativeStackNavigator()

export default function HealthStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="HealthCarePage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HealthCarePage" component={HealthCarePage} />
        <Stack.Screen name="CalendarPage" component={CalendarPage} />
        <Stack.Screen name="HealthSurveyInput" component={HealthSurveyInput} />
        <Stack.Screen name="HealthSurveyResult" component={HealthSurveyResult} />
        <Stack.Screen name="AddEatMedicine" component={AddEatMedicine} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}