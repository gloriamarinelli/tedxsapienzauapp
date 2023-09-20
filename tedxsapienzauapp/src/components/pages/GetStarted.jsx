import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const GetStarted = ({ navigation }) => {
  const handlePress = () => {
    alert("non faccio nulla");
  };

  return (
    <View style={styles.container}>
      <Button
        title="Go to partners"
        onPress={() => navigation.navigate("Partners")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default GetStarted;
