import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Speech from "./Speech.jsx";

//descriptionSpeech
const descriptionSpeech = ({ route }) => {
  const { speakerDes, descriptionDes, imageDes, speechTitleDes } = route.params;
  //return page
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.nameText}>{speakerDes}</Text>
        <Speech speakerDes={speakerDes} />
        <Text style={styles.descriptionText}>{descriptionDes}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0c0e",
    padding: 20,
    justifyContent: "flex-start",
  },
  nameText: {
    fontSize: RFValue(22),
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: RFValue(18),
    marginTop: 60,
    color: "white",
    textAlign: "center",
    fontWeight: "normal",
    textAlign: "justify",
  },
});

export default descriptionSpeech;
