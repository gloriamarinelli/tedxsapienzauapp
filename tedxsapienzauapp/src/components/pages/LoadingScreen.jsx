import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Ellipse, Defs, Stop, LinearGradient } from 'react-native-svg';

const LoadingTransition = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Simulate a timeout in LoadingTransition and navigate to GetStarted
    const timeout = setTimeout(() => {
      navigation.navigate('LoadingTransition');
    }, 1500); // Adjust the duration as needed

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../images/logo-white.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Svg style={styles.shadow} width={styles.logo.width} height={100}>
          <LinearGradient id="gradient" x1={0} y1={0} x2={0} y2={1}>
            <Stop offset="0" stopColor="black" />
            <Stop offset="1" stopColor="grey" />
          </LinearGradient>
          <Ellipse cx={150} cy={50} rx={150} ry={10} fill="url(#gradient)" opacity={0.2} />
        </Svg>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="red" />
        </View>
      </View>
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
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 150,
    marginTop: 40,
    marginBottom: -30
  },
  shadow: {
  },
  loadingContainer: {
    marginTop: 30,
  },
});

export default LoadingTransition;