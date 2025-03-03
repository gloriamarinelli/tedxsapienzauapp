import React, { useState, useContext } from "react";
import { LanguageContext } from "../../App.js";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ImageBackground,
  Pressable,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import { Card } from "react-native-elements";
import { speaker23 } from "./speakerDetails.jsx";
import { useNavigation } from "@react-navigation/native";

const PlaceholderImage = require("../images/Red-Circle.png");

//Speaker
const Speaker = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentSpeakerImage, setCurrentSpeakerImage] = useState("");
  const [currentSpeaker, setCurrentSpeaker] = useState("");
  const [currentSpeechTitle, setCurrentSpeechTitle] = useState("");

  const { language } = useContext(LanguageContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={speaker23}
        numColumns={1}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              setModalVisible(true);
              setCurrentDescription(
                language === "ita" ? item.bioIta : item.bioEng
              );
              setCurrentSpeakerImage(item.image);
              setCurrentSpeaker(item.name);
              setCurrentSpeechTitle(item.speechTitle);
              navigation.navigate("descriptionSpeech", {
                speakerDes: item.name,
                descriptionDes: language === "ita" ? item.bioIta : item.bioEng,
                imageDes: item.image,
                speechTitleDes: item.speechTitle,
              });
            }}
          >
            <Card containerStyle={styles.card}>
              <Image source={item.image} style={styles.image} />
              <LinearGradient
                style={styles.gradient}
                colors={["transparent", "#000"]}
                locations={[0, 0.8]}
              />
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>{item.name}</Text>
                <View style={styles.timeContainer}>
                  <ImageBackground
                    source={PlaceholderImage}
                    style={styles.timeBackground}
                  >
                    <Text style={styles.timeText}>{item.time}</Text>
                  </ImageBackground>
                </View>
              </View>
            </Card>
          </Pressable>
        )}
      />
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
  card: {
    width: "90%",
    backgroundColor: "#0b0c0e",
    borderColor: "#0b0c0e",
    height: 200,
    padding: 0,
    margin: 0,
    borderRadius: 15,
    marginTop: 20,
    overflow: "hidden",
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    transform: [{ scale: 1 }],
  },
  gradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
  },
  nameText: {
    fontSize: RFValue(22),
    color: "white",
    fontWeight: "bold",
  },
  timeContainer: {
    alignItems: "flex-end",
  },
  timeBackground: {
    width: 80,
    aspectRatio: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  timeText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Speaker;
