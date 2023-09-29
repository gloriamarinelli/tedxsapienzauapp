import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const PlaceholderImage = require("../images/Red-Circle1.png");
//anche questo provvisorio

const Schedule = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.eventContainer}>
          <View style={styles.imageContainer}>
            <ImageBackground source={PlaceholderImage} style={styles.image}>
              <Text style={styles.text}>9</Text>
            </ImageBackground>
          </View>
          <Text style={styles.text1}>
            testo testo testo testo testo testo testo testo testo testo testo
            testo testo testo testo testo testo testo
          </Text>
        </View>
        <View style={styles.eventContainer}>
          <Text style={styles.text1}>testo testo qualcosa bla </Text>
          <View style={styles.imageContainer}>
            <ImageBackground source={PlaceholderImage} style={styles.image}>
              <Text style={styles.text}>9</Text>
            </ImageBackground>
          </View>
        </View>
        <View style={styles.eventContainer}>
          <View style={styles.imageContainer}>
            <ImageBackground source={PlaceholderImage} style={styles.image}>
              <Text style={styles.text}>9</Text>
            </ImageBackground>
          </View>
          <Text style={styles.text1}>
            testo testo testo testo testo testo testo testo testo testo testo
            testo testo testo testo testo testo testo
          </Text>
        </View>
        <View style={styles.eventContainer}>
          <Text style={styles.text1}>testo testo qualcosa bla </Text>
          <View style={styles.imageContainer}>
            <ImageBackground source={PlaceholderImage} style={styles.image}>
              <Text style={styles.text}>9</Text>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#0000",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "column",
  },
  eventContainer: {
    display: "flex",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    objectFit: "scale-down",
    flex: 1,
    resizeMode: "contain",
    width: "100%",
    flexDirection: "row", // Imposta l'orientamento dei componenti figli in riga
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    display: "flex",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    resizeMode: "contain",
    width: "100%",
    objectFit: "scale-down",
  },
  text: {
    fontSize: 36,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 36,
    lineHeight: 21,
    fontWeight: "bold",
    color: "white",
  },
  text2: {
    fontSize: 30,
    lineHeight: 21,
    letterSpacing: 0.5,
    color: "white",
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default Schedule;
