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
import "@fontsource-variable/bricolage-grotesque/index.css";

// Paradoxa
const Paradoxa = () => {
  const { language } = useContext(LanguageContext);

  const paradoxaita = [
    {
      text: "Dal greco παράδοξος, composto di παρα- nel sign. di «contro» e δόξα «opinione». Che va contro il modo di pensare comune. La storia dei paradossi è antica e risale alla nascita della logica. Ma, mentre i primi ad essere formulati erano più simili a giochi mentali, la modernità ne ha fatti nascere di nuovi nella realtà che ci circonda. La giustizia che crea disuguaglianza, le possibilità che creano svogliatezza, i conflitti per portare la pace. E così come gli antichi pensatori li hanno sviluppati, per stimolare la riflessione, allo stesso modo noi dobbiamo fronteggiare, non evitare, i paradossi che permeano la natura del mondo antropico per far germogliare le idee che possano migliorarlo. PARA DOXA sarà il terreno fertile per coltivarle.",
    },
  ];

  const paradoxaeng = [
    {
      text: "From the Greek παράδοξος, compound of παρα- meaning 'against' and δόξα meaning 'opinion.' Going against the  common way of thinking. The history of paradoxes is ancient and dates back to the birth of logic. However, while the first paradoxes were more like mind games, modernity has given rise to new ones within the reality that surrounds us. Justice that creates inequality, opportunities that create laziness, conflicts to bring peace. Just as ancient thinkers developed paradoxes to stimulate reflection, we too must face, not avoid, the paradoxes that permeate the nature of the human world in order to sprout ideas that can improve it. PARA DOXA will be the fertile ground to cultivate them.",
    },
  ];

  const paradoxa = language === "ita" ? paradoxaita : paradoxaeng;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={require("../images/Logo1_bianco.png")}
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
    backgroundColor: "#0b0c0e",
    padding: 15,
  },
  text: {
    marginTop: 18,
    fontSize: RFValue(18),
    color: "white",
    textAlign: "justify",
    fontFamily: "'Bricolage Grotesque Variable', sans-serif",
  },
  text1: {
    fontSize: RFValue(20),
    color: "white",
    textAlign: "center",
    fontFamily: "'Bricolage Grotesque Variable', sans-serif",
  },
  image: {
    width: 350,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default Paradoxa;
