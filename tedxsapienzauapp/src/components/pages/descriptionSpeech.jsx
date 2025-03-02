import React, { useState, useContext, useRef, useEffect } from "react";
import { LanguageContext } from "../../App.js";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
  FlatList,
  SafeAreaView,
  Pressable,
  Modal,
  TouchableOpacity,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import global from "../../resources/global.json";
import { Card } from "react-native-elements";
import { speaker23 } from "./speakerDetails.jsx";
import Speaker from "./Speakers.jsx";
import Speech from "./Speech.jsx";

import { Audio } from "expo-av";

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
    padding: 20, // Add padding for better spacing
    justifyContent: "flex-start", // Align items to the top
  },
  nameText: {
    fontSize: RFValue(22),
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10, // Add margin to separate from description
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
