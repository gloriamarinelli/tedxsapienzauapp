import React, { useState, useContext } from "react";
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
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import global from "../../resources/global.json";
import { Card } from "react-native-elements";
import { speaker23 } from "./speakerDetails.jsx";
import descriptionSpeech from "./descriptionSpeech.jsx";
import { useNavigation } from '@react-navigation/native';

const PlaceholderImage = require("../images/Red-Circle.png");

const Speaker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentSpeakerImage, setCurrentSpeakerImage] = useState("");
  const [currentSpeaker, setCurrentSpeaker] = useState("");
  const [currentSpeechTitle, setCurrentSpeechTitle] = useState("");

  const { language } = useContext(LanguageContext);
  const navigation = useNavigation();

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
              navigation.navigate('descriptionSpeech', {
                speakerDes: currentSpeaker,
                descriptionDes: currentDescription,
                imageDes: currentSpeakerImage,
                speechTitleDes: currentSpeechTitle,
              });
              
            }}
          >
            <Card id="CARD" containerStyle={styles.card}>
              <Image source={item.image} style={styles.image} />
              <LinearGradient
                style={{ width: "100%", height: "100%", position: "absolute" }}
                colors={["transparent", "rgba(0, 0, 0, 0.65)"]}
                locations={[0, 0.8]}
              >
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    zIndex: 2,
                  }}
                >
                  <Text style={styles.nameText}>
                    {item.name} <Feather name="info" size={24} color="white" />
                  </Text>
                  <ImageBackground
                    source={PlaceholderImage}
                    style={{
                      position: "absolute",
                      right: item.circlePosition === "left" ? null : 5,
                      left: item.circlePosition === "left" ? 5 : null,
                      top: 5,
                      width: 80,
                      aspectRatio: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      {item.time}
                    </Text>
                  </ImageBackground>
                </View>
              </LinearGradient>
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
  nameText: {
    fontSize: RFValue(22),
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    position: "absolute",
    top: 210,
    left: 10,
  },
  card: {
    width: "90%",
    backgroundColor: "#0b0c0e",
    borderColor: "#0b0c0e",
    height: 250,
    padding: 0,
    margin: 0,
    borderRadius: 15,
    marginTop: 20,
    overflow: "hidden",
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    transform: [{ scale: 1 }],
  },
});

export default Speaker;
