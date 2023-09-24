import React from "react";
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { Card } from "react-native-elements";

const Partners = () => {
  // Sample partner logos data
  const partnerLogos = [
    { id: "1", logo: require("../images/partners23/Tim.webp"), title: "Tim" },
    { id: "2", logo: require("../images/partners23/CNR.webp") },
    { id: "3", logo: require("../images/partners23/Eni.webp") },
    { id: "4", logo: require("../images/partners23/Unicredit.webp") },
    { id: "5", logo: require("../images/partners23/Roma.webp") },
    { id: "6", logo: require("../images/partners23/Thesis4u.webp") },
  ];

  // Calculate the number of columns based on screen width and desired maximum per row

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        columnWrapperStyle={{ justifyContent: "center" }}
        data={partnerLogos}
        numColumns={2}
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
    backgroundColor: "#000",
  },
  card: {
    width: "45%",
    margin: 10,
    borderRadius: 4,
    elevation: 2,
  },
  logo: {
    width: "100%",
    height: 100, // Adjust the height as needed
    resizeMode: "contain",
  },
});

export default Partners;
