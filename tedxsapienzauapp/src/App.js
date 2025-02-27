import React, { useState, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, StyleSheet, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// Import pages
import LoadingScreen from "./components/pages/LoadingScreen.jsx";
import LoadingTransition from "./components/pages/LoadingTransition.jsx";
import GetStarted from "./components/pages/GetStarted.jsx";
import Partners from "./components/pages/Partners.jsx";

import FAQ from "./components/pages/FAQ.jsx";
import Speakers from "./components/pages/Speakers.jsx";
import Schedule from "./components/pages/Schedule.jsx";
import Speech from "./components/pages/Speech.jsx";
import global from "./resources/global.json";
import Paradoxa from "./components/pages/Paradoxa.jsx";


// Context for language settings
export const LanguageContext = createContext();

// Create the Stack and Tab Navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Custom Header Component for Tab Screens
const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerStyle}>
      <Pressable onPress={() => navigation.navigate("GetStarted")}>
        <Image
          style={{ width: 200, height: 30 }}
          source={require("./components/images/logo-white.png")}
        />
      </Pressable>
    </View>
  );
};

// Bottom Tab Navigator
const BottomTabNavigator = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          
          if (route.name === "Schedule") iconName = "calendar-alt";
          else if (route.name === "Home") iconName = "home";
          else if (route.name === "Speech") iconName = "bullhorn";
          else if (route.name === "FAQ") iconName = "question-circle";
          else if (route.name === "Partners") iconName = "handshake";
          else if (route.name === "Paradoxa") iconName = "times";

          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: global.COLORS.RED,
        tabBarInactiveTintColor: "gray",
        header: () => <CustomHeader />,
        headerStyle: { backgroundColor: "#0b0c0e", height: 100 },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Speakers}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("Speakers");
          },
        }}
      />
      <Tab.Screen
        name="Paradoxa"
        component={Paradoxa}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("Paradoxa");
          },
        }}
      />
      <Tab.Screen
        name="Partners"
        component={Partners}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("Partners");
          },
        }}
      />
      <Tab.Screen
        name="FAQ"
        component={FAQ}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("FAQ");
          },
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("Schedule");
          },
        }}
      />
      <Tab.Screen
        name="Speech"
        component={Speech}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("Speech");
          },
        }}
      />
    </Tab.Navigator>
  );
};

// Main App Component
const App = () => {
  const [language, setLanguage] = useState("ita");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoadingScreen">
          {/* Stack screens for loading, transition, and GetStarted */}
          <Stack.Screen
            name="LoadingScreen"
            component={LoadingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoadingTransition"
            component={LoadingTransition}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{ headerShown: false }}
          />

          {/* Directly include tab screens in the stack navigator */}
          <Stack.Screen
            name="Speakers"
            component={Speakers}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Schedule"
            component={Schedule}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Speech"
            component={Speech}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FAQ"
            component={FAQ}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Partners"
            component={Partners}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Paradoxa"
            component={Paradoxa}
            options={{ headerShown: false }}
          />

          {/* Bottom Tab Navigator as the main navigation interface */}
          <Stack.Screen
            name="Main"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </LanguageContext.Provider>
  );
};

// Styles
const styles = StyleSheet.create({
  headerStyle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
});

export default App;
