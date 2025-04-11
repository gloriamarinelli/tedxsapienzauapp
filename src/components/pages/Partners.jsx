import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Animated,
  Text,
} from "react-native";
import { Card } from "react-native-elements";
import "@fontsource-variable/bricolage-grotesque/index.css";

// Partners24
const Partners = () => {
  const partnerLogos = [
    { id: "2", logo: require("../images/partners23/Unicredit.png") },
    { id: "3", logo: require("../images/partners23/novo-nordisk.webp") },
    { id: "4", logo: require("../images/partners23/Balduina1.png") },
    { id: "5", logo: require("../images/partners23/Pioda.png") },
    { id: "5", logo: require("../images/partners23/tucano.webp") },
    { id: "6", logo: require("../images/partners23/hyper-foundry.webp") },
    { id: "5", logo: require("../images/partners23/aesperta.webp") },
    { id: "5", logo: require("../images/partners23/bonduelle.webp") },
    { id: "7", logo: require("../images/partners23/ypt.webp") },
    { id: "8", logo: require("../images/partners23/EF.png") },
    { id: "9", logo: require("../images/partners23/hxo.webp") },
    { id: "10", logo: require("../images/partners23/tfi.webp") },
    { id: "11", logo: require("../images/partners23/dl.webp") },
    { id: "12", logo: require("../images/partners23/zeta.webp") },
    { id: "12", logo: require("../images/partners23/RadioSapienza.png") },
    { id: "13", logo: require("../images/partners23/upr.webp") },
    { id: "14", logo: require("../images/partners23/technotown.png") },
    { id: "15", logo: require("../images/partners23/MICcard.webp") },
    { id: "15", logo: require("../images/partners23/nam.webp") },
    { id: "16", logo: require("../images/partners23/rfw.png") },
    { id: "17", logo: require("../images/partners23/SFClubSapienza.png") },
    { id: "18", logo: require("../images/partners23/t4.png") },
    { id: "19", logo: require("../images/partners23/jesap.png") },
    { id: "19", logo: require("../images/partners23/avis.webp") },
    { id: "19", logo: require("../images/partners23/gl.webp") },
    { id: "20", logo: require("../images/partners23/Enea.png") },
    { id: "20", logo: require("../images/partners23/ec.webp") },
    { id: "20", logo: require("../images/partners23/msg.webp") },
    { id: "21", logo: require("../images/partners23/cdp.png") },
    { id: "22", logo: require("../images/partners23/Roma.png") },
    { id: "23", logo: require("../images/partners23/CNR.png") },
    { id: "24", logo: require("../images/partners23/lazio.webp") },
    { id: "25", logo: require("../images/partners23/ep.webp") },    

  ];

  const scrollY = new Animated.Value(0);

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [50, 0],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{
          height: headerHeight,
          opacity: headerOpacity,
          overflow: "hidden",
        }}
      >
        <Text style={styles.titlePage}>Sponsors</Text>
      </Animated.View>
      <Animated.FlatList
        columnWrapperStyle={{ justifyContent: "center" }}
        data={partnerLogos}
        numColumns={2}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => (
          <Card containerStyle={styles.card2}>
            <Image source={item.logo} style={styles.logo2} />
          </Card>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0c0e",
  },
  card: {
    width: "30%",
    margin: 5,
    marginVertical: 10,
    borderRadius: 5,
    elevation: 2,
  },
  card2: {
    width: "40%",
    margin: 5,
    marginVertical: 10,
    borderRadius: 5,
    elevation: 2,
  },
  logo: {
    width: "100%",
    height: 50,
    resizeMode: "contain",
    transform: [{ scale: 1.35 }],
  },
  logo2: {
    width: "100%",
    height: 60,
    resizeMode: "contain",
  },
  titlePage: {
    paddingLeft: 20,
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "'Bricolage Grotesque Variable', sans-serif",
    alignSelf: "center",
    marginTop: "10px",
  },
});

export default Partners;
