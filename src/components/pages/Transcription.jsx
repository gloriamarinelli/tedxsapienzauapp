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
import Speech from "./Speech.jsx";
import "@fontsource-variable/bricolage-grotesque/index.css";

const Transcription = ({ route }) => {
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
        <Text style={styles.titleText}>Traduzione</Text>

        {/* Speech Player */}
        <Speech speakerDes={speakerDes} />

        {/* Speech Description */}
        <Text style={styles.titleText}>Testo</Text>
        <Text style={styles.descriptionText}>{speechDes}</Text>
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
  },
  descriptionText: {
    fontSize: RFValue(18),
    marginTop: 20,
    color: "white",
    textAlign: "justify",
    fontWeight: "normal",
    fontFamily: "'Bricolage Grotesque Variable', sans-serif",
  },
});

export default Transcription;