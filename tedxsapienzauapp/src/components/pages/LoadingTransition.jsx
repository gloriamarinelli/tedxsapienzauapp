import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'; 

const LoadingTransition = () => {
  return (
    <View style={styles.container}>

        <Image
        source={require('./images/X_lowres.png')} // Replace with the correct image path
        style={styles.image}
        /> 

      <Text style={styles.title}>Second loading screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
  },
  image: {
    width: 150, // Adjust the width and height as needed
    height: 150,
    resizeMode: 'contain', // Adjust the resizeMode as needed
  },
});

export default LoadingTransition;