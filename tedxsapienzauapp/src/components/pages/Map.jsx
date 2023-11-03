import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get("window").width;

const Map = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23752.480093043745!2d12.473118594711794!3d41.91306862757848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258f5b0fe7d911%3A0xed5342b156dcfd2b!2sSapienza%20University%20of%20Rome!5e0!3m2!1sen!2snl!4v1699010054930!5m2!1sen!2snl"
            width={windowWidth - 100}
            height={300}
            style={styles.map}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </View>
        <Text style={styles.text}>
          Aula Magna,{"\n"}
          Palazzo del Rettorato{"\n"}
          Sapienza Università di Roma{"\n"}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0c0e",
    padding: 15,
  },
  text: {
    fontSize: RFValue(18),
    color: "white",
    textAlign: "justify",
    marginTop: 15,
  },
  mapContainer: {
    height: 300,
    width: windowWidth - 30,
    borderWidth: 0,
    borderRadius: 5,
    overflow: "hidden",
  },
  map: {
    height: 400,
    width: 500,
  },
});

export default Map;
