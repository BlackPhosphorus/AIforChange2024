import React from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { commonStyles } from '../styles';

const AboutPollutionScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground source={require('../assets/bg4.jpeg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.header}>About Pollution</Text>
          <View style={styles.textBox}>
            <Text style={styles.text}><Text style={styles.boldText}>Particulate Matter:</Text> Tiny particles in the air that reduce visibility and cause the air to appear hazy when levels are elevated. Exposure can cause serious health problems.</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}><Text style={styles.boldText}>Ozone:</Text> Ground-level ozone is a harmful air pollutant. It is the main ingredient in "smog." Breathing ozone can trigger a variety of health problems.</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}><Text style={styles.boldText}>Carbon Monoxide:</Text> A colorless, odorless gas that can be harmful when inhaled in large amounts. It is produced by vehicles and other fuel-burning equipment.</Text>
          </View>
          {/* Add more sections as needed */}
        </ScrollView>
        <TouchableOpacity style={commonStyles.backButtonContainer} onPress={() => navigation.goBack()}>
          <Text style={commonStyles.backButtonText}>Back</Text>
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
  scrollContent: {
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  textBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default AboutPollutionScreen;
