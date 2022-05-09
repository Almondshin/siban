import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Mypage from '../screens/MyPage/MyPage';
import Coach from '../screens/Coach';
import WorkoutStack from './WorkoutStack';
// 다크모드 관련
import { useColorScheme } from 'react-native';
import {BLACK_COLOR, YELLOW_COLOR, DARK_GRAY, LIGHT_GRAY} from '../colors'
// tabBar Icon 관련
import {Ionicons, FontAwesome5, Entypo} from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

const Tabs = () => {

  // useColorScheme()는 dark나 light로 받는다.
  const isDark = useColorScheme() === 'dark';
  
  
  return (
  // <Tab.Navigator> 안쪽에 옵션주기
    // initialRouteName : 첫번째로 보여줄 라우터 (initialRouteName='Search')
    // screenOptions : 모든 screen에 대한 옵션여러가지 옵션 / tabBarLabelStyle : 색상변경(backgroundColor: 'red')
    // tabBarActiveTintColor : 클릭했을때의 색상 (screenOption={{ tabBarActiveTintColor: "red" }})
    // tabBarInactiveTintColor : 클릭X 때의 색상 (screenOption={{ tabBarInactiveTintColor: "purple" }})
    // <Tab> 안쪽엔 option으로 개별적인 옵션 적용
    <Tab.Navigator
    sceneContainerStyle={{
      backgroundColor: isDark ? BLACK_COLOR : "white",
    }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? BLACK_COLOR : 'white',
        },
        tabBarActiveTintColor: isDark ? YELLOW_COLOR : BLACK_COLOR,
        tabBarInactiveTintColor: isDark ? LIGHT_GRAY : DARK_GRAY,
        headerStyle: {
          backgroundColor: isDark ? BLACK_COLOR : 'white',
        },
        headerTitleStyle: {
          color: isDark ? LIGHT_GRAY : BLACK_COLOR,
        },
        tabBarLabelStyle: {
          marginTop: -5,
          fontSize: 12,
          fontWeight: "600",
        },
    }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({focused, color, size}) => {
          return <Ionicons name={focused ? 'home' : 'home-outline' } color={color} size={size} >
          </Ionicons>
        }
      }}/>
      <Tab.Screen name="Mypage" component={Mypage}  options={{
        tabBarIcon: ({focused, color, size}) => {
          return <Ionicons name={focused ? 'people' : 'people-outline'} color={color} size={size} >
          </Ionicons>
        }
      }}/>
      <Tab.Screen name="Workout" component={WorkoutStack}  options={{
        tabBarIcon: ({focused, color, size}) => {
          return <FontAwesome5 name={focused ? 'dumbbell' : 'dumbbell'} color={color} size={size} >
          </FontAwesome5>
        }
      }}/>
      <Tab.Screen name="Coach" component={Coach}  options={{
        tabBarIcon: ({focused, color, size}) => {
          return <Entypo name={focused ? 'classic-computer' : 'classic-computer'} color={color} size={size} >
          </Entypo>
        }
      }}/>
    </Tab.Navigator>
  );
};

export default Tabs;
  

