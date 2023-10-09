import React from "react";
import { Text, StyleSheet, Dimensions, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";
const windowWidth = Dimensions.get("window").width;
const sfondo = require("../images/mappa.jpeg");

const Map = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={sfondo} style={styles.map}></Image>
        <Text style={styles.text}>
          Aula Magna,{"\n"}
          Palazzo del Rettorato{"\n"}
          Sapienza Università di Roma{"\n"}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 15,
  },
  text: {
    fontSize: RFValue(18),
    color: "white",
    textAlign: "justify",
    marginTop: 15,
  },
  map: {
    height: 400,
    width: 500,
  },
});

export default Map;
