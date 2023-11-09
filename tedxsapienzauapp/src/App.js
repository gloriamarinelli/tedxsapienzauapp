import React, { useState, useEffect, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ScrollView,
  Image,
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import LoadingScreen from "./components/pages/LoadingScreen.jsx";
import LoadingTransition from "./components/pages/LoadingTransition.jsx";
import GetStarted from "./components/pages/GetStarted.jsx";
import Partners from "./components/pages/Partners.jsx";
import Vision from "./components/pages/Vision.jsx";
import FAQ from "./components/pages/FAQ.jsx";
import Speakers from "./components/pages/Speakers.jsx";
import Map from "./components/pages/Map.jsx";
import Bacheca from "./components/pages/Bacheca.jsx";
import Schedule from "./components/pages/Schedule.jsx";
import Speech from "./components/pages/Speech.jsx";
import global from "./resources/global.json";

export const LanguageContext = createContext();

const AppStack = createStackNavigator();

const App = () => {
  const [language, setLanguage] = useState("ita");

  const CustomHeader = ({ navigation }) => {
    const [selectedButton, setSelectedButton] = useState("Vision");
    const [hasNewNotification, setHasNewNotification] = useState(false);

    useEffect(() => {
      let currentPage =
        navigation.getState().routes[navigation.getState().routes.length - 1]
          .name;
      setSelectedButton(currentPage);
    }, [navigation]);

    useEffect(() => {
      setHasNewNotification(
        selectedButton === "Vision" ||
          selectedButton === "Schedule" ||
          selectedButton === "Speech" ||
          selectedButton === "Partners" ||
          selectedButton === "Map" ||
          selectedButton === "Speakers" ||
          selectedButton === "FAQ"
      );
    }, [selectedButton]);

    return (
      <View style={styles.headerStyle}>
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Pressable onPress={() => navigation.navigate("Bacheca")}>
            <View style={{ position: "relative" }}>
              {hasNewNotification && (
                <View style={styles.newNotificationIndicator} />
              )}
              <FontAwesome5 name="bell" size={25} color="white" />
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("GetStarted")}>
            <Image
              style={{ width: 200, height: 30 }}
              source={require("./components/images/logo-white.png")}
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Map")}>
            <FontAwesome5 name="map-marked-alt" size={24} color="white" />
          </Pressable>
        </View>

        <ScrollView horizontal style={styles.headerButtonsContainer}>
          <Pressable onPress={() => navigation.navigate("Vision")}>
            <Text
              style={
                selectedButton === "Vision"
                  ? [styles.headerButton, styles.selectedButton]
                  : styles.headerButton
              }
            >
              Vision
            </Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Schedule")}>
            <Text
              style={
                selectedButton === "Schedule"
                  ? [styles.headerButton, styles.selectedButton]
                  : styles.headerButton
              }
            >
              Schedule
            </Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Speakers")}>
            <Text
              style={
                selectedButton === "Speakers"
                  ? [styles.headerButton, styles.selectedButton]
                  : styles.headerButton
              }
            >
              Speakers
            </Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Speech")}>
            <Text
              style={
                selectedButton === "Speech"
                  ? [styles.headerButton, styles.selectedButton]
                  : styles.headerButton
              }
            >
              Speech
            </Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("FAQ")}>
            <Text
              style={
                selectedButton === "FAQ"
                  ? [styles.headerButton, styles.selectedButton]
                  : styles.headerButton
              }
            >
              FAQ
            </Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Partners")}>
            <Text
              style={
                selectedButton === "Partners"
                  ? [styles.headerButton, styles.selectedButton]
                  : styles.headerButton
              }
            >
              Partners
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
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
              name="Vision"
              component={Vision}
              options={({ navigation, route }) => ({
                headerShown: true,
                headerTitle: () => <CustomHeader navigation={navigation} />,
                headerBackTitleVisible: false,
                headerLeft: () => null,
                headerStyle: {
                  backgroundColor: "#0b0c0e",
                  height: 150,
                },
              })}
            />
            <AppStack.Screen
              name="Schedule"
              component={Schedule}
              options={({ navigation, route }) => ({
                headerShown: true,
                headerTitle: () => <CustomHeader navigation={navigation} />,
                headerBackTitleVisible: false,
                headerLeft: () => null,
                headerStyle: {
                  backgroundColor: "#0b0c0e",
                  height: 150,
                },
              })}
            />
            <AppStack.Screen
              name="Speakers"
              component={Speakers}
              options={({ navigation, route }) => ({
                headerShown: true,
                headerTitle: () => <CustomHeader navigation={navigation} />,
                headerBackTitleVisible: false,
                headerLeft: () => null,
                headerStyle: {
                  backgroundColor: "#0b0c0e",
                  height: 150,
                },
              })}
            />
            <AppStack.Screen
              name="Speech"
              component={Speech}
              options={({ navigation, route }) => ({
                headerShown: true,
                headerTitle: () => <CustomHeader navigation={navigation} />,
                headerBackTitleVisible: false,
                headerLeft: () => null,
                headerStyle: {
                  backgroundColor: "#0b0c0e",
                  height: 150,
                },
              })}
            />
            <AppStack.Screen
              name="FAQ"
              component={FAQ}
              options={({ navigation, route }) => ({
                headerShown: true,
                headerTitle: () => <CustomHeader navigation={navigation} />,
                headerBackTitleVisible: false,
                headerLeft: () => null,
                headerStyle: {
                  backgroundColor: "#0b0c0e",
                  height: 150,
                },
              })}
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
                  backgroundColor: "#0b0c0e",
                  height: 150,
                },
              })}
            />
            <AppStack.Screen
              name="Map"
              component={Map}
              options={({ navigation, route }) => ({
                headerShown: true,
                headerTitle: () => <CustomHeader navigation={navigation} />,
                headerBackTitleVisible: false,
                headerLeft: () => null,
                headerStyle: {
                  backgroundColor: "#0b0c0e",
                  height: 150,
                },
              })}
            />
            <AppStack.Screen
              name="Bacheca"
              component={Bacheca}
              options={({ navigation, route }) => ({
                headerShown: true,
                headerTitle: () => <CustomHeader navigation={navigation} />,
                headerBackTitleVisible: false,
                headerLeft: () => null,
                headerStyle: {
                  backgroundColor: "#0b0c0e",
                  height: 150,
                },
              })}
            />
          </>
        </AppStack.Navigator>
      </NavigationContainer>
    </LanguageContext.Provider>
  );
};

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
    width: "100%",
  },
  headerButton: {
    color: "#fff",
    padding: 10,
    fontSize: 20,
  },
  selectedButton: {
    color: global.COLORS.RED,
    fontWeight: "bold",
    transform: [{ scale: 1.1 }],
  },
  newNotificationIndicator: {
    position: "absolute",
    top: 5,
    right: 5,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "red",
  },
});

export default App;
