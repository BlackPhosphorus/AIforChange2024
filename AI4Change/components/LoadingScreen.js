import React, { useEffect } from 'react';
import { View, ActivityIndicator, Image, StyleSheet, Text, ImageBackground } from 'react-native';

const LoadingScreen = ({ navigation, route }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(route.params.screen, route.params.params);
    }, 1000); 

    return () => clearTimeout(timer);
  }, [navigation, route.params.screen, route.params.params]);

  return (
    <ImageBackground source={require('../assets/bg4.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={require('../assets/loadIcon.png')} style={styles.image} />
        <Text style={styles.loadingText}>Loading...</Text>
        <ActivityIndicator size="large" color="#F9A825" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    animation: 'spin 1s linear infinite', 
  },
  loadingText: {
    fontSize: 18,
    color: '#F9A825',
    marginBottom: 20,
  },
});

export default LoadingScreen;
