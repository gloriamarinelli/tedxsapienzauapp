import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Dimensions,
} from "react-native";

const PlaceholderImage = require("../images/location2bis-transformed.png");
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const GetStarted = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground source={PlaceholderImage} style={styles.image}>
          <Text style={styles.text}>Ideas • Worth • Spreading</Text>
          <Text style={styles.text1}>________________</Text>
          <Text style={styles.text2}></Text>
          
          <View style={styles.buttonContainer1}>
            <Pressable
              style={styles.button1}
              onPress={() => navigation.navigate("Vision")}
            >
              <Text style={styles.buttonLabel}>{"ITA"}</Text>
            </Pressable>
            <Text style={styles.text2}>'   '</Text>
            <Pressable
              style={styles.button2}
              onPress={() => navigation.navigate("Vision")}
            >
              <Text style={styles.buttonLabel}>{"ENG"}</Text>
            </Pressable>

          </View>

          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Vision")}
            >
              <Text style={styles.buttonLabel}>{"Get Started"}</Text>
            </Pressable>
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
    bottom: 215,
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
    flexDirection: 'row',
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
    flex:1,
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
    flex:1,
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
  buttonIcon: {
    paddingRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    color: "white",
    fontSize: 24,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default GetStarted;
