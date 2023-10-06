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

const FAQ = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={require("../images/logo_Bto0_bianco.png")}
          style={styles.image}
        />
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

export default FAQ;
