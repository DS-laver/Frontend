import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InformStack from "./InformStack";
import CommStack from "./CommStack";
import HealthStack from "./HealthStack";
import ProductionStack from "./ProductionStack";
import MyStack from "./MyStack";

import {ParamListBase, RouteProp} from '@react-navigation/native'
import {Image, Text} from 'react-native'

const Tab = createBottomTabNavigator()

export default function MainNavigator() {
  type TabBarProps = { focused: boolean, color?: string, size?: number }


  const screenOptions = ({ route }: { route: RouteProp<ParamListBase, string> }) => {
    const { name } = route
    return {
      headerShown: false, 
      tabBarLabel: ({ focused, color, size }: TabBarProps) => {
        switch (name) { 
          case 'inform':
            return <Text style={{ color: focused ? 'purple' : color, fontSize: 10, marginBottom: 3 }}>정보 알리미</Text>
          case 'comm':
            return <Text style={{ color: focused ? 'purple' : color, fontSize: 10, marginBottom: 3 }}>소통의 장</Text>
          case 'health':
            return <Text style={{ color: focused ? 'purple' : color, fontSize: 10, marginBottom: 3 }}>건강 관리</Text>
          case 'production':
            return <Text style={{ color: focused ? 'purple' : color, fontSize: 10, marginBottom: 3 }}>생산</Text>
          case 'my':
            return <Text style={{ color: focused ? 'purple' : color, fontSize: 10, marginBottom: 3 }}>마이 페이지</Text>        }
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
          case 'production':
            return <Image
              source={focused ? require("../assets/icons/production-selected.png") : require("../assets/icons/production-default.png")} />
          case 'my':
            return <Image
              source={focused ? require("../assets/icons/my-selected.png") : require("../assets/icons/my-default.png")} />
        }
      }
    }
  }

  return (
    <Tab.Navigator initialRouteName='health' screenOptions={screenOptions}>
      <Tab.Screen name="inform" component={InformStack} />
      <Tab.Screen name="comm" component={CommStack} />
      <Tab.Screen name="health" component={HealthStack} />
      <Tab.Screen name="production" component={ProductionStack} />
      <Tab.Screen name="my" component={MyStack} />
    </Tab.Navigator>
  )
}