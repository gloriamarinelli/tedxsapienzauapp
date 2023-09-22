import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground, Pressable,Dimensions} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const PlaceholderImage = require('../images/Red-Circle.png'); //anche questo provvisorio

const Schedule = () => {
      return (
        <View style={styles.container}>
             <View style={styles.eventContainer}>
                <ImageBackground source={PlaceholderImage} style={styles.image}>
                    <Text style={styles.text}>9</Text>
                </ImageBackground>
                <Text style={styles.text1}>testo testo testo</Text>
             </View>
             <View style={styles.eventContainer}>
                <Text style={styles.text1}>testo testo testo</Text>
                <ImageBackground source={PlaceholderImage} style={styles.image}>
                    <Text style={styles.text}>9</Text>
                </ImageBackground>
             </View>
        </View>
      );
    };

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            position: 'relative',
          },
          eventContainer: {
            display: 'flex',
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            position: 'relative',
          },
          
          image: {
            display: 'flex',
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
          },
          text: {
            fontSize: 36,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.5,
            color: 'white',
            fontFamily: 'Helvetica',
            bottom: 300,
            position: 'absolute',
          },
          text1: {
            fontSize: 36,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.5,
            color: 'white',
            fontFamily: 'Helvetica',
            bottom: 270,
            position: 'absolute',
          },
          text2: {
            fontSize: 30,
            lineHeight: 21,
            letterSpacing: 0.5,
            color: 'white',
            fontFamily: 'Helvetica',
            bottom: 215,
            position: 'absolute',
          },
          image: {
            width: 200,
            height: 200,
            position: 'absolute',
          },
    });

export default Schedule;