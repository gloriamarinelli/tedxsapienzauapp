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
    nome: "Alessia Dapoto",
    traduzione: require("../../../speech/DAPOTO.mp3"),
  },
  {
    nome: "Nicola Armaroli",
    traduzione: require("../../../speech/ARMAROLI.aac"),
  },
  {
    nome: "Abbozzo",
    traduzione: require("../../../speech/ABBOZZO.mp3"),
  },
  {
    nome: "Lorenzo Nardi",
    traduzione: require("../../../speech/NARDI.mp3"),
  },
  {
    nome: "Break",
    traduzione: require("../../../speech/NARDI.mp3"),
  },
  {
    nome: "Lorenzo Saltarelli",
    traduzione: require("../../../speech/SALTARELLI.mp3"),
  },
  {
    nome: "Esmeralda Moretti",
    traduzione: require("../../../speech/MORETTI.mp3"),
  },
  {
    nome: "Pepa Pasatu",
    traduzione: require("../../../speech/PASATU.mp3"),
  },
  {
    nome: "Pausa pranzo",
    traduzione: require("../../../speech/PASATU.mp3"),
  },
  {
    nome: "Riccardo Azzali",
    traduzione: require("../../../speech/AZZALI.mp3"),
  },
  {
    nome: "Carmen Panepinto Zayati",
    traduzione: require("../../../speech/PANEPINTO.mp3"),
  },
  {
    nome: "Kento",
    traduzione: require("../../../speech/KENTO.mp3"),
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
  const [selectedSpeech, setSelectedSpeech] = useState(null);

  useEffect(() => {
    console.log(speakerDes);
    setSelectedSpeech(informazioni.find((item) => item.nome === speakerDes));
    if (speakerDes.nome === "Break") {
      setSelectedSpeech(informazioni[4]);
    }
    if (speakerDes.nome === "Pausa pranzo") {
      setSelectedSpeech(informazioni[8]);
    }

    return () => {
      console.log("UNMOUNT");
      soundObject.unloadAsync();
      setSoundObject(new Audio.Sound());
      setIsPlaying(false);
      setIsPaused(false);
      setDuration(null);
      setPosition(null);
      setEverPlayed(false);
      setSelectedSpeech(null);
      console.log("Cleanup");
    };
  }, [speakerDes]);

  useEffect(() => {}, []);

  // const selectedSpeech = informazioni.find((item) => item.nome === speakerDes);

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
