import React, {useState, Component } from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View, Dimensions} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function MyRoutine () {
  const [woSelect, setWoSelect] = useState([false, false, false]);
  const [markedDate, setMarkedDate] = useState();
  
  const onDateChange = (date) => {
    setMarkedDate(date);
    console.log(date)
  }
  
  const workoutButton = (id= number) => {
    return (
      <Pressable
        style={[
          styles.buttonContainer,
          {backgroundColor: woSelect[id] ? '#575fcf' : 'gray'},
        ]}
        onPress={() => {
          setWoSelect([
            ...woSelect.slice(0, id),
            !woSelect[id],
            ...woSelect.slice(id + 1),
          ]);
        }}>
        <Text 
        style={[
          {fontSize:30},
          {textDecorationLine: woSelect[id] ? 'line-through' : 'none'}
        ]}>운동 {id}</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.Container}>
      {/* 네비게이션 바 */}
      
      {/* 달력 */}
      <View style={styles.calendarContainer}>
        <CalendarPicker
          onDateChange={onDateChange}
        />

      </View>

      {/* 버튼 */}
      <View>
        {workoutButton(0)}
        {workoutButton(1)}
        {workoutButton(2)}
      </View>
    </SafeAreaView>
  );
};







const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fragmentContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.8,
    height: 50,
    borderRadius: 30,
    marginBottom: 15,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 5, height: 5 }, 
    elevation: 3,
  },
  calendarContainer: {
    width: SCREEN_WIDTH * 0.8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  navBarContainer:{
    width: SCREEN_WIDTH * 0.8,
    height: 50,
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',

  },
  navBar: {
    alignItems: 'center', 
    justifyContent: 'center',
    width:SCREEN_WIDTH * 0.8 * 0.3,
    height: 50,
    borderWidth: 0.5,    
    marginBottom: 15,

  },
  navBarText: {
    fontSize: 20,
    color: 'white',
  },
});
