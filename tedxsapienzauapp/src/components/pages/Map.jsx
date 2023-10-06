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
        <Text style={styles.text}>
          Università La Sapienza {"\n"}
          Aula Magna Rettorato {"\n"}
          Piazzale Aldo Moro, 5, Roma RM{" "}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingLeft: 10,
    paddingRight: 10,
  },

  text: {
    paddingTop: 15,
    fontSize: RFValue(18),
    color: "white",
    textAlign: "justify",
  },

  image: {
    width: windowWidth,
    height: 200,
    resizeMode: "contain",
  },
});

export default Map;
