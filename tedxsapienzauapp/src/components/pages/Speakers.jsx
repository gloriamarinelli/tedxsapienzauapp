import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
  Pressable,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const PlaceholderImage = require("../images/Red-Circle.png");

const Speaker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentDescription, setCurrentDescription] = useState(
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
  );

  const DescriptionModal = ({ name, image, description }) => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "80%",
              height: "60%",
              backgroundColor: "#fff",
              borderRadius: 10,
              padding: 20,
            }}
          >
            <Text style={{ fontSize: 16, color: "black" }}>{description}</Text>
          </View>
        </View>
      </Modal>
    );
  };

  const SpeakerCard = ({ name, image, description, time, circlePosition }) => {
    return (
      <View
        style={{
          width: "100%",
          height: 250,
          backgroundColor: "#000",
          position: "relative",
          marginBottom: 20,
        }}
      >
        <Image
          source={image}
          style={{
            position: "absolute",
            maxHeight: 250,
            width: "100%",
            borderRadius: 10,
          }}
        />
        <LinearGradient
          style={{ width: "100%", height: "100%", position: "absolute" }}
          colors={["transparent", "rgba(0, 0, 0, 0.65)"]}
          locations={[0, 0.8]}
        >
          <Pressable
            style={{ position: "absolute", bottom: 0, left: 0 }}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.nameText}>
              {name}
              {"  "} <Feather name="info" size={24} color="white" />
            </Text>
          </Pressable>
          <ImageBackground
            source={PlaceholderImage}
            style={{
              position: "absolute",
              right: circlePosition === "left" ? null : 5,
              left: circlePosition === "left" ? 5 : null,
              top: 5,
              width: 80,
              aspectRatio: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
              {time}
            </Text>
          </ImageBackground>
        </LinearGradient>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <DescriptionModal description={currentDescription} />
      <ScrollView>
        {/**
         * FIRTS BLOCK
         */}
        <SpeakerCard
          name={"Damiano Tullio"}
          image={require("../images/speakers/damiano_tullio.jpg")}
          time={"10:15"}
        />
        <SpeakerCard
          name={"Ilaria Lucrezia Rossi"}
          image={require("../images/speakers/ilaria_rossi.jpg")}
          time={"10:30"}
          circlePosition={"left"}
        />
        <SpeakerCard
          name={"Edward von Freymann"}
          image={require("../images/speakers/von_freymann.jpg")}
          time={"11:00"}
          circlePosition={"right"}
        />
        <SpeakerCard
          name={"Riccardo Basilone"}
          image={require("../images/speakers/riccardo_basilone.jpg")}
          time={"11:15"}
        />
        {/**
         * SECOND BLOCK
         */}
        <SpeakerCard
          name={"Gloria Schito"}
          image={require("../images/speakers/gloria_schito.jpg")}
          time={"12:00"}
        />
        <SpeakerCard
          name={"Matteo Cervellini"}
          image={require("../images/speakers/matteo_cervellini.jpg")}
          time={"12:15"}
        />
        <SpeakerCard
          name={"Ana Estrela"}
          image={require("../images/speakers/ana_estrela.jpg")}
          time={"12:30"}
        />
        <SpeakerCard
          name={"Nina Lambarelli"}
          image={require("../images/speakers/nina.jpg")}
          time={"12:45"}
        />
        {/**
         * THIRD BLOCK
         */}
        <SpeakerCard
          name={"Marcello Ienca"}
          image={require("../images/speakers/rose_villain.jpg")}
          time={"15:30"}
        />
        <SpeakerCard
          name={"Rose Villain"}
          image={require("../images/speakers/rose_villain.jpg")}
          time={"15:45"}
        />
        <SpeakerCard
          name={"Silvano Onofri"}
          image={require("../images/speakers/nakita.jpg")}
          time={"16:00"}
        />
        <SpeakerCard
          name={"Nakita Aboya"}
          image={require("../images/speakers/nakita.jpg")}
          time={"16:15"}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0c0e",
  },
  nameText: {
    fontSize: RFValue(20),
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    position: "absolute",
    bottom: 5,
    left: 10,
  },
  image: {
    width: windowWidth,
    height: 200,
    resizeMode: "contain",
  },
});

export default Speaker;
