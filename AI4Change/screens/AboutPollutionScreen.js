import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';

const AboutPollutionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>About Air Pollution</Text>
        <Text>
          Air pollution is a major environmental risk to health. By reducing air pollution levels, countries can reduce the burden of disease from stroke, heart disease, lung cancer, and both chronic and acute respiratory diseases, including asthma. Here are some ways you can help reduce air pollution:
        </Text>
        <Text>- Use public transportation or carpool to reduce emissions.</Text>
        <Text>- Conserve energy at home and in the workplace.</Text>
        <Text>- Support and use renewable energy sources.</Text>
        <Text>- Avoid burning leaves, trash, and other materials.</Text>
        <Text>- Use environmentally friendly products and recycle properly.</Text>
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

export default AboutPollutionScreen;
