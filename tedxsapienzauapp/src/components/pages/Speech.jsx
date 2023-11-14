import React, { useRef, useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Audio } from "expo-av";
import { RFValue } from "react-native-responsive-fontsize";
import { Card } from "react-native-elements";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const buttonColor = ["#ffffff", "#ffffff", "#ffffff"];
const logoPause = require("../images/player/pause.png");
const logoStop = require("../images/player/stop.png");
const logoPlay = require("../images/player/play.png");
const logoBack = require("../images/player/back.png");

const speech = [
  require("../../../speech/ANA-ESTRELA.aac"),
  require("../../../speech/GLORIA-SCHITO.aac"),
  require("../../../speech/ILARIA-ROSSI.aac"),
  require("../../../speech/MATTEO-CERVELLINI.aac"),
  require("../../../speech/NINA-LAMBARELLI.aac"),
  require("../../../speech/RICCARDO-BASILONE.aac"),
  require("../../../speech/ROSE-VILLAIN.aac"),
];

const informazioni = [
  {
    titolo: "Ana Estrela",
  },
  {
    titolo: "Gloria Schito",
  },
  {
    titolo: "Ilaria Rossi",
  },
  {
    titolo: "Matteo Cervellini",
  },
  {
    titolo: "Nina Lambarelli",
  },
  {
    titolo: "Riccardo Basilone",
  },
  {
    titolo: "Rose Villain",
  },
];

const Speech = () => {
  const [soundObject, setSoundObject] = useState(new Audio.Sound());
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [duration, setDuration] = useState(null);
  const [position, setPosition] = useState(null);

  const handlePlaySpeech = async (uri, index) => {
    try {
      setActiveIndex(index);
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        staysActiveInBackground: false,
        playThroughEarpieceAndroid: true,
      });
      await soundObject.unloadAsync();
      await soundObject.loadAsync(uri, {}, false);
      const { durationMillis } = await soundObject.getStatusAsync();
      setDuration(durationMillis);
      await soundObject.playAsync();
      setIsPlaying(true);
      setIsSelected(true);
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
      setIsSelected(false);
      setActiveIndex(null);
      setIsPaused(false);
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
      if (position >= 10000) {
        handlePause();
        const newPosition = Math.max(0, position - 10000);
        await soundObject.playFromPositionAsync(newPosition);
        setPosition(newPosition);
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
        setActiveIndex(null);
        soundObject.unloadAsync();
      }
    };

    soundObject.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);

    return () => {
      soundObject.unloadAsync();
    };
  }, [soundObject]);

  const renderItem = ({ item, index }) => {
    const isCurrentlyActive = activeIndex === index;
    return (
      <Card containerStyle={styles.card} key={index}>
        <View style={styles.buttonContainer}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={[styles.buttonName]}
              onPress={() => handlePlaySpeech(speech[index], index)}
            >
              <Text style={styles.text}>{item.titolo}</Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              {!isPaused ? (
                <TouchableOpacity
                  style={styles.roundButton1}
                  onPress={() => handlePlaySpeech(speech[index], index)}
                >
                  <Image source={logoPlay} style={styles.playerLogo} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.roundButton1}
                  onPress={() => handleResume()}
                >
                  <Image source={logoPlay} style={styles.playerLogo} />
                </TouchableOpacity>
              )}

              <TouchableOpacity
                style={styles.roundButton1}
                onPress={() => handlePause()}
              >
                <Image source={logoPause} style={styles.playerLogo} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.roundButton1}
                onPress={() => handleStop()}
              >
                <Image source={logoStop} style={styles.playerLogo} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.roundButton1}
                onPress={() => handleTenSeconds()}
              >
                <Image source={logoBack} style={styles.playerLogo} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Card>
    );
  };

  return (
    <FlatList
      data={informazioni}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.titolo}-${index}`}
      style={styles.flatlist}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0c0e",
    padding: 15,
    flexDirection: "row",
  },
  flatlist: {
    flex: 1,
    backgroundColor: "#0b0c0e",
    padding: 15,
  },
  button: {
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 50,
  },
  controls: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  controlText: {
    fontSize: 18,
    color: "#ffffff",
    marginVertical: 5,
  },
  text: {
    fontSize: RFValue(13),
    color: "#eb0028",
    fontWeight: "bold",
  },
  roundButton1: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  playerLogo: {
    width: 20,
    height: 20,
  },

  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 1,
  },
  card: {
    width: windowWidth - 60,
    alignSelf: "stretch",
    borderRadius: 5,
    flexDirection: "row",
    height: 60,
    alignItems: "center",
  },
  buttonName: {
    marginVertical: 10,
    alignItems: "center",
  },
});

export default Speech;
