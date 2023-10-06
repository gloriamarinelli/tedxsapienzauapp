import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";
const windowWidth = Dimensions.get("window").width;

const Map = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={{ color: "white" }}>
          {" "}
          Università La Sapienza - Aula Magna Rettorato Piazzale Aldo Moro, 5,
          00185 Roma RM{" "}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  container1: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 20,
  },
  text: {
    paddingTop: 15,
    fontSize: RFValue(18),
    color: "white",
    textAlign: "justify",
  },
  text1: {
    paddingTop: 15,
    fontSize: RFValue(24),
    color: "white",
    textAlign: "center",
  },
  image: {
    width: windowWidth,
    height: 200,
    resizeMode: "contain",
  },
});

export default Map;
