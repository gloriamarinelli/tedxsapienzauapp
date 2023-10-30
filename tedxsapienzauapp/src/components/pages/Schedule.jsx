import React, { useState, useContext } from "react";
import { LanguageContext } from "../../App.js";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  ScrollView,
} from "react-native";
import { Card } from "react-native-elements";
const PlaceholderImage = require("../images/Red-Circle.png");

const Schedule = () => {
  const { language } = useContext(LanguageContext);
  const [selectedEventIndex, setSelectedEventIndex] = useState(null);

  const scheduleIta = [
    {
      time: "08:45",
      titolo: "Accrediti",
      text: "",
    },
    {
      time: "09:45",
      titolo: "Presentazione Iniziale",
    },
    {
      time: "10:00",
      titolo: "Saluti istituzionali",
      text: "Prof. Massimo Ralli, Delegato per il TEDxSapienzaU",
    },
    {
      time: "10:15",
      titolo: "Sessione I",
      text: "Damiano Tullio, Ilaria Lucrezia Rossi, Edward von Freymann, Riccardo Basilone",
    },
    {
      time: "11:30",
      titolo: "I break",
    },
    {
      time: "12:00",
      titolo: "Sessione II",
      text: "GLoria Schito, Matteo Cervellini, Ana Estrela, Nina Lambarelli",
    },
    {
      time: "13:00",
      titolo: "Lunch break presso il Village TEDxSapienzaU",
    },
    {
      time: "15:00",
      titolo: "TED GLOBAL",
    },
    {
      time: "15:15",
      titolo: "Interventi istituzionali",
      text: "Antonella Polimeni, Magnifica Rettrice della Sapienza Università di Roma ",
    },
    {
      time: "15:30",
      titolo: "Sessione III",
      text: "Marcello Ienca, Rose Villain, Silvano Onofri, Nakita Aboya",
    },
    {
      time: "16:30",
      titolo: "Ringraziamenti da parte dei volontari e del team TEDxSapienzaU",
    },
    {
      time: "16:45",
      titolo: "Intrattenimento Musicale - MUSA Sapienza",
    },
    {
      time: "17:00",
      titolo: "Saluti finali",
    },
  ];

  const scheduleEng = [
    {
      time: "08:45",
      titolo: "Credits",
    },
    {
      time: "09:45",
      titolo: "Initial Presentation",
    },
    {
      time: "10:00",
      titolo: "Institutional greetings",
      text: "Prof. Massimo Ralli, TEDxSapienzaU Delegate",
    },
    {
      time: "10:15",
      titolo: "Session I",
      text: "Damiano Tullio, Ilaria Lucrezia Rossi, Edward von Freymann, Riccardo Basilone",
    },
    {
      time: "11:30",
      titolo: "I break",
    },
    {
      time: "12:00",
      titolo: "Session II",
      text: "GLoria Schito, Matteo Cervellini, Ana Estrela, Nina Lambarelli",
    },
    {
      time: "13:00",
      titolo: "Lunch break at the Village TEDxSapienzaU",
    },
    {
      time: "15:00",
      titolo: "TED GLOBAL",
    },
    {
      time: "15:15",
      titolo: "institutional Interventions",
      text: "Antonella Polimeni, Rector of Sapienza University of Rome ",
    },
    {
      time: "15:30",
      titolo: "Session III",
      text: "Marcello Ienca, Rose Villain, Silvano Onofri, Nakita Aboya",
    },
    {
      time: "16:30",
      titolo: "Thanks from the volunteers and TEDxSapienzaU team",
    },
    {
      time: "16:45",
      titolo: "Musical Entertainment - MUSA Sapienza",
    },
    {
      time: "17:00",
      titolo: "Final greetings",
    },
  ];

  const schedule = language === "ita" ? scheduleIta : scheduleEng;

  const renderItem = ({ item }) => (
    <View key={item.time} style={{ flexDirection: "row", marginBottom: 10 }}>
      <ImageBackground source={PlaceholderImage} style={styles.imageBackground}>
        <Text style={styles.text}>{item.time}</Text>
      </ImageBackground>
      <Card containerStyle={styles.card}>
        <View>
          <Text style={styles.text1}>{item.titolo}</Text>
          <Text style={styles.text2}>{item.text}</Text>
        </View>
      </Card>
    </View>
  );

  return (
      <FlatList
        data={schedule}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.time}-${index}`}
        style={styles.page}
      />
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#0b0c0e",
    display: "flex",
    padding: 10,
  },
  card: {
    backgroundColor: "#0b0c0e",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    borderRadius: 10,
    borderColor: "#181818",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginLeft: 10,
  },
  imageBackground: {
    width: 130,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    marginRight: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  text2: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
});

export default Schedule;
