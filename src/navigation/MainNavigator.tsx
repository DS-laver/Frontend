import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InformStack from "./InformStack";
import CommStack from "./CommStack";
import HealthStack from "./HealthStack";
import HealthDataStack from "./HealthDataStack";
import MyStack from "./MyStack";
import LoginStack from "./LoginStack";

import {ParamListBase, RouteProp} from '@react-navigation/native'
import {Image, Text} from 'react-native'

const Tab = createBottomTabNavigator()

export default function MainNavigator() {
  type TabBarProps = { focused: boolean, color?: string, size?: number }


  const screenOptions = ({ route }: { route: RouteProp<ParamListBase, string> }) => {
    const { name } = route
    return {
      headerShown: false, 
      tabBarStyle: {
        height: 55,
        backgroundColor: '#FECCCD',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,},
      tabBarLabel: ({ focused, color, size }: TabBarProps) => {
        switch (name) { 
          case 'inform':
            return <Text style={{ color: focused ? 'purple' : color, fontSize: 10, fontFamily: 'SCDream6', marginBottom: 3 }}>정보 알리미</Text>
          case 'comm':
            return <Text style={{ color: focused ? 'purple' : color, fontSize: 10, fontFamily: 'SCDream6', marginBottom: 3 }}>소통의 장</Text>
          case 'health':
            return <Text style={{ color: focused ? 'purple' : color, fontSize: 10, fontFamily: 'SCDream6', marginBottom: 3 }}>건강 관리</Text>
          case 'healthData':
            return <Text style={{ color: focused ? 'purple' : color, fontSize: 10, fontFamily: 'SCDream6', marginBottom: 3 }}>건강 보기</Text>
          case 'my':
            return <Text style={{ color: focused ? 'purple' : color, fontSize: 10, fontFamily: 'SCDream6', marginBottom: 3 }}>마이 페이지</Text>        }
      },
      tabBarIcon: ({ focused, color, size }: TabBarProps) => {
        switch (name) {
          case 'inform':
            return <Image
              source={focused ? require("../assets/icons/inform-selected.png") : require("../assets/icons/inform-default.png")} />
          case 'comm':
            return <Image
              source={focused ? require("../assets/icons/comm-selected.png") : require("../assets/icons/comm-default.png")} />
          case 'health':
            return <Image
              source={focused ? require("../assets/icons/health-selected.png") : require("../assets/icons/health-default.png")} />
          case 'healthData':
            return <Image
              source={focused ? require("../assets/icons/healthData-selected.png") : require("../assets/icons/healthData-default.png")} />
          case 'my':
            return <Image
              source={focused ? require("../assets/icons/my-selected.png") : require("../assets/icons/my-default.png")} />
        }
      }
    }
  }

  return (
    <Tab.Navigator initialRouteName='health' screenOptions={screenOptions}>
      {/* <Tab.Screen name="inform" component={InformStack} /> */}
      <Tab.Screen name="inform" component={LoginStack} />
      <Tab.Screen name="comm" component={CommStack} />
      <Tab.Screen name="health" component={HealthStack} />
      <Tab.Screen name="healthData" component={HealthDataStack} />
      <Tab.Screen name="my" component={MyStack} />
    </Tab.Navigator>
  )
}