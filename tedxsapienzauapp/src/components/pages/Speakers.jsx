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

const Speaker = () => {
  const SpeakerCard = ({ name, image, description }) => {
    return (
      <View
        style={{
          width: "100%",
          height: 250,
          backgroundColor: "red",
        }}
      >
        <Image
          source={image}
          style={{ position: "absolute", maxHeight: 250, width: "100%" }}
        />
        <Text style={styles.text1}>{name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SpeakerCard
          name={"Nome Cognome"}
          image={require("../images/speakers/rose_villain.jpg")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0c0e",
  },
  container1: {
    flex: 1,
    backgroundColor: "#0b0c0e",
    paddingTop: 20,
  },
  text: {
    paddingTop: 15,
    fontSize: RFValue(18),
    color: "white",
    textAlign: "justify",
  },
  text1: {
    paddingTop: 15,
    fontSize: RFValue(24),
    color: "white",
    textAlign: "center",
  },
  image: {
    width: windowWidth,
    height: 200,
    resizeMode: "contain",
  },
});

export default Speaker;
