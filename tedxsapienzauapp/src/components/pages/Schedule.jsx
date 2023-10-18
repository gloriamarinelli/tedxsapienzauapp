import React, { useState, useContext } from "react";
import { LanguageContext } from "../../App.js";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
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
  ];

  const scheduleEng = [
    {
      time: "08:45",
      titolo: "Credits",
    },
  ];

  const schedule = language === "ita" ? scheduleIta : scheduleEng;

  const renderItem = ({ item }) => (
    <View key={item.time} style={{ flexDirection: "row", marginBottom: 10 }}>
      <ImageBackground source={PlaceholderImage} style={styles.image}>
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
      keyExtractor={(item) => item.time}
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
  image: {
    width: 130,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    color: "black",
    flexDirection: "row",
    float: "left",
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
    fontSize: 16,
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
