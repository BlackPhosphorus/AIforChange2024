import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Button, Input, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [marker, setMarker] = useState(null);
  const [location, setLocation] = useState('');

  const handleMapPress = (event) => {
    setMarker(event.nativeEvent.coordinate);
  };

  const handleLocationSelected = (data, details) => {
    const { lat, lng } = details.geometry.location;
    setRegion({
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    setMarker({ latitude: lat, longitude: lng });
    setLocation(data.description);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Location</Text>
      <GooglePlacesAutocomplete
        placeholder="Enter a specific location"
        onPress={handleLocationSelected}
        query={{
          key: 'YOUR_GOOGLE_API_KEY',
          language: 'en',
        }}
        styles={{
          textInputContainer: styles.inputContainer,
          textInput: styles.textInput,
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
        renderLeftButton={() => <Icon name="search" size={20} color="#000" style={styles.searchIcon} />}
      />
      <Divider style={styles.divider} />
      <Text style={styles.or}>OR</Text>
      <Text style={styles.label}>Pick a point on the map:</Text>
      <MapView
        style={styles.map}
        region={region}
        onPress={handleMapPress}
      >
        {marker && <Marker coordinate={marker} />}
      </MapView>
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>Selected Location: {location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f8f9fa',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#2c3e50',
    },
    inputContainer: {
      backgroundColor: '#e9ecef',
      borderRadius: 10,
      padding: 5,
      marginBottom: 10,
    },
    textInput: {
      fontSize: 16,
      backgroundColor: '#e9ecef',
    },
    searchIcon: {
      marginTop: 12,
      marginLeft: 10,
    },
    divider: {
      backgroundColor: '#2c3e50',
      marginVertical: 20,
    },
    or: {
      fontSize: 18,
      textAlign: 'center',
      marginVertical: 10,
      color: '#2c3e50',
    },
    label: {
      fontSize: 18,
      marginBottom: 10,
      color: '#2c3e50',
    },
    map: {
      width: '100%',
      height: 300,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#2c3e50',
    },
    locationContainer: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#e9ecef',
      borderRadius: 10,
    },
    locationText: {
      fontSize: 16,
      color: '#2c3e50',
    },
  });

export default homeScreen;