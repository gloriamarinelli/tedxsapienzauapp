import React from "react";
import { FlatList, Image, StyleSheet, SafeAreaView } from "react-native";
import { Card } from "react-native-elements";

const Partners = () => {
  const partnerLogos = [
    { id: "1", logo: require("../images/partners23/Eni.webp") },
    { id: "2", logo: require("../images/partners23/Tim.webp") },
    { id: "3", logo: require("../images/partners23/Unicredit.webp") },
    { id: "4", logo: require("../images/partners23/Balduina1.webp") },
    { id: "5", logo: require("../images/partners23/Pioda.webp") },
    { id: "6", logo: require("../images/partners23/Enav.webp") },
    { id: "7", logo: require("../images/partners23/Deloitte.webp") },
    { id: "8", logo: require("../images/partners23/Mydiet.webp") },
    { id: "9", logo: require("../images/partners23/VAIA.webp") },
    { id: "10", logo: require("../images/partners23/EF.webp") },
    { id: "11", logo: require("../images/partners23/Copernico.webp") },
    { id: "12", logo: require("../images/partners23/CrikCrok.webp") },
    { id: "13", logo: require("../images/partners23/Sanarti.webp") },
    { id: "14", logo: require("../images/partners23/Dias.webp") },
    { id: "15", logo: require("../images/partners23/Tlon.webp") },
    { id: "16", logo: require("../images/partners23/Innocent.webp") },
    { id: "17", logo: require("../images/partners23/Redbull.webp") },
    { id: "18", logo: require("../images/partners23/RadioSapienza.png") },
    { id: "19", logo: require("../images/partners23/eCo.webp") },
    { id: "20", logo: require("../images/partners23/Collettivo.webp") },
    { id: "21", logo: require("../images/partners23/SFClubSapienza.webp") },
    { id: "22", logo: require("../images/partners23/MentorsNova.webp") },
    { id: "23", logo: require("../images/partners23/Thesis4u.webp") },
    { id: "24", logo: require("../images/partners23/JESAP.webp") },
    { id: "25", logo: require("../images/partners23/Peekaboo.webp") },
    { id: "26", logo: require("../images/partners23/WAYouth.webp") },
    { id: "27", logo: require("../images/partners23/CNR.webp") },
    { id: "28", logo: require("../images/partners23/Enea.webp") },
    { id: "29", logo: require("../images/partners23/Roma.webp") },
    { id: "30", logo: require("../images/partners23/CE.webp") },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        columnWrapperStyle={{ justifyContent: "center" }}
        data={partnerLogos}
        numColumns={3}
        keyExtractor={(item) => item.id}
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
    margin: 10,
    borderRadius: 5,
    elevation: 2,
  },
  logo: {
    width: "100%",
    height: 50,
    resizeMode: "contain",
    transform: [{ scale: 1.35 }],
  },
});

export default Partners;
