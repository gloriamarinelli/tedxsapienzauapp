import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const DescriptionSpeech = ({ route }) => {
  const navigation = useNavigation();
  const { speakerDes, descriptionDes, imageDes, speechTitleDes, speechDes } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Image Background with Gradient */}
        <View style={styles.imageContainer}>
          <ImageBackground source={{ uri: imageDes }} style={styles.imageBackground} imageStyle={{ borderRadius: 15 }}>
            <LinearGradient style={styles.gradient} colors={["transparent", "#0b0c0e"]} locations={[0.6, 0.9]} />
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.spNameText}>{speakerDes}</Text>
          </ImageBackground>
        </View>

        {/* Speech Title */}
        <Text style={styles.titleText}>{speechTitleDes}</Text>

        {/* Speech Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Transcription", {
              speakerDes,
              descriptionDes,
              imageDes,
              speechTitleDes,
              speechDes,
            });
          }}
        >
          <Text style={styles.buttonLabel}>Speech</Text>
        </TouchableOpacity>

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
  imageContainer: {
    position: "relative",
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
  backButton: {
    position: "absolute",
    top: 15,
    left: 15,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    padding: 8,
  },
  spNameText: {
    fontSize: RFValue(26),
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 15,
    fontFamily: "'Bricolage Grotesque Variable', sans-serif",
  },
  titleText: {
    fontSize: RFValue(20),
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    marginVertical: 15,
    fontFamily: "'Bricolage Grotesque Variable', sans-serif",
    fontStyle: "italic",
  },
  descriptionText: {
    fontSize: RFValue(18),
    marginTop: 20,
    color: "white",
    textAlign: "justify",
    fontWeight: "normal",
    fontFamily: "'Bricolage Grotesque Variable', sans-serif",
  },
  button: {
    width: "100%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E7348B",
    borderRadius: 18,
    marginVertical: 15,
  },
  buttonLabel: {
    color: "#FFF",
    fontSize: RFValue(20),
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "'Bricolage Grotesque Variable', sans-serif",
  },
});

export default DescriptionSpeech;
