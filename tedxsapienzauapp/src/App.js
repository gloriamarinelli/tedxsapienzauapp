import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "./components/pages/LoadingScreen.jsx";
import LoadingTransition from "./components/pages/LoadingTransition.jsx";
import GetStarted from "./components/pages/GetStarted.jsx";
import Partners from "./components/pages/Partners.jsx";
import Vision from "./components/pages/Vision.jsx";
import FAQ from "./components/pages/FAQ.jsx";
import Speaker from "./components/pages/Speaker.jsx";
import { ScrollView } from "react-native";
import { Image, View, Text, StyleSheet, Pressable } from "react-native";
import Schedule from "./components/pages/Schedule.jsx";

const AppStack = createStackNavigator();

const App = () => {
  const CustomHeader = ({ navigation }) => {
    return (
      <View style={styles.headerStyle}>
        <Image
          style={{ width: 200, height: 30 }}
          source={require("./components/images/logo-white.png")}
        />

        <ScrollView horizontal style={styles.headerButtonsContainer}>
          <Pressable onPress={() => navigation.navigate("Vision")}>
            <Text style={styles.headerButton}>Vision</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Schedule")}>
            <Text style={styles.headerButton}>Schedule</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Speaker")}>
            <Text style={styles.headerButton}>Speaker</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("FAQ")}>
            <Text style={styles.headerButton}>FAQ</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Partners")}>
            <Text style={styles.headerButton}>Partners</Text>
          </Pressable>
        </ScrollView>
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
          <AppStack.Screen
            name="Schedule"
            component={Schedule}
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
            name="Speaker"
            component={Speaker}
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
            name="FAQ"
            component={FAQ}
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
    width: "100%",
  },
  headerButton: {
    color: "#fff",
    padding: 10,
    fontSize: 20,
  },
});
