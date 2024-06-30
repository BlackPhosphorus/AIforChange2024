import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput, Button, Image } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { commonStyles } from '../styles';

const HomeScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground source={require('../assets/bg4.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>WeatherWise</Text>
        <Text style={styles.slogan}>Stay Ahead of the Storm</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Search')}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AboutAI')}>
          <Text style={styles.buttonText}>About WeatherWise AI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AboutPollution')}>
          <Text style={styles.buttonText}>About Air Pollution</Text>
        </TouchableOpacity>
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
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    fontFamily: 'Poppins_600SemiBold',
  },
  slogan: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 40,
    fontFamily: 'Poppins_400Regular',
  },
  button: {
    backgroundColor: '#F9A825',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins_600SemiBold',
  },
});

export default HomeScreen;
