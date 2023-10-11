import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoadingTransition = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Simulate a timeout in LoadingTransition and navigate to GetStarted
    const timeout = setTimeout(() => {
      navigation.navigate('GetStarted');
    }, 1500); // Adjust the duration as needed

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/X_lowres.png')} // Replace with the correct image path
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0c0e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
  },
  image: {
    width: 100, // Adjust the width and height as needed
    height: 100,
    resizeMode: 'contain', // Adjust the resizeMode as needed
  },
});

export default LoadingTransition;
