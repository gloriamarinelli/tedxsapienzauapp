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
import { SocialIcon } from "react-native-elements";
const windowWidth = Dimensions.get("window").width;
const SocialWidth = windowWidth / 6 - 8;
const linkInstagram = "https://www.instagram.com/tedxsapienzau/";
const linkTiktok = "https://www.tiktok.com/@tedxsapienzau?_t=8zonnmkhzjc&_r=1";
const linkLinkedin = "https://www.linkedin.com/company/tedxsapienzau/";
const linkFacebook = "https://www.facebook.com/tedxsapienzau/";
const linkWebsite = "https://www.tedxsapienzau.com/";
const linkYoutube =
  "https://www.youtube.com/playlist?list=PL4-t_gJBexTAtUGEpHCVgcV0Zwt8RyYG6";
const logoWeb = require("../images/icons/web.png");
const logoYoutube = require("../images/icons/yt.png");
const logoFacebook = require("../images/icons/fb.png");
const logoInsta = require("../images/icons/ig.png");
const logoLinkedin = require("../images/icons/li.png");
const logoTiktok = require("../images/icons/tik.png");

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

  const OpenURLButton = ({ url, children, boh }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
    return (
      <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
        <Image source={boh} style={styles.socialLogo} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.social}>
          <OpenURLButton url={linkWebsite} boh={logoWeb}></OpenURLButton>
          <OpenURLButton url={linkInstagram} boh={logoInsta}>
            {" "}
          </OpenURLButton>
          <OpenURLButton url={linkTiktok} boh={logoTiktok}></OpenURLButton>
          <OpenURLButton url={linkFacebook} boh={logoFacebook}></OpenURLButton>
          <OpenURLButton url={linkLinkedin} boh={logoLinkedin}></OpenURLButton>
          <OpenURLButton url={linkYoutube} boh={logoYoutube}></OpenURLButton>
        </View>
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
    width: 40,
    height: 40,
  },
});

export default Vision;
