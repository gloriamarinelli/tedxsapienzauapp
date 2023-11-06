import React, { useRef } from "react";
import { ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import Sound from "react-native-sound";

const Speech = () => {
  const soundRef = useRef();

  const speech = () => {
    const audioPath = require("../speech/prova.mp3");

    soundRef.current = new Sound(audioPath, "", (error) => {
      if (error) {
        console.error("Error loading audio file:", error);
      } else {
        soundRef.current.play();
      }
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={{ color: "white" }}>Speech in English</Text>
      <TouchableOpacity onPress={speech}>
        <Text style={{ color: "blue", marginTop: 10 }}>Play Audio</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0c0e",
    padding: 15,
  },
});

export default Speech;
