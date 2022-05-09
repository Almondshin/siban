import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, Dimensions, RefreshControl, ScrollView, StyleSheet, useColorScheme, View } from "react-native";
import styled from "styled-components/native";
import { MyPlan } from "../screens/Workout/MyPlan";
import { Workouts } from "../screens/Workout/Workouts";
import { ForYou } from "../screens/Workout/ForYou";


const NativeStack = createNativeStackNavigator();

const WorkoutStack = () => (
  <NativeStack.Navigator screenOptions={{headerShown: false}}>
    <NativeStack.Screen name="추천코스" component={ForYou} />
    <NativeStack.Screen name="개별운동" component={Workouts} />
    <NativeStack.Screen name="내플랜" component={MyPlan} />
  </NativeStack.Navigator>
);

export default WorkoutStack;