import React from "react";
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
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={require("../images/logo_Bto0_bianco.png")}
          style={styles.image}
        />

        <View style={styles.container1}>
          <Text style={styles.text1}>
            ❝ L'uomo e il mondo che lo circonda non sono binari separati, ma
            rotaie che si muovono insieme, hanno bisogno l'uno dell'altro. ❞
          </Text>
          <Text style={styles.text}>
            Il nostro obiettivo è azzerare, ricercare un punto zero: le
            disuguaglianze, i conflitti, i cattivi stili di vita, le emissioni e
            i rifiuti. Ridurre quei fattori inquinanti che rallentano la
            crescita della nostra società, peggiorando la qualità della nostra
            vita. Riconsiderare noi stessi ed il nostro modo di confrontarci.
            Imparare ed interagire con la società contemporanea, con le arti e
            le scienze. È fondamentale per costruire un mondo dove l'essere
            umano possa 'rinascere', prosperando ed esprimendosi al meglio in
            ogni disciplina. Riscoprire le basi per rinascere, diventare persone
            migliori in un luogo migliore.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingLeft: 10,
    paddingRight: 10,
  },
  container1: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    paddingTop: 15,
    fontSize: RFValue(18),
    color: "white",
    textAlign: "justify",
  },
  text1: {
    paddingTop: 15,
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
