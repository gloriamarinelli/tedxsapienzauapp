import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

const Notification = ({ message }) => {
  return (
    <View style={styles.notificationContainer}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const Bacheca = ({ notifications }) => {
  return (
    <ScrollView style={styles.bachecaContainer}>
      {notifications.map((notification, index) => (
        <Notification key={index} message={notification.message} />
      ))}
    </ScrollView>
  );
};

const NotificationB = ({ notifications }) => {
  return (
    <ScrollView style={styles.container}>
      <Bacheca notifications={notifications} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0c0e",
    padding: 15,
  },
  bachecaContainer: {
    flex: 1,
    padding: 10,
  },
  notificationContainer: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  message: {
    fontSize: 16,
  },
});

export default NotificationB;
