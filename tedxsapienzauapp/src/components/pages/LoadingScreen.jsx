import React from 'react';
import { View, ActivityIndicator, Image, StyleSheet } from 'react-native';

const LoadingScreen = () => {
    return (
        <View style={styles.container}>
        <Image
        source={require('./images/logo-white.png')} 
        style={styles.image}
        /> 
        <ActivityIndicator size="large" color="white" />
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
image: {
    width: 600, // Adjust the width and height as needed
    height: 200,
    resizeMode: 'contain', // Adjust the resizeMode as needed
  },
});

export default LoadingScreen;