import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "./components/pages/LoadingScreen.jsx";
import LoadingTransition from "./components/pages/LoadingTransition.jsx";
import GetStarted from "./components/pages/GetStarted.jsx";
import Partners from "./components/pages/Partners.jsx";
import Vision from "./components/pages/Vision.jsx";
import { Image, View, Text, StyleSheet, Pressable } from "react-native";
import Schedule from "./components/pages/Schedule.jsx";

const AppStack = createStackNavigator();

const App = () => {
  const CustomHeader = ({ navigation }) => {
    return (
      <View style={styles.headerStyle}>
        <Image
          style={{ width: 250, height: 40 }}
          source={require("./components/images/logo-white.png")}
        />
        <View style={styles.headerButtonsContainer}>
          <Pressable onPress={() => navigation.navigate("GetStarted")}>
            <Text style={styles.headerButton}>GET STARTED</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Vision")}>
            <Text style={styles.headerButton}>VISION</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Schedule")}>
            <Text style={styles.headerButton}>SCHEDULE</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <>
          <AppStack.Screen
            name="LoadingScreen"
            component={LoadingScreen}
            options={{ headerShown: false }}
          />
          <AppStack.Screen
            name="LoadingTransition"
            component={LoadingTransition}
            options={{ headerShown: false }}
          /> 
          <AppStack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{ headerShown: false }}
          />
          <AppStack.Screen
            name="Schedule"
            component={Schedule}
            options={{ headerShown: false }}
          />
          <AppStack.Screen
            name="Partners"
            component={Partners}
            options={({ navigation, route }) => ({
              headerShown: true,
              headerTitle: () => <CustomHeader navigation={navigation} />,
              headerBackTitleVisible: false,
              headerLeft: () => null,
              headerStyle: {
                backgroundColor: "#000",
                height: 150,
              },
            })}
          />
          <AppStack.Screen
            name="Vision"
            component={Vision}
            options={({ navigation, route }) => ({
              headerShown: true,
              headerTitle: () => <CustomHeader navigation={navigation} />,
              headerBackTitleVisible: false,
              headerLeft: () => null,
              headerStyle: {
                backgroundColor: "#000",
                height: 150,
              },
            })}
          />
        </>
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  headerStyle: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 10,
  },
  headerButtonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 10,
  },
  headerButton: {
    color: "#fff",
  },
});
