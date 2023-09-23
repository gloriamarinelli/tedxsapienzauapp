import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "./components/pages/LoadingScreen.jsx";
import LoadingTransition from "./components/pages/LoadingTransition.jsx";
import GetStarted from "./components/pages/GetStarted.jsx";
import Partners from "./components/pages/Partners.jsx";
import { Image, View, Text, StyleSheet } from "react-native";

const AppStack = createStackNavigator();

const App = () => {
  const CustomHeader = () => {
    return (
      <View style={styles.headerStyle}>
        <Image
          style={{ width: 250, height: 50 }}
          source={require("./components//images/logo-white.png")}
        />
      </View>
    );
  };

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <>
          {/* <AppStack.Screen
            name="LoadingScreen"
            component={LoadingScreen}
            options={{ headerShown: false }}
          />
          <AppStack.Screen
            name="LoadingTransition"
            component={LoadingTransition}
            options={{ headerShown: false }}
          /> */}
          <AppStack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{ headerShown: false }}
          />
          <AppStack.Screen
            name="Partners"
            component={Partners}
            options={{
              headerShown: true,
              headerTitle: (props) => <CustomHeader {...props} />,
              headerBackTitleVisible: false,
              headerLeft: () => null,
              headerStyle: {
                backgroundColor: "#000",
                height: 130,
              },
            }}
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
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 20,
  },
});
