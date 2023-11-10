import React, { useContext } from "react";
import { LanguageContext } from "../../App.js";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";
import { Card } from "react-native-elements";

const windowWidth = Dimensions.get("window").width;

const Map = () => {
  const { language } = useContext(LanguageContext);

  const mapITA = [
    {
      text: "Conferenza TEDxSapienzaU",
      text2: "Village",
      foto: require("../images/village.png"),
    },
  ];

  const mapENG = [
    {
      text: "TEDxSapienzaU Conference",
      text2: "Village",
      foto: require("../images/village.png"),
    },
  ];

  const map = language === "ita" ? mapITA : mapENG;
  return (
    <>
      <SafeAreaView style={styles.container}>
        {map.map((item, index) => (
          <ScrollView key={index}>
            <Text style={styles.text}>{item.text}</Text>

            <Text style={styles.text1}>
              Aula Magna CU001,{"\n"}
              Palazzo del Rettorato{"\n"}
              Sapienza Università di Roma{"\n"}
              Piazzale Aldo Moro, 5, 00185 Roma RM{" "}
            </Text>
            <View style={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d882.543031662757!2d12.515135702684388!3d41.90316879119429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f619da4adeb5d%3A0x8558a2dbf6f699eb!2sPalazzo%20del%20Rettorato!5e1!3m2!1sit!2sit!4v1699649016379!5m2!1sit!2sit"
                width={windowWidth - 100}
                height={200}
                style={styles.map}
                allowFullScreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </View>
            <Text style={styles.text2}>{item.text2}</Text>
            <Text style={styles.text1}>
              Città universitaria{"\n"}
              Viale Piero Gobetti, 00185 Roma RM
            </Text>
          </ScrollView>
        ))}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0c0e",
    padding: 15,
  },
  text: {
    fontSize: RFValue(23),
    color: "#EB0028",
    textAlign: "justify",
    fontWeight: "bold",
  },
  text2: {
    fontSize: RFValue(23),
    color: "#EB0028",
    textAlign: "justify",
    fontWeight: "bold",
    marginTop: 15,
  },
  text1: {
    fontSize: RFValue(18),
    color: "white",
    textAlign: "justify",
    marginTop: 15,
    marginBottom: 15,
  },
  mapContainer: {
    height: 300,
    width: windowWidth - 30,
    borderWidth: 0,
    borderRadius: 5,
    overflow: "hidden",
  },
  map: {
    height: 300,
    width: 400,
  },
  image: {
    height: 500,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default Map;
