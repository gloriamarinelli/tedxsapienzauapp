import React from "react";
import { FlatList, Image, StyleSheet, SafeAreaView, Animated, Text } from "react-native";
import { Card } from "react-native-elements";
import '@fontsource-variable/bricolage-grotesque/index.css';

// Partners
const Partners = () => {
  const partnerLogos = [
    { id: "2", logo: require("../images/partners23/Tim.webp") },
    { id: "3", logo: require("../images/partners23/Unicredit.webp") },
    { id: "4", logo: require("../images/partners23/Balduina1.webp") },
    { id: "5", logo: require("../images/partners23/Pioda.webp") },
    { id: "6", logo: require("../images/partners23/Enav.webp") },
    { id: "7", logo: require("../images/partners23/CBCR.webp") },
    { id: "8", logo: require("../images/partners23/VAIA.webp") },
    { id: "9", logo: require("../images/partners23/Deloitte.webp") },
    { id: "10", logo: require("../images/partners23/EF.webp") },
    { id: "11", logo: require("../images/partners23/MyDiet.webp") },
    { id: "12", logo: require("../images/partners23/Tlon.webp") },
    { id: "13", logo: require("../images/partners23/Copernico.webp") },
    { id: "14", logo: require("../images/partners23/Dias.webp") },
    { id: "15", logo: require("../images/partners23/CrikCrok.webp") },
    { id: "16", logo: require("../images/partners23/Sanarti.webp") },
    { id: "17", logo: require("../images/partners23/Innocent.webp") },
    { id: "18", logo: require("../images/partners23/Redbull.webp") },
    { id: "19", logo: require("../images/partners23/Marziali.webp") },
    { id: "20", logo: require("../images/partners23/RadioSapienza.png") },
    { id: "21", logo: require("../images/partners23/eCo.webp") },
    { id: "22", logo: require("../images/partners23/RadioKaos.webp") },
    { id: "23", logo: require("../images/partners23/Collettivo.webp") },
    { id: "24", logo: require("../images/partners23/Thesis4u.webp") },
    { id: "25", logo: require("../images/partners23/MentorsNova.webp") },
    { id: "26", logo: require("../images/partners23/Peekaboo.webp") },
    { id: "27", logo: require("../images/partners23/SFClubSapienza.webp") },
    { id: "28", logo: require("../images/partners23/JESAP.webp") },
    { id: "29", logo: require("../images/partners23/WAYouth.webp") },
    { id: "30", logo: require("../images/partners23/CNR.webp") },
    { id: "31", logo: require("../images/partners23/Enea.webp") },
    { id: "32", logo: require("../images/partners23/Roma.webp") },
    { id: "33", logo: require("../images/partners23/CE.webp") },
    { id: "34", logo: require("../images/partners23/RegioneLazio.webp") },
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
      <Animated.View style={{ height: headerHeight, opacity: headerOpacity, overflow: "hidden" }}>
        <Text style={styles.titlePage}>Partners</Text>
      </Animated.View>
      <Animated.FlatList
        columnWrapperStyle={{ justifyContent: "center" }}
        data={partnerLogos}
        numColumns={3}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => (
          <Card containerStyle={styles.card}>
            <Image source={item.logo} style={styles.logo} />
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
  logo: {
    width: "100%",
    height: 50,
    resizeMode: "contain",
    transform: [{ scale: 1.35 }],
  },
  titlePage: {
    paddingLeft: 20,
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "'Bricolage Grotesque Variable', sans-serif",
  },
});

export default Partners;
