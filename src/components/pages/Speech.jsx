import React, { useRef, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Audio } from "expo-av";
import { Card } from "react-native-elements";

const windowWidth = Dimensions.get("window").width;
const logoPause = require("../images/player/pause.png");
const logoStop = require("../images/player/stop.png");
const logoPlay = require("../images/player/play.png");
const logoBack = require("../images/player/back.png");

// Informazioni
const informazioni = [
  {
    nome: "Damiano Tullio",
    traduzione: require("../../../speech/TULLIO.aac"),
  },
  {
    nome: "Nicola Armaroli",
    traduzione: require("../../../speech/ARMAROLI.aac"),
  },
  {
    nome: "Edward von Freymann",
    traduzione: require("../../../speech/VON_FREYMANN.aac"),
  },
  {
    nome: "Riccardo Basilone",
    traduzione: require("../../../speech/RICCARDO-BASILONE.aac"),
  },
  {
    nome: "Silvano Onori",
    traduzione: require("../../../speech/ONOFRI.aac"),
  },
  {
    nome: "Gloria Schito",
    traduzione: require("../../../speech/GLORIA-SCHITO.aac"),
  },
  {
    nome: "Matteo Cervellini",
    traduzione: require("../../../speech/MATTEO-CERVELLINI.aac"),
  },
  {
    nome: "Ana Estrela",
    traduzione: require("../../../speech/ANA-ESTRELA.aac"),
    
  },
  {
    nome: "Silvano Oofri",
    traduzione: require("../../../speech/ONOFRI.aac"),
  },
  {
    nome: "Nina Lambarelli",
    traduzione: require("../../../speech/NINA-LAMBARELLI.aac"),
  },
  {
    nome: "Rose Villain",
    traduzione: require("../../../speech/ROSE-VILLAIN.aac"),
  },
  {
    nome: "Silvano Onofri",
    traduzione: require("../../../speech/ONOFRI.aac"),
  },
];

// Speech
const Speech = ({ speakerDes }) => {
  const [soundObject, setSoundObject] = useState(new Audio.Sound());
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [duration, setDuration] = useState(null);
  const [position, setPosition] = useState(null);
  const [everPlayed, setEverPlayed] = useState(false);

  const selectedSpeech = informazioni.find((item) => item.nome === speakerDes);

  const handlePlaySpeech = async () => {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        staysActiveInBackground: false,
        playThroughEarpieceAndroid: true,
      });
      await soundObject.unloadAsync();
      await soundObject.loadAsync(selectedSpeech.traduzione, {}, false);
      const { durationMillis } = await soundObject.getStatusAsync();
      setDuration(durationMillis);
      await soundObject.playAsync();
      setIsPlaying(true);
      setIsPaused(false);
      setEverPlayed(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePause = async () => {
    try {
      const { positionMillis } = await soundObject.getStatusAsync();
      await soundObject.pauseAsync();
      setIsPlaying(false);
      setIsPaused(true);
      setPosition(positionMillis);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStop = async () => {
    try {
      await soundObject.stopAsync();
      await soundObject.unloadAsync();
      setIsPlaying(false);
      setIsPaused(false);
      setEverPlayed(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleResume = async () => {
    try {
      await soundObject.playFromPositionAsync(position);
      setIsPlaying(true);
      setIsPaused(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTenSeconds = async () => {
    try {
      const { positionMillis } = await soundObject.getStatusAsync();
      if (positionMillis >= 10000) {
        setIsPaused(true); // Pause the audio temporarily
        const newPosition = positionMillis - 10000;
        await soundObject.setPositionAsync(newPosition);
        await soundObject.playAsync(); // Start playing from the new position
        setPosition(newPosition);
        setIsPaused(false); // Resume playback
      } else {
        await soundObject.replayAsync();
        setPosition(0);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const onPlaybackStatusUpdate = (status) => {
      if (status.didJustFinish) {
        setIsPlaying(false);
        setPosition(0);
        soundObject.unloadAsync();
      }
    };

    soundObject.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);

    return () => {
      soundObject.unloadAsync();
    };
  }, [soundObject]);

  return (
    <Card containerStyle={styles.card}>
      <View style={styles.buttonContainer}>
        {!isPlaying && !isPaused && (
          <TouchableOpacity
            style={styles.roundButton1}
            onPress={handlePlaySpeech}
          >
            <Image source={logoPlay} style={styles.playerLogo} />
          </TouchableOpacity>
        )}
        {isPlaying && (
          <TouchableOpacity style={styles.roundButton1} onPress={handlePause}>
            <Image source={logoPause} style={styles.playerLogo} />
          </TouchableOpacity>
        )}
        {isPaused && (
          <TouchableOpacity style={styles.roundButton1} onPress={handleResume}>
            <Image source={logoPlay} style={styles.playerLogo} />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.roundButton1} onPress={handleStop}>
          <Image source={logoStop} style={styles.playerLogo} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton1}
          onPress={handleTenSeconds}
        >
          <Image source={logoBack} style={styles.playerLogo} />
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: windowWidth - 60,
    alignSelf: "center",
    borderRadius: 5,
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  roundButton1: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    marginHorizontal: 10,
  },
  playerLogo: {
    width: 20,
    height: 20,
  },
});

export default Speech;
