import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GetStarted = ({ navigation }) => {
  const handlePress = () => {
    alert('non faccio nulla');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GetStarted Page</Text>
      <Button title="Get Started!" onPress={handlePress}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default GetStarted;