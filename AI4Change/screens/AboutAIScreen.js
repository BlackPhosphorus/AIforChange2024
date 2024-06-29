import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';

const AboutAIScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>About WeatherWise AI and App</Text>
        <Text>
          WeatherWise AI leverages a variety of meteorological and environmental variables to assess the stability and pollution levels of a given area. By integrating these data points, we aim to provide comprehensive insights into the local atmospheric conditions and potential environmental risks. Here's a deeper look into how WeatherWise AI processes these variables:
        </Text>
        <Text>- V-Wind and U-Wind: These components represent the wind velocity in the vertical and horizontal directions, respectively. Analyzing wind patterns helps in understanding the dispersion of pollutants and their potential impact on air quality.</Text>
        <Text>- Tropopause Temperature and Pressure: The tropopause is the boundary layer between the troposphere and the stratosphere. Monitoring its temperature and pressure can indicate the movement of atmospheric layers, which influences weather patterns and pollutant dispersion.</Text>
        <Text>- Surface Temperature and Potential Temperature: Surface temperature affects the rate of chemical reactions in the atmosphere, while potential temperature indicates the stability of the air. Higher temperatures can increase the rate of pollutant formation and distribution.</Text>
        <Text>- Station Pressure and Sea Level Pressure: These pressure measurements are crucial for understanding the overall weather conditions. Low-pressure systems often lead to poor air quality as they can trap pollutants close to the ground.</Text>
        <Text>- Humidity: Humidity levels impact the formation of particulate matter and can influence the chemical composition of pollutants. High humidity can exacerbate the effects of certain pollutants on human health.</Text>
        <Text>- Precipitable Water Content: This variable measures the total amount of water vapor in the atmosphere. High water content can lead to precipitation, which can help to cleanse the air of pollutants, but also indicates potential for fog or smog formation.</Text>
        <Text>- Air Temperature: General air temperature influences all atmospheric processes. Elevated temperatures can enhance the photochemical reactions that produce secondary pollutants like ozone.</Text>
        <Text>By analyzing these variables, WeatherWise AI can assess environmental stability and predict pollution levels. The data is collected from various sensors and weather stations, then processed using advanced machine learning algorithms to generate accurate and actionable insights. This information is presented on our app, helping users to understand the environmental conditions of their area and take necessary actions to mitigate pollution and improve air quality.</Text>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default AboutAIScreen;
