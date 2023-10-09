import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

const PlaceholderImage = require("../images/sfondo3.png");
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const itaFlag = require("../images/itaFlag.png");
const ukFlag = require("../images/ukFlag.png");

const GetStarted = ({ navigation }) => {
  const [buttonText, setButtonText] = useState("Iniziamo");
  const [attivo, setAttivo] = useState("1");
  function handleClickEng() {
    setButtonText("Get Started");
    setAttivo("2");
  }
  function handleClickIta() {
    setButtonText("Iniziamo");
    setAttivo("1");
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground source={PlaceholderImage} style={styles.image}>
          <Text style={styles.text}>Ideas • Worth • Spreading</Text>
          <Text style={styles.text1}>________________</Text>
          <Text style={styles.text2}></Text>

          <View style={styles.buttonContainer1}>
            <TouchableOpacity
              style={attivo === "1" ? styles.button1 : styles.button2}
              onPress={handleClickIta}
            >
              <Image source={itaFlag} style={styles.flagIcon}></Image>
              <Text style={styles.buttonLabel}>{"ITA"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={attivo === "2" ? styles.button1 : styles.button2}
              onPress={handleClickEng}
            >
              <Image source={ukFlag} style={styles.flagIcon}></Image>
              <Text style={styles.buttonLabel}>{"ENG"}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Vision")}
            >
              <Text style={styles.buttonLabel}>{buttonText}</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#000",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },

  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    bottom: 235,
    position: "absolute",
    textAlignVertical: "center",
    textAlign: "center",
  },
  text1: {
    fontSize: 36,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "white",
    bottom: 220,
    position: "absolute",
  },
  text2: {
    fontSize: 20,
    color: "white",
    bottom: 160,
    position: "absolute",
  },

  imageContainer: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: windowWidth,
    height: windowHeight,
    borderRadius: 1,
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    width: 320,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    bottom: 60,
    position: "absolute",
  },
  buttonContainer1: {
    display: "flex",
    width: 320,
    height: 60,
    bottom: 140,
    position: "absolute",
    marginHorizontal: "auto",
    flexDirection: "row",
    gap: 20,
  },
  button: {
    display: "flex",
    borderRadius: 10,
    width: "100%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#eb0028",
    borderRadius: 18,
  },
  button1: {
    display: "flex",
    flex: 1,
    borderRadius: 10,
    width: 120,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#eb0028",
    borderRadius: 18,
    gap: 10,
  },
  button2: {
    display: "flex",
    flex: 1,
    borderRadius: 10,
    width: 120,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#001111",
    borderRadius: 18,
    gap: 10,
  },
  buttonIcon: {
    paddingRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    color: "white",
    fontSize: 19,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  flagIcon: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
  },
});

export default GetStarted;
