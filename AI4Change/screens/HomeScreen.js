import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.homeContainer}>
      <Button title="Search" onPress={() => navigation.navigate('Search')} color="#FFFFFF" />
      <Button title="Learn about WeatherWise AI and App" onPress={() => navigation.navigate('AboutAI')} color="#FFFFFF" />
      <Button title="Learn about Air Pollution" onPress={() => navigation.navigate('AboutPollution')} color="#FFFFFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
});

export default HomeScreen;
