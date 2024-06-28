import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

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
      <Text style={styles.label}>Enter a specific location:</Text>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={handleLocationSelected}
        query={{
          key: 'YOUR_GOOGLE_API_KEY',
          language: 'en',
        }}
        styles={{
          textInputContainer: styles.inputContainer,
          textInput: styles.textInput,
        }}
      />
      <Text style={styles.or}>OR</Text>
      <Text style={styles.label}>Pick a point:</Text>
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
    padding: 10,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  inputContainer: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  textInput: {
    fontSize: 16,
  },
  or: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  map: {
    width: '100%',
    height: 300,
  },
  locationContainer: {
    marginVertical: 10,
  },
  locationText: {
    fontSize: 16,
  },
});

export default App;