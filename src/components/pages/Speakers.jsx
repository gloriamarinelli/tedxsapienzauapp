import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../App.js";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Animated,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import { Card } from "react-native-elements";
import { speaker24 } from "../pages/speakerDetails.jsx";
import { useNavigation } from "@react-navigation/native";
import "@fontsource-variable/bricolage-grotesque/index.css";

// Speaker
const Speaker = () => {
  const navigation = useNavigation();

  const { language } = useContext(LanguageContext);
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100], // Adjust as needed
    outputRange: [50, 0], // Change height (e.g., 50 to 0)
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          height: headerHeight,
          opacity: headerOpacity,
          overflow: "hidden",
        }}
      >
        <Text style={styles.titlePage}>Lineup</Text>
      </Animated.View>

      <Animated.FlatList
        data={speaker24}
        numColumns={1}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              if (item.id !== "5" && item.id !== "9") {
                navigation.navigate("descriptionSpeech", {
                  speakerDes: item.name,
                  descriptionDes:
                    language === "ita" ? item.bioIta : item.bioEng,
                  imageDes: item.image,
                  speechTitleDes: language === "ita" ? item.speechTitleIta : item.speechTitleEng,
                  speechDes:
                    language === "ita" ? item.speechIta : item.speechEng,
                  resumeDes:
                    language === "ita" ? item.resumeIta : item.resumeEng,
                });
              }
            }}
            disabled={item.id === "5" || item.id === "9"}
          >
            <Card containerStyle={styles.card}>
              <ImageBackground source={item.image} style={styles.image} />
              <LinearGradient
                style={styles.gradient}
                colors={["transparent", "#0b0c0e"]}
                locations={[0.6, 0.8]}
              />
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>{item.name}</Text>
                <View style={styles.timeContainer}>
                  <Text style={styles.timeText}>{item.time}</Text>
                </View>
              </View>
            </Card>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0c0e",
    paddingTop: 0,
    paddingBottom: 0,
    justifyContent: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "#0b0c0e",
    borderColor: "#0b0c0e",
    height: 200,
    padding: 0,
    margin: 0,
    borderRadius: 15,
    marginTop: 20,
    overflow: "hidden",
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    transform: [{ scale: 1 }],
  },
  gradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    fontFamily: "'Bricolage Grotesque Variable', sans-serif",
  },
  nameText: {
    fontSize: RFValue(22),
    color: "white",
    fontWeight: "bold",
    fontFamily: "'Bricolage Grotesque Variable', sans-serif",
  },
  timeContainer: {
    alignItems: "flex-end",
  },
  timeBackground: {
    width: 80,
    aspectRatio: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  timeText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "'Bricolage Grotesque Variable', sans-serif",
  },
  titlePage: {
    paddingLeft: "20px",
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "'Bricolage Grotesque Variable', sans-serif",
    alignSelf: "center",
    marginTop: "10px",
  },
});

export default Speaker;
