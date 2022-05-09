import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, Dimensions, RefreshControl, ScrollView, StyleSheet, useColorScheme, View, TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");


export const Workouts = ({ navigation: { navigate } }) => (
  <View>
    {/* 탑 메뉴바 */}
    <View style={styles.WorkoutTopMenu}>
      <TouchableOpacity style={styles.WorkoutMenuTextContainer} onPress={() => navigate("추천코스")}>
        <Text style={styles.WorkoutMenuText}>추천코스</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.WorkoutMenuTextContainer} onPress={() => navigate("개별운동")}>
        <Text style={styles.WorkoutMenuText}>개별운동</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.WorkoutMenuTextContainer} onPress={() => navigate("내플랜")}>
        <Text style={styles.WorkoutMenuText}>내 플랜</Text>
      </TouchableOpacity>
    </View>{/* 탑 메뉴바 */}

    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>개별운동 페이지</Text>
    </View>
  </View>
);



const styles = StyleSheet.create({
  // 탑 메뉴바 관련 시작
  WorkoutTopMenu: {
    flexDirection:'row',
    justifyContent:'space-between',
    height: SCREEN_HEIGHT/13,
    backgroundColor: "#575fcf",
  },
  WorkoutMenuTextContainer:{
    width: '30%',
    justifyContent: 'center',
  },
  WorkoutMenuText:{
    color:'#d2dae2',
    textAlign: 'center',
    justifyContent: 'center'
  }, // 탑 메뉴바 관련 끝

  
})