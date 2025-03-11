import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, StyleSheet, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Partners from "./pages/Partners.jsx";
import FAQ from "./pages/FAQ.jsx";
import Speakers from "./pages/Speakers.jsx";
import descriptionSpeech from "./pages/descriptionSpeech.jsx";
import Paradoxa from "./pages/Paradoxa.jsx";
import '@fontsource-variable/bricolage-grotesque/index.css';


const Tab = createBottomTabNavigator();

const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerStyle}>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Image
          style={{ width: 200, height: 30 }}
          source={require("./images/logo-white.png")}
        />
      </Pressable>
    </View>
  );
};

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") iconName = "home";
            else if (route.name === "FAQ") iconName = "question-circle";
            else if (route.name === "Partners") iconName = "handshake";
            else if (route.name === "PARA DOXA") iconName = "times";

            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#EB0028",
          tabBarInactiveTintColor: "#D3D3D3",
          tabBarStyle: {
            backgroundColor: "#000",
            borderTopWidth: 0,
            borderTopColor: "#000",
          },
          header: () => <CustomHeader />,
          headerStyle: { backgroundColor: "#0b0c0e", height: 100 },
        })}
      >
        <Tab.Screen name="Home" component={Speakers} />
        <Tab.Screen name="PARA DOXA" component={Paradoxa} />
        <Tab.Screen name="Partners" component={Partners} />
        <Tab.Screen name="FAQ" component={FAQ} />
        <Tab.Screen
          name="descriptionSpeech"
          component={descriptionSpeech}
          options={{
            tabBarButton: () => null,
          }}
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
    backgroundColor: "#000",
  },
});
