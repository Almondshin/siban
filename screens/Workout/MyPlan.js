import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, Dimensions, RefreshControl, ScrollView, StyleSheet, Alert, useColorScheme, View, TouchableOpacity, Text, TextInput } from "react-native";
import styled from "styled-components/native";
import {Ionicons, FontAwesome5, Entypo, Fontisto} from '@expo/vector-icons'

const { height: SCREEN_HEIGHT } = Dimensions.get("window");


export const MyPlan = ({ navigation: { navigate } }) => {

  const [text, setText] = useState("");
  const [myPlan, setMyPlan] = useState({});

  const addPlan = () => {
    try {
        if (text === "") {
            return
        }
        const newMyPlan = {
            ...myPlan,
            [Date.now()]: { text }
        };
        setMyPlan(newMyPlan);
        setText("");
    } catch (e) {
    }
  };

  const deletePlan = (key) => {
      Alert.alert("삭제하시겠습니까?", "정말로?", [
        {
          text: "취소",
        },
        {
          text: "확인",
          onPress: () => {
            const newMyPlan = { ...myPlan };
            delete newMyPlan[key];
            setMyPlan(newMyPlan);
          },
        },
      ]);
      return;
    }
  

  return (
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

    {/* 내 루틴 메인 */}
    <ScrollView style={styles.centerView}>
      <TextInput
        onSubmitEditing={addPlan}
        onChangeText={setText}
        value={text}
        placeholder={"플랜을 추가해주세요"}
        style={styles.input}
      />
      <TouchableOpacity style={styles.plus} onPress={() => navigate("개별운동")}>
        <Text><Fontisto name="plus-a" size={30} color="grey" /></Text>
      </TouchableOpacity>
      <View>
        {Object.keys(myPlan).map((key) =>
          <TouchableOpacity key={key} style={styles.myPlan} onPress={() => navigate("MyRoutine")}>
            <Text style={styles.myPlanText}>
              {myPlan[key].text}
            </Text>
            <TouchableOpacity onPress={() => deletePlan(key)}>
              <Text>❌</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  </View>
  )
};




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

  input: {
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 20,
    marginHorizontal: 20,
    fontSize: 18,
    color: "gray"
  },
  plus: {
    backgroundColor: "lightgrey",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: "center",
    height: 100
  },
  myPlan: {
    backgroundColor: "lightgrey",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
    paddingVertical: 10,
    paddingHorizontal:20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  myPlanText: {
    color: "gray",
    fontSize: 16,
    fontWeight: "500",
    paddingVertical: 10,
  },
});