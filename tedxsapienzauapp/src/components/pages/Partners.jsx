import React from "react";
import { FlatList, Image, StyleSheet, SafeAreaView } from "react-native";
import { Card } from "react-native-elements";

const Partners = () => {
  // Sample partner logos data
  const partnerLogos = [
    { id: "1", logo: require("../images/partners23/Eni.webp") },
    { id: "2", logo: require("../images/partners23/Tim.webp") },
    { id: "3", logo: require("../images/partners23/Unicredit.webp") },
    { id: "4", logo: require("../images/partners23/Balduina1.webp") },
    { id: "6", logo: require("../images/partners23/SFClubSapienza.webp") },
    { id: "5", logo: require("../images/partners23/Copernico.webp") },
    { id: "7", logo: require("../images/partners23/MentorsNova.webp") },
    { id: "8", logo: require("../images/partners23/Thesis4u.webp") },
    { id: "9", logo: require("../images/partners23/JESAP.webp") },
    { id: "10", logo: require("../images/partners23/CNR.webp") },
    { id: "11", logo: require("../images/partners23/Enea.png") },
    { id: "12", logo: require("../images/partners23/Roma.webp") },
  ];

  // Calculate the number of columns based on screen width and desired maximum per row

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
