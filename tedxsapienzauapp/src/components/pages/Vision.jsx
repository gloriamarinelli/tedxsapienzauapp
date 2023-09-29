import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

const Vision = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../images/logo-white.png")}
          resizeMode="contain"
        />
        <Text style={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },

  text: {
    fontSize: 18,
    letterSpacing: 0.5,
    color: "white",
    fontFamily: "Helvetica",
    bottom: 215,
  },

  imageContainer: {
    display: "flex",
    paddingTop: 58,
    alignItems: "center",
  },
  image: {
    width: windowWidth,
    height: 10,
    borderRadius: 1,
    position: "relative",
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
    marginHorizontal: "auto",
  },
});

export default Vision;
