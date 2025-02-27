import React, { useState, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, StyleSheet, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import LoadingScreen from "./pages/LoadingScreen.jsx";
import LoadingTransition from "./pages/LoadingTransition.jsx";
import GetStarted from "./pages/GetStarted.jsx";
import Partners from "./pages/Partners.jsx";

import FAQ from "./pages/FAQ.jsx";
import Speakers from "./pages/Speakers.jsx";
import Schedule from "./pages/Schedule.jsx";
import Speech from "./pages/Speech.jsx";
import global from "../resources/global.json";
import Paradoxa from "./pages/Paradoxa.jsx";

const homeName = "Home";
const paraDoxaName = "Paradoxa";
const faqName = "FAQ";
const partnersName = "Partners";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerStyle}>
      <Pressable onPress={() => navigation.navigate("GetStarted")}>
        <Image
          style={{ width: 200, height: 30 }}
          source={require("./images/logo-white.png")}
        />
      </Pressable>
    </View>
  );
};

export default function MainContainer (){
    return(
        <NavigationContainer>
            <Tab.Navigator
           initialRouteName="LoadingScreen"
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
        
      />
      <Tab.Screen
        name="Paradoxa"
        component={Paradoxa}
        
      />
      <Tab.Screen
        name="Partners"
        component={Partners}
        
      />
      <Tab.Screen
        name="FAQ"
        component={FAQ}
        
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        
      />
      <Tab.Screen
        name="Speech"
        component={Speech}
        
      />
                
            </Tab.Navigator>
        </NavigationContainer>

    );
    
} 
const styles = StyleSheet.create({
    headerStyle: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 10,
    },
  });