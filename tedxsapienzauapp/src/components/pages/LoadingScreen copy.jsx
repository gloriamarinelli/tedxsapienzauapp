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
      <View style={styles.shadowContainer}>
        <Image
          source={require('../images/logo-white.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Svg style={styles.shadow} width={200} height={100}>
          <LinearGradient id="gradient" x1={0} y1={0} x2={0} y2={1}>
            <Stop offset="0" stopColor="black" />
            <Stop offset="1" stopColor="grey" />
          </LinearGradient>
          <Ellipse cx={100} cy={50} rx={90} ry={5} fill="url(#gradient)" opacity={0.3} />
        </Svg>
      </View>
        <ActivityIndicator size="large" color="red" /> 
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
  shadowContainer: {
    width: 200,
    height: 100,
    position: 'relative',
  },
  shadow: {
    position: 'absolute',
    bottom: -50,
    left: 0,
    right: 0,
  },
  logo: {
    width: 200,
    height: 100,
  },
});

export default LoadingTransition;