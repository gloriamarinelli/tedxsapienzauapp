import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import Speech from "./Speech.jsx";
import '@fontsource-variable/bricolage-grotesque/index.css';

//descriptionSpeech
const DescriptionSpeech = ({ route }) => {
  const { speakerDes, descriptionDes, imageDes, speechTitleDes } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Image Background with Gradient */}
        <ImageBackground source={{ uri: imageDes }} style={styles.imageBackground} imageStyle={{ borderRadius: 15}}>
          <LinearGradient
                          style={styles.gradient}
                          colors={["transparent", "#000"]}
                          locations={[0.6, 0.9]}
                        >
          </LinearGradient>
          <Text style={styles.spNameText}>{speakerDes}</Text>
        </ImageBackground>

        {/* Speech Title */}
        <Text style={styles.titleText}>{speechTitleDes}</Text>

        {/* Speech Player */}
        <Speech speakerDes={speakerDes} />

        {/* Speech Description */}
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
  imageBackground: {
    width: "100%",
    height: RFValue(250),
    justifyContent: "flex-end",
  },
  gradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  nameText: {
    fontSize: RFValue(22),
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "'Bricolage Grotesque Variable', sans-serif",
  },
  titleText: {
    fontSize: RFValue(20),
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    marginVertical: 15,
    fontFamily: "'Bricolage Grotesque Variable', sans-serif",
    fontStyle: 'italic',
  },
  descriptionText: {
    fontSize: RFValue(18),
    marginTop: 20,
    color: "white",
    textAlign: "justify",
    fontWeight: "normal",
    fontFamily: "'Bricolage Grotesque Variable', sans-serif",
  },
  spNameText: {
    fontSize: RFValue(26),
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    marginVertical: 15,
    fontFamily: "'Bricolage Grotesque Variable', sans-serif",
    fontWeight: "bold",
  },
});

export default DescriptionSpeech;
