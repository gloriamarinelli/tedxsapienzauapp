import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "react-native-elements";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const PlaceholderImage = require("../images/Red-Circle.png");

const Schedule = () => {
  return (
    <ScrollView style={styles.page}>
      {/* evento 1 */}
      <Card containerStyle={styles.card}>
        <View style={styles.card1}>
          <View containerStyle={styles.imageContainer}>
            <ImageBackground source={PlaceholderImage} style={styles.image}>
              <Text style={styles.text}>9:00</Text>
            </ImageBackground>
          </View>
          <View containerStyle={styles.container}>
            <Text style={styles.text1}>Nome dell'evento 1</Text>
            <Text style={styles.text2}>descrizione dell' evento 1</Text>
          </View>
        </View>
      </Card>
      {/* evento 2 */}
      <Card containerStyle={styles.card}>
        <View style={styles.card1}>
          <View containerStyle={styles.container2}>
            <Text style={styles.text1}>Nome dell'evento 2</Text>
            <Text style={styles.text2}>descrizione dell' evento 2</Text>
          </View>
          <View containerStyle={styles.imageContainer2}>
            <ImageBackground source={PlaceholderImage} style={styles.image}>
              <Text style={styles.text}>12:00</Text>
            </ImageBackground>
          </View>
        </View>
      </Card>
      {/* evento 3 */}
      <Card containerStyle={styles.card}>
        <View style={styles.card1}>
          <View containerStyle={styles.imageContainer}>
            <ImageBackground source={PlaceholderImage} style={styles.image}>
              <Text style={styles.text}>15:00</Text>
            </ImageBackground>
          </View>
          <View containerStyle={styles.container}>
            <Text style={styles.text1}>Nome dell'evento 3</Text>
            <Text style={styles.text2}>descrizione dell' evento 3</Text>
          </View>
        </View>
      </Card>
      {/* evento 4 */}
      <Card containerStyle={styles.card}>
        <View style={styles.card1}>
          <View containerStyle={styles.container2}>
            <Text style={styles.text1}>Nome dell'evento 4</Text>
            <Text style={styles.text2}>descrizione dell' evento 4</Text>
          </View>
          <View containerStyle={styles.imageContainer2}>
            <ImageBackground source={PlaceholderImage} style={styles.image}>
              <Text style={styles.text}>18:00</Text>
            </ImageBackground>
          </View>
        </View>
      </Card>
      {/* evento 5 */}
      <Card containerStyle={styles.card}>
        <View style={styles.card1}>
          <View containerStyle={styles.imageContainer}>
            <ImageBackground source={PlaceholderImage} style={styles.image}>
              <Text style={styles.text}>21:00</Text>
            </ImageBackground>
          </View>
          <View containerStyle={styles.container}>
            <Text style={styles.text1}>Nome dell'evento 5</Text>
            <Text style={styles.text2}>descrizione dell' evento 5</Text>
          </View>
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "black",
    display: "flex",
  },
  card: {
    color: "black",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "row",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    borderRadius: 10,
    borderColor: "#181818",
  },
  card1: {
    color: "black",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "row",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    borderRadius: 10,
    borderColor: " 	#181818",
    gap: 20,
  },

  text: {
    fontSize: 36,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 130,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    color: "black",
    flexDirection: "row",
    float: "left",
  },
  text1: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    color: "white",
    flexDirection: "row",
    padding: "10px",
  },
  text2: {
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: 0.5,
    color: "white",
    flexDirection: "row",
    padding: "10px",
  },
  imageContainer: {
    width: 130,
    height: 130,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    color: "black",
    float: "left",
    flex: 1,
  },
  imageContainer2: {
    width: 130,
    height: 130,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    color: "black",
    flex: 1,
  },
  container: {
    flex: 2,
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    color: "black",
    justifyContent: "flex-end",
  },
  container2: {
    flex: 2,
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    color: "black",
    justifyContent: "flex-start",
  },
});

export default Schedule;
