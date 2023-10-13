import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;
const PlaceholderImage = require("../images/Red-Circle.png");

const Speaker = () => {
  const SpeakerCard = ({ name, image, description, time, circlePosition }) => {
    return (
      <View
        style={{
          width: "100%",
          height: 250,
          backgroundColor: "#000",
          position: "relative",
          marginBottom: 20,
        }}
      >
        <Image
          source={image}
          style={{
            position: "absolute",
            maxHeight: 250,
            width: "100%",
            borderRadius: 10,
          }}
        />
        <LinearGradient
          style={{ width: "100%", height: "100%", position: "absolute" }}
          colors={["transparent", "rgba(0, 0, 0, 0.65)"]}
          locations={[0, 0.85]}
        >
          <Text style={styles.text1}>{name}</Text>
          <ImageBackground
            source={PlaceholderImage}
            style={{
              position: "absolute",
              right: circlePosition === "left" ? null : 5,
              left: circlePosition === "left" ? 5 : null,
              top: 5,
              width: 80,
              aspectRatio: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
              {time}
            </Text>
          </ImageBackground>
        </LinearGradient>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SpeakerCard
          name={"Damiano Tullio"}
          image={require("../images/speakers/damiano_tullio.jpg")}
          time={"10:15"}
        />
        <SpeakerCard
          name={"Ilaria Lucrezia Rossi"}
          image={require("../images/speakers/ilaria_rossi.jpg")}
          time={"15:45"}
          circlePosition={"left"}
        />
        <SpeakerCard
          name={"Rose Villain"}
          image={require("../images/speakers/rose_villain.jpg")}
          time={"15:45"}
        />
        <SpeakerCard
          name={"Nakita Aboya"}
          image={require("../images/speakers/nakita.jpg")}
          time={"16:15"}
        />
        <SpeakerCard
          name={"Nina Lambarelli"}
          image={require("../images/speakers/nina.jpg")}
          time={"12:45"}
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
    fontWeight: "bold",
    position: "absolute",
    bottom: 5,
    left: 10,
  },
  image: {
    width: windowWidth,
    height: 200,
    resizeMode: "contain",
  },
});

export default Speaker;
