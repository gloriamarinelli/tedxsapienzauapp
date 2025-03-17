import React, { useState, useEffect, useContext, createContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MainContainer from "./components/MainContainer.js";

export const LanguageContext = createContext();

const PlaceholderImage = require("./components/images/paradoxalabirinth.png");
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const itaFlag = require("./components/images/itaFlag.png");
const ukFlag = require("./components/images/ukFlag.png");

//LoadingScreen
const LoadingScreen = ({ setCurrentScreen }) => {
  useEffect(() => {
    setTimeout(() => {
      setCurrentScreen("LoadingTransition");
    }, 1500);
  }, []);

  return (
    <View style={styles.containerLS}>
      <Image
        source={require("./components/images/logo-white.png")}
        style={styles.logoLS}
        resizeMode="contain"
      />
      <ActivityIndicator
        size="large"
        color="red"
        style={styles.loadingContainerLS}
      />
    </View>
  );
};

// LoadingTransition
const LoadingTransition = ({ setCurrentScreen }) => {
  useEffect(() => {
    setTimeout(() => {
      setCurrentScreen("GetStarted");
    }, 1500);
  }, []);

  return (
    <View style={styles.containerLT}>
      <Image
        source={require("./components/images/Logo1_bianco.png")}
        style={styles.imageLT}
      />
    </View>
  );
};

// GetStarted
const GetStarted = ({ setCurrentScreen }) => {
  const [buttonText, setButtonText] = useState("Iniziamo");
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <View style={styles.container}>
      <ImageBackground source={PlaceholderImage} style={styles.image}>
      <LinearGradient
          style={styles.gradient}
          colors={["transparent", "#000"]}
          locations={[0.4, 0.7]}
        />
        <Text style={styles.text}>Ideas • change • everything</Text>

        <View style={styles.buttonContainer1}>
          <TouchableOpacity
            style={language === "ita" ? styles.button1 : styles.button2}
            onPress={() => {
              setButtonText("Iniziamo");
              setLanguage("ita");
            }}
          >
            <Image source={itaFlag} style={styles.flagIcon} />
            <Text style={styles.buttonLabel}>ITA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={language === "eng" ? styles.button1 : styles.button2}
            onPress={() => {
              setButtonText("Get Started");
              setLanguage("eng");
            }}
          >
            <Image source={ukFlag} style={styles.flagIcon} />
            <Text style={styles.buttonLabel}>ENG</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setCurrentScreen("MainContainer")}
          >
            <Text style={styles.buttonLabel1}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

//App
const App = () => {
  const [language, setLanguage] = useState("ita");
  const [currentScreen, setCurrentScreen] = useState("LoadingScreen");

  let ScreenComponent;
  switch (currentScreen) {
    case "LoadingScreen":
      ScreenComponent = <LoadingScreen setCurrentScreen={setCurrentScreen} />;
      break;
    case "LoadingTransition":
      ScreenComponent = (
        <LoadingTransition setCurrentScreen={setCurrentScreen} />
      );
      break;
    case "GetStarted":
      ScreenComponent = <GetStarted setCurrentScreen={setCurrentScreen} />;
      break;
    case "MainContainer":
      ScreenComponent = <MainContainer />;
      break;
    default:
      ScreenComponent = <LoadingScreen setCurrentScreen={setCurrentScreen} />;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {ScreenComponent}
    </LanguageContext.Provider>
  );
};

// Styles
const styles = StyleSheet.create({
  containerLS: {
    flex: 1,
    backgroundColor: "#0b0c0e",
    justifyContent: "center",
    alignItems: "center",
  },
  logoLS: { width: 300, height: 150, marginBottom: -30 },
  loadingContainerLS: { marginTop: 30 },
  containerLT: {
    flex: 1,
    backgroundColor: "#0b0c0e",
    justifyContent: "center",
    alignItems: "center",
  },
  imageLT: { width: 300, height: 300, resizeMode: "contain" },
  container: { flex: 1, backgroundColor: "#000000" },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    bottom: 185,
    textAlign: "center",
    width: '100%',
  },
  image: {
    width: windowWidth,
    height: windowHeight,
    alignItems: "center",
    resizeMode: "cover",
  },
  buttonContainer: {
    width: 320,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
  },
  buttonContainer1: {
    width: 320,
    height: 60,
    position: "absolute",
    bottom: 85,
    flexDirection: "row",
    gap: 20,
  },
  button: {
    width: "100%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E7348B",
    borderRadius: 18,
  },
  button1: {
    flex: 1,
    width: 120,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E7348B",
    borderRadius: 18,
    flexDirection: "row",
    gap: 10,
  },
  button2: {
    flex: 1,
    width: 120,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#001111",
    borderRadius: 18,
    flexDirection: "row",
    gap: 10,
  },
  buttonLabel: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonLabel1: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
  },
  flagIcon: { width: 30, height: 30 },
});

export default App;
