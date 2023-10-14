// App.js

import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import NotificationB from "./NotificationB";

const notifications = [
  { message: "New message received" },
  { message: "Event starting soon" },
];

const Bacheca = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NotificationB notifications={notifications} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Bacheca;
