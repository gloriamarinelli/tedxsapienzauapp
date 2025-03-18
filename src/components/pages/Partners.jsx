import React from "react";
import { FlatList, Image, StyleSheet,ImageBackground, SafeAreaView, Animated, Text } from "react-native";
import { Card } from "react-native-elements";
import '@fontsource-variable/bricolage-grotesque/index.css';

// Partners
const Partners = () => {
  const partnerLogos = [
    { id: "2", logo: require("../images/partners23/Unicredit.webp") },
    { id: "3", logo: require("../images/partners23/novo-nordisk.webp") },
    { id: "4", logo: require("../images/partners23/Balduina1.webp") },
    { id: "5", logo: require("../images/partners23/hyper-foundry.webp") },
    { id: "6", logo: require("../images/partners23/EF.webp") },
    { id: "7", logo: require("../images/partners23/ypt.webp") },
    { id: "8", logo: require("../images/partners23/rfw.webp") },
    { id: "9", logo: require("../images/partners23/SFClubSapienza.webp") },
    { id: "10", logo: require("../images/partners23/Enea.webp") },
    { id: "11", logo: require("../images/partners23/cdp.webp") },
    { id: "12", logo: require("../images/partners23/Roma.webp") },
    { id: "13", logo: require("../images/partners23/CNR.webp") },
    { id: "14", logo: require("../images/partners23/technotown.webp") },
    { id: "15", logo: require("../images/partners23/MICcard.webp") },
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
        numColumns={2}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => (
          <Card containerStyle={styles.card2}>
            <ImageBackground source={item.logo} style={styles.logo2} />
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
    height: "50%",
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
    transform: [{ scale: 1.10 }],
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
