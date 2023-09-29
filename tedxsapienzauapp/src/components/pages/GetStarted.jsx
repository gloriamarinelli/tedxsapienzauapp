import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Pressable,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const PlaceholderImage = require("../images/location2b.png");
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const GetStarted = ({ navigation }) => {
  const handlePress = () => {
    alert("non faccio nulla");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground source={PlaceholderImage} style={styles.image}>
          <Text style={styles.text}>Ideas • Worth • Spreading</Text>
          <Text style={styles.text1}>________________</Text>
          <Text style={styles.text2}>altre info qui</Text>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Partners")}
            >
              <Text style={styles.buttonLabel}>{"Get Started"}</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Helvetica",
    bottom: 235,
    position: "absolute",
    textAlignVertical: "center",
    textAlign: "center",
  },
  text1: {
    fontSize: 36,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "white",
    fontFamily: "Helvetica",
    bottom: 215,
    position: "absolute",
  },
  text2: {
    fontSize: 20,
    color: "white",
    fontFamily: "Helvetica",
    bottom: 160,
    position: "absolute",
  },

  imageContainer: {
    display: "flex",
    paddingTop: 58,
    alignItems: "center",
  },
  image: {
    width: windowWidth,
    height: windowHeight,
    borderRadius: 1,
    position: "relative",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    width: 320,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    bottom: 60,
    position: "absolute",
    marginHorizontal: "auto",
  },
  button: {
    display: "flex",
    borderRadius: 10,
    width: "100%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#eb0028",
    borderRadius: 18,
  },
  buttonIcon: {
    paddingRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    color: "white",
    fontSize: 24,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 15,
    textAlign: "center",
    fontFamily: "Helvetica",
    fontWeight: "bold",
  },
});

export default GetStarted;
