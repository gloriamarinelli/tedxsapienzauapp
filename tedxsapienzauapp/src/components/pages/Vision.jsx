import React, { useContext } from "react";
import { LanguageContext } from "../../App.js";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";
const windowWidth = Dimensions.get("window").width;

const Vision = () => {
  const { language } = useContext(LanguageContext);

  const visionita = [
    {
      text1:
        "❝ L'uomo e il mondo che lo circonda non sono binari separati, ma rotaie che si muovono insieme, hanno bisogno l'uno dell'altro. ❞",
      text: "Il nostro obiettivo è azzerare, ricercare un punto zero: le disuguaglianze, i conflitti, i cattivi stili di vita, le emissioni e i rifiuti. Ridurre quei fattori inquinanti che rallentano la crescita della nostra società, peggiorando la qualità della nostra vita. Riconsiderare noi stessi ed il nostro modo di confrontarci. Imparare ed interagire con la società contemporanea, con le arti e le scienze. È fondamentale per costruire un mondo dove l'essere umano possa 'rinascere', prosperando ed esprimendosi al meglio in ogni disciplina. Riscoprire le basi per rinascere, diventare persone migliori in un luogo migliore.",
    },
  ];

  const visioneng = [
    {
      text1:
        "❝ Man and the world around him are not separate tracks, but rails moving together, needing each other. ❞",
      text: "Our goal is to zero out, to seek a zero point: inequalities, conflicts, bad lifestyles, emissions and waste. To reduce those polluting factors that slow down the growth of our society, degrading the quality of our lives. Reconsider ourselves and the way we compare ourselves. Learning and interacting with contemporary society, the arts and sciences. It is fundamental to building a world where human beings can be 'reborn,' thriving and expressing themselves at their best in every discipline. Rediscover the basics of being reborn, becoming better people in a better place.",
    },
  ];

  const vision = language === "ita" ? visionita : visioneng;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={require("../images/logo_Bto0_bianco.png")}
          style={styles.image}
        />
        {vision.map((item, index) => (
          <View key={index} style={styles.container1}>
            <Text style={styles.text1}>{item.text1}</Text>
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
});

export default Vision;
