import React, { useContext, useCallback } from "react";
import { LanguageContext } from "../../App.js";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Linking,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";
const windowWidth = Dimensions.get("window").width;
const SocialWidth = windowWidth / 6 - 8;

const Paradoxa = () => {
  const { language } = useContext(LanguageContext);

  const paradoxaita = [
    {
      text: "Dal greco παράδοξος, composto di παρα- nel sign. di «contro» e δόξα «opinione». Che va contro il modo di pensare comune. La storia dei paradossi è antica e risale alla nascita della logica. Ma, mentre i primi ad essere formulati erano più simili a giochi mentali, la modernità ne ha fatti nascere di nuovi nella realtà che ci circonda. La giustizia che crea disuguaglianza, le possibilità che creano svogliatezza, i conflitti per portare la pace. E così come gli antichi pensatori li hanno sviluppati, per stimolare la riflessione, allo stesso modo noi dobbiamo fronteggiare, non evitare, i paradossi che permeano la natura del mondo antropico per far germogliare le idee che possano migliorarlo. PARA DOXA sarà il terreno fertile per coltivarle.",
    },
  ];

  const paradoxaeng = [
    {
      text: "Our goal is to zero out, to seek a zero point: inequalities, conflicts, bad lifestyles, emissions and waste. To reduce those polluting factors that slow down the growth of our society, degrading the quality of our lives. Reconsider ourselves and the way we compare ourselves. Learning and interacting with contemporary society, the arts and sciences. It is fundamental to building a world where human beings can be 'reborn,' thriving and expressing themselves at their best in every discipline. Rediscover the basics of being reborn, becoming better people in a better place.",
    },
  ];

  const paradoxa = language === "ita" ? paradoxaita : paradoxaeng;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={require("../images/Logo2_bianco.svg")}
          style={styles.image}
        />
        {paradoxa.map((item, index) => (
          <View key={index} style={styles.container1}>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}
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
    backgroundColor: "black",
    padding: 15,
  },
  text: {
    marginTop: 18,
    fontSize: RFValue(18),
    color: "white",
    textAlign: "justify",
  },
  text1: {
    fontSize: RFValue(20),
    color: "white",
    textAlign: "center",
  },
  image: {
    width: 350,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
  social: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "25px",
    marginTop: "25px",
  },
  roundButton1: {
    width: SocialWidth,
    height: SocialWidth,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    borderRadius: 100,
    backgroundColor: "white",
    margin: 1,
  },
  socialLogo: {
    width: 35,
    height: 35,
  },
});

export default Paradoxa;
