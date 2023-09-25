import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground,Image, Pressable,Dimensions} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const PlaceholderImage = require('../images/Red-Circle.png'); 
//anche questo provvisorio

const Schedule = () => {
      return (
        <View style={styles.container}>
             <View style={styles.eventContainer2}>
                <ImageBackground source={PlaceholderImage} style={styles.image}>
                    <Text style={styles.text}>9</Text>
                </ImageBackground>
                <Text style={styles.text1}>testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo</Text>
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
            flexWrap: 'wrap',
            flexDirection: 'column',
          },
          eventContainer: {
            display: 'flex',
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            objectFit: 'scale-down',
            flex: 1,
            resizeMode: 'contain',
            width: '100%',
            paddingLeft: 200,
          },
          eventContainer2: {
            display: 'flex',
            backgroundColor: "black",
            justifyContent: "left",
            alignItems: "left",
            objectFit: 'scale-down',
            flex: 1,
            resizeMode: 'contain',
            width: '100%',
          },
          
          image: {
            display: 'flex',
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            resizeMode: 'contain',
            width: '100%',
            objectFit: 'scale-down',
          },
          text: {
            fontSize: 36,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.5,
            color: 'white',
            fontFamily: 'Helvetica',
          },
          text1: {
            fontSize: 36,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.5,
            color: 'white',
            fontFamily: 'Helvetica',
          },
          text2: {
            fontSize: 30,
            lineHeight: 21,
            letterSpacing: 0.5,
            color: 'white',
            fontFamily: 'Helvetica',
          },
          image: {
            width: 200,
            height: 200,
          },
    });

export default Schedule;