import React, { useState, useContext } from "react";
import { LanguageContext } from '../../App.js';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "react-native-elements";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const PlaceholderImage = require("../images/Red-Circle.png");

const Schedule = () => {
  const { language } = useContext(LanguageContext);
  const [selectedEventIndex, setSelectedEventIndex] = useState(null);
  const [evento1]=language === 'ita' ? useState("Accrediti                         "): useState("Credits                           ");
  const [evento2Up]=language === 'ita' ?useState("             Presentazione"):useState("                Initial");
  const [evento2Down]=language === 'ita' ?useState("             Iniziale"):useState("                Presentation");
  const [evento3Up]=language === 'ita' ?useState("Saluti                             "):useState("Institutional                  ");
  const [evento3Down]=language === 'ita' ?useState("istituzionali      "):useState("greetings      ");
  const [evento4]=language === 'ita' ?useState("Sessione I                     "):useState("Session  I                     ");
  const [evento6]=language === 'ita' ?useState("Sessione II                    "):useState("Session II                     ");
  const [evento7]=language === 'ita' ?useState("presso il  Village"):useState("at the Village");
  const [evento9Up]=language === 'ita' ?useState("Interventi                     "):useState("Institutional                 ");
  const [evento9Down]=language === 'ita' ?useState("istituzionali"):useState("interventions");
  const [evento10]=language === 'ita' ?useState("Sessione III                  "):useState("Session  III                  ");
  const [evento11Part1]=language === 'ita' ?useState("Ringraziamenti          "):useState("Thanks             ");
  const [evento11Part2]=language === 'ita' ?useState("da parte dei volontari e "):useState("from the volunteers and   ");
  const [evento11Part3]=language === 'ita' ?useState("del team"):useState("the TEDxSapienzaU    ");
  const [evento11Part4]=language === 'ita' ?useState("TEDxSapienzaU"):useState("team");
  const [evento12Up]=language === 'ita' ?useState("         Intrattenimento"):useState("           Musical");
  const [evento12Down]=language === 'ita' ?useState("         Musicale"):useState("           Entertainment");
  const [evento12More]=language === 'ita' ?useState("          MUSA Sapienza"):useState("            MUSA Sapienza");
  const [evento13]=language === 'ita' ?useState("Saluti finali                  "):useState("Final greetings          ");


  




  return (
    <ScrollView style={styles.page}> 
      {/* evento 1 */}
      <Card containerStyle={styles.card}>
        <View style={styles.card1}>
          <View containerStyle={styles.imageContainer}>
            <ImageBackground source={PlaceholderImage} style={styles.image}>
              <Text style={styles.text}>08:45</Text>
            </ImageBackground>
          </View>
          <View containerStyle={styles.container}>
            <Text style={styles.text1}>{evento1}</Text>
          </View>
        </View>
      </Card>
      {/* evento 2 */}
      <Card containerStyle={styles.card}>
        <View style={styles.card1}>
          <View containerStyle={styles.container2}>
            <Text style={styles.text1}>{evento2Up}</Text>
            <Text style={styles.text1}>{evento2Down}</Text>
          </View>
          <View containerStyle={styles.imageContainer2}>
            <ImageBackground source={PlaceholderImage} style={styles.image}>
              <Text style={styles.text}>09:45</Text>
            </ImageBackground>
          </View>
        </View>
      </Card>
      {/* evento 3 */}
      <Card containerStyle={styles.card}>
        <View style={styles.card1}>
          <View containerStyle={styles.imageContainer}>
            <ImageBackground source={PlaceholderImage} style={styles.image}>
              <Text style={styles.text}>10:00</Text>
            </ImageBackground>
          </View>
          <View containerStyle={styles.container}>
            <Text style={styles.text1}>{evento3Up}</Text>
            <Text style={styles.text1}>{evento3Down}</Text>
            <Text style={styles.text2}>Prof. Massimo Ralli      </Text>
          </View>
        </View>
      </Card>
      {/* evento 4 */}
      <Card containerStyle={styles.card}>
        <View style={styles.card1}>
          <View containerStyle={styles.container2}>
            <Text style={styles.text1}>{evento4}</Text>
            <Text style={styles.text2}>Damiano Tullio</Text>
            <Text style={styles.text2}>Ilaria Lucrezia Rossi</Text>
            <Text style={styles.text2}>Edward von Freymann</Text>
            <Text style={styles.text2}>Riccardo Basilone</Text>
          </View>
          <View containerStyle={styles.imageContainer2}>
            <ImageBackground source={PlaceholderImage} style={styles.image}>
              <Text style={styles.text}>10:15</Text>
            </ImageBackground>
          </View>
        </View>
      </Card>
      {/* evento 5 */}
      <Card containerStyle={styles.card}>
        <View style={styles.card1}>
          <View containerStyle={styles.imageContainer}>
            <ImageBackground source={PlaceholderImage} style={styles.image}>
              <Text style={styles.text}>11:30</Text>
            </ImageBackground>
          </View>
          <View containerStyle={styles.container}>
            <Text style={styles.text1}>I break                             </Text>
          </View>
        </View>
      </Card>
      {/* evento 6 */}
      <Card containerStyle={styles.card}>
        <View style={styles.card1}>
          <View containerStyle={styles.container2}>
            <Text style={styles.text1}>{evento6}</Text>
            <Text style={styles.text2}>Gloria Schito</Text>
            <Text style={styles.text2}>Matteo Cervellini</Text>
            <Text style={styles.text2}>Ana Estrela</Text>
            <Text style={styles.text2}>Nina Lambarelli</Text>
          </View>
          <View containerStyle={styles.imageContainer2}>
            <ImageBackground source={PlaceholderImage} style={styles.image}>
              <Text style={styles.text}>12:00</Text>
            </ImageBackground>
          </View>
        </View>
      </Card>
            {/* evento 7 */}
            <Card containerStyle={styles.card}>
        <View style={styles.card1}>
          <View containerStyle={styles.imageContainer}>
            <ImageBackground source={PlaceholderImage} style={styles.image}>
              <Text style={styles.text}>13:00</Text>
            </ImageBackground>
          </View>
          <View containerStyle={styles.container}>
            <Text style={styles.text1}>Lunch break                 </Text>
            <Text style={styles.text2}>{evento7}</Text>
            <Text style={styles.text1}>TEDxSapienzaU</Text>
          </View>
        </View>
      </Card>
      {/* evento 8 */}
      <Card containerStyle={styles.card}>
        <View style={styles.card1}>
          <View containerStyle={styles.container2}>
            <Text style={styles.text1}>               TED GLOBAL</Text>
          </View>
          <View containerStyle={styles.imageContainer2}>
            <ImageBackground source={PlaceholderImage} style={styles.image}>
              <Text style={styles.text}>15:00</Text>
            </ImageBackground>
          </View>
        </View>
      </Card>
      {/* evento 9 */}
      <Card containerStyle={styles.card}>
        <View style={styles.card1}>
          <View containerStyle={styles.imageContainer}>
            <ImageBackground source={PlaceholderImage} style={styles.image}>
              <Text style={styles.text}>15:15</Text>
            </ImageBackground>
          </View>
          <View containerStyle={styles.container}>
            <Text style={styles.text1}>{evento9Up}</Text>
            <Text style={styles.text1}>{evento9Down}</Text>
            <Text style={styles.text2}>Antonella Polimeni</Text>
          </View>
        </View>
      </Card>
      {/* evento 10 */}
      <Card containerStyle={styles.card}>
        <View style={styles.card1}>
          <View containerStyle={styles.container2}>
            <Text style={styles.text1}>{evento10}</Text>
            <Text style={styles.text2}>Marcello Ienca</Text>
            <Text style={styles.text2}>Rose Villain</Text>
            <Text style={styles.text2}>Silvano Onofri</Text>
            <Text style={styles.text2}>Nakita Aboya</Text>
          </View>
          <View containerStyle={styles.imageContainer2}>
            <ImageBackground source={PlaceholderImage} style={styles.image}>
              <Text style={styles.text}>15:30</Text>
            </ImageBackground>
          </View>
        </View>
      </Card>
      {/* evento 11 */}
      <Card containerStyle={styles.card}>
        <View style={styles.card1}>
          <View containerStyle={styles.imageContainer}>
            <ImageBackground source={PlaceholderImage} style={styles.image}>
              <Text style={styles.text}>16:30</Text>
            </ImageBackground>
          </View>
          <View containerStyle={styles.container}>
          <Text style={styles.text1}>{evento11Part1}</Text>
          <Text style={styles.text2}>{evento11Part2}</Text>
          <Text style={styles.text1}>{evento11Part3}</Text>
          <Text style={styles.text1}>{evento11Part4}</Text>
          </View>
        </View>
      </Card>
      {/* evento 12 */}
      <Card containerStyle={styles.card}>
        <View style={styles.card1}>
          <View containerStyle={styles.container2}>
            <Text style={styles.text1}>{evento12Up}</Text>
            <Text style={styles.text1}>{evento12Down}</Text>
            <Text style={styles.text2}>{evento12More}</Text>
          </View>
          <View containerStyle={styles.imageContainer2}>
            <ImageBackground source={PlaceholderImage} style={styles.image}>
              <Text style={styles.text}>16:45</Text>
            </ImageBackground>
          </View>
        </View>
      </Card>
      {/* evento 13 */}
      <Card containerStyle={styles.card}>
        <View style={styles.card1}>
          <View containerStyle={styles.imageContainer}>
            <ImageBackground source={PlaceholderImage} style={styles.image}>
              <Text style={styles.text}>17:00</Text>
            </ImageBackground>
          </View>
          <View containerStyle={styles.container}>
            <Text style={styles.text1}>{evento13}</Text>
          </View>
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#0b0c0e",
    display: "flex",
  },
  card: {
    color: "black",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "row",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    borderRadius: 10,
    borderColor: "#181818",
    justifyContent: "center",
    alignItems: "center",
  },
  card1: {
    color: "black",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "row",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    borderRadius: 10,
    borderColor: " 	#181818",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 36,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
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
  },
  text1: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    color: "white",
    flexDirection: "row",
    padding: "10px",
  },
  text2: {
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: 0.5,
    color: "white",
    flexDirection: "row",
    padding: "10px",
  },
  text3: {
    fontSize: 23,
    lineHeight: 21,
    color: "white",
    flexDirection: "row",
    padding: "10px",
    fontWeight: "bold",
  },
  text4: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    color: "white",
    flexDirection: "row",
    padding: "10px",
  },
  imageContainer: {
    width: 130,
    height: 130,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    color: "black",
    float: "left",
    flex: 1,
  },
  imageContainer2: {
    width: 130,
    height: 130,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    color: "black",
    flex: 1,
  },
  container: {
    flex: 2,
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    color: "black",
    justifyContent: "flex-end",
  },
  container2: {
    flex: 2,
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    color: "black",
    justifyContent: "flex-start",
  },
});

export default Schedule;
