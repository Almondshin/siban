import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from './Tabs';
import WorkoutStack from './WorkoutStack';
import { View } from "react-native";
import MyPageMain from '../screens/MyPage/MyPage';
import Activity from '../screens/MyPage/Activity'
import MyRoutine from "../screens/Workout/MyRoutine";

// Tab과 Stack Nav 를 결합하기 위한 Root
const Nav = createNativeStackNavigator();



const Root = () => (
  // screenOptions={{headerShown: false}} : 맨위 Tabs의 헤더 제거
  <Nav.Navigator screenOptions={{headerShown: false}}>
    <Nav.Screen name="Tabs" component={Tabs}></Nav.Screen>
    <Nav.Screen name="WorkoutStack" component={WorkoutStack}></Nav.Screen>
    <Nav.Screen name="MYPAGE" component={MyPageMain} options={{ title: "마이페이지" }} />
    <Nav.Screen name="ACTIVITY" component={Activity} options={{ title: "활동기록" }} />
    <Nav.Screen name="MyRoutine" component={MyRoutine} />
  </Nav.Navigator>
);

export default Root;