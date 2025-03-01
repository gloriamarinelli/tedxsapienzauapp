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

import { Audio } from "expo-av";

const descriptionSpeech = ({route}) => {
    const { speakerDes, descriptionDes, imageDes, speechTitleDes } = route.params;
  //return page
  return (
    <View style={styles.container}>
      <Text>{speakerDes}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0c0e",
    paddingTop: 0,
    paddingBottom: 0,
    justifyContent: "center",
  },
});

export default descriptionSpeech;
