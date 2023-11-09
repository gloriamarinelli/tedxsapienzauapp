import React, { useRef, useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
//import { Audio } from "expo-av";

const buttonColor = ["#ff0000", "#00ff00", "#0000ff"];

const speech = [
  require("../../../speech/prova.wav"),
  require("../../../speech/prova2.wav"),
  require("../../../speech/prova3.wav"),
];

const Speech = () => {
  const [soundObject, setSoundObject] = useState(new Audio.Sound());
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(null);
  const [position, setPosition] = useState(null);

  const handlePlaySpeech = async (uri) => {
    try {
      await soundObject.unloadAsync(); // Unload previous sound if any
      await soundObject.loadAsync(uri, {}, false);
      const { durationMillis } = await soundObject.getStatusAsync();
      setDuration(durationMillis);
      await soundObject.playAsync();
      setIsPlaying(true);
    } catch (error) {
      console.log(error);
    }
  };


  const handlePause = async () => {
    try {
      const { positionMillis } = await soundObject.getStatusAsync();
      await soundObject.pauseAsync();
      setIsPlaying(false);
      setPosition(positionMillis);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStop = async () => {
    try {
      await soundObject.stopAsync();
      setIsPlaying(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleResume = async () => {
    try {
      await soundObject.playFromPositionAsync(position);
      setIsPlaying(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDurationUpdate = async () => {
    const { durationMillis, positionMillis } = await soundObject.getStatusAsync();
    setDuration(durationMillis/1000);
    setPosition(positionMillis/1000);
  };

  useEffect(() => {
    soundObject.setOnPlaybackStatusUpdate(handleDurationUpdate);

    return () => {
      soundObject.unloadAsync(); // Unload the sound when the component is unmounted
    };
  }, []);

  return (
    <ScrollView style={styles.container}>
      {buttonColor &&
        buttonColor.map((item, index) => (
          <View key={index}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: item }]}
              onPress={() => handlePlaySpeech(speech[index])}
            >
              <Text>{`Speech ${index + 1}`}</Text>
            </TouchableOpacity>
          </View>
        ))}

      <View style={styles.controls}>
      {isPlaying ? (
        <TouchableOpacity onPress={handlePause}>
          <Text style={styles.controlText}>Pause</Text>
        </TouchableOpacity>
      ) : position === 0 ? ( 
        <TouchableOpacity onPress={() => handlePlaySpeech(speech[0])}>
          <Text style={styles.controlText}>Play</Text>
        </TouchableOpacity>
      ) : null}

        <TouchableOpacity onPress={handleStop}>
          <Text style={styles.controlText}>Stop</Text>
        </TouchableOpacity>

        {!isPlaying && position !== 0 ? (
          <TouchableOpacity onPress={handleResume}>
            <Text style={styles.controlText}>Resume</Text>
          </TouchableOpacity>
        ): null}
      </View>

      <Text style={styles.faqText}>
        {`Duration: ${duration !== null ? duration : "N/A"} s\n`}
        {`Position: ${position !== null ? position : "N/A"} s\n`}
        {`Status: ${isPlaying ? "Playing" : "Paused"}`}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0c0e",
    padding: 15,
  },
  button: {
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  controls: {
    marginTop: 20,
    alignItems: "center",
  },
  controlText: {
    fontSize: 18,
    color: "#ffffff",
    marginVertical: 5,
  },
  faqText: {
    marginTop: 10,
    fontSize: 16,
    color: "#ffffff",
  },
});

export default Speech;
