import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Image, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const opacity = new Animated.Value(1); // Initialize opacity value to 1 for initial visibility
  const navigation = useNavigation();

  useEffect(() => {
    const fadeOut = () => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 2000, // Adjust the duration as needed
        useNativeDriver: false,
      }).start(() => {
        setIsLoading(false);
        navigation.navigate('LoadingTransition');
      });
    };
    // Start fading out after a delay (e.g., 3500 milliseconds to ensure animation completion)
    fadeOut()
  }, [opacity, navigation]);
  
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../images/logo-white.png')}
        style={[styles.image, { opacity }]}
      />
      {<ActivityIndicator size="large" color="white" />}
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
    width: 200, // Adjust the width and height as needed
    height: 80,
    resizeMode: 'contain', // Adjust the resizeMode as needed
  },
});

export default LoadingScreen;
