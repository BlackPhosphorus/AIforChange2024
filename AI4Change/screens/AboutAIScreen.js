import React from 'react';
import { StyleSheet, View, Text, ScrollView, Button, ImageBackground,TouchableOpacity } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

const AboutAIScreen = ({ navigation }) => {
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
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>About WeatherWise AI</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>
              <Text style={styles.boldText}>WeatherWise AI: </Text> uses various meteorological and environmental variables to assess stability and pollution levels. It provides insights into local conditions and potential risks.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>
              <Text style={styles.boldText}>V-Wind and U-Wind: </Text> Help understand pollutant dispersion.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Tropopause Temperature and Pressure: </Text> Affect weather patterns.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Surface Temperature and Potential Temperature: </Text> Impact chemical reactions and air stability.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Station and Sea Level Pressure: </Text> Key for weather conditions and air quality.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Humidity: </Text> Influences particulate matter and pollutant composition.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Precipitable Water Content: </Text> Indicates precipitation potential.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Air Temperature: </Text> Influences atmospheric processes and pollutant reactions.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>
              <Text style={styles.boldText}>By analyzing these variables, WeatherWise AI predicts pollution levels: </Text> It processes data from sensors and weather stations to generate actionable insights.
            </Text>
          </View>
          <TouchableOpacity style={commonStyles.backButtonContainer} onPress={() => navigation.goBack()}>
          <Text style={commonStyles.backButtonText}>Back</Text>
        </TouchableOpacity>
        </ScrollView>
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

export default AboutAIScreen;