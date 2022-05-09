import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, RefreshControl, ScrollView, StyleSheet, useColorScheme, View } from "react-native";
import styled from "styled-components/native";
import { Image, Text } from "react-native";


const Container = styled.ScrollView``;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;



// 화면 높이 측정 height를 SCREEN_HEIGHT로 사용
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const Home = () => {
  
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  


  
  useEffect(() => {
    
  }, []);

  // 새로고침에 관한 함수
  const onRefresh = async () => {
    setRefreshing(true);
    await getData();
    setRefreshing(false);
  }

  return loading ? (
    <Loader>
      <ActivityIndicator />
    </Loader>
  ) : (
    <Container
      refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refreshing}></RefreshControl>}
    >
      <View>
        <Text>Home화면</Text>
      </View>
      
    </Container>
  );
};

export default Home;