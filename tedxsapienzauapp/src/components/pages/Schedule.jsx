import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "react-native-elements";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const PlaceholderImage = require("../images/Red-Circle.png");
//anche questo provvisorio

const Schedule = () => {
  
  return (
    <ScrollView style={styles.page}>
      <Card containerStyle={styles.card}>
        <View style={styles.card1}>
        <View containerStyle={styles.imageContainer}>
            <ImageBackground source={PlaceholderImage} style={styles.image}>
              <Text style={styles.text}>9</Text>
              </ImageBackground>
              </View>
              <View containerStyle={styles.container}>
      <Text style={styles.text1}>
           testo testo testo
      </Text>
      <Text style={styles.text2}>
            testo testo testo 2
          </Text>
          </View>
          </View>
      </Card>

      <Card containerStyle={styles.card}>
        <View style={styles.card1}>
        <View containerStyle={styles.imageContainer2}>
            <ImageBackground source={PlaceholderImage} style={styles.image}>
              <Text style={styles.text}>9</Text>
              </ImageBackground>
              </View>
              <View containerStyle={styles.container2}>
      <Text style={styles.text1}>
           testo testo testo
      </Text>
      <Text style={styles.text2}>
            testo testo testo 2
          </Text>
          </View>
          </View>
      </Card>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page:{
    backgroundColor: 'black',
    display:'flex',

  },
  card:{
    color: 'black',
    backgroundColor: 'black',
    display:'flex',
    flexDirection: 'row',
  },
  card1:{
    color: 'black',
    backgroundColor: 'black',
    display:'flex',
    flexDirection: 'row',
  },

  text: {
    fontSize: 36,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 90,
  },
  image: {
    width: 130,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: 'black',
    color: 'black',
    flexDirection: 'row',
    float: 'left',
  },
  text1: {
    fontSize: 30,
    lineHeight: 21,
    fontWeight: "bold",
    color: "white",
    flexDirection: 'row',
  },
  text2: {
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: 0.5,
    color: "white",
    flexDirection: 'row',
  },
  imageContainer: {
    width: 130,
    height: 130,
    justifyContent: 'flex-start',
    alignItems: 'center', 
    backgroundColor: 'black',
    color: 'black',
    float: 'left',
    flex: 1,

  },
  imageContainer: {
    width: 130,
    height: 130,
    justifyContent: 'flex-end',
    alignItems: 'center', 
    backgroundColor: 'black',
    color: 'black',
    float: 'left',
    flex: 1,

  },
  container:{
    flex:2,
    backgroundColor: 'black',
    color: 'black',
    justifyContent: 'flex-end',

  },
  container2:{
    flex:2,
    backgroundColor: 'black',
    color: 'black',
    justifyContent: 'flex-start',

  },

});


export default Schedule;
