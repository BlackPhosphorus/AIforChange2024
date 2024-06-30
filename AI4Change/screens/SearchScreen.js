import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { commonStyles } from '../styles';

const GOOGLE_MAPS_API_KEY = 'AIzaSyAkVA8_-D5-LoJXFaFSuG3z6nBL4Wmkp7E';

const SearchScreen = ({ navigation, showLoadingScreen }) => {
  const [region, setRegion] = useState({
    latitude: -6.200000,
    longitude: 106.816666,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [marker, setMarker] = useState(null);
  const [currentDetails, setCurrentDetails] = useState(null);
  const [latitude, setlatitude] = useState(null);
  const [longitude,setlongitude] = useState(null);
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // const handleSearch = (data, details) => {
    const handleSearch = (details) => {
    if (details) {
      const { lat, lng } = details.geometry.location;
      setlatitude(lat);
      setlongitude(lng);
      setRegion({
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      setMarker({
        latitude: lat,
        longitude: lng,
      });
    } else {
      console.error('Details not fetched');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={require('../assets/bg4.jpg')} style={styles.backgroundImage}>
        <View style={styles.container}>
        <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Enter location"
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(details);
          setCurrentDetails(details)
        }}
  
        query={{
          key: GOOGLE_MAPS_API_KEY,
          language: 'en',
        }}
        styles={{
          textInputContainer: styles.textInputContainer,
          textInput: styles.textInput,
          row: styles.row,
        }}
        debounce={200}
        renderRow={(rowData) => {
          const title = rowData.structured_formatting.main_text;
          const address = rowData.structured_formatting.secondary_text;
          return (
           <View>
            <Text style={{ fontSize: 14 }}>{title}</Text>
            <Text style={{ fontSize: 12 }}>{address}</Text>
           </View>
           );
          }}
        onFail={(error) => console.error(error)}
      />
    </View>
          <TouchableOpacity style={commonStyles.backButtonContainer} onPress={()=>handleSearch(currentDetails)}>
            <Text style={commonStyles.backButtonText}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={commonStyles.backButtonContainer} onPress={()=>navigation.navigate("AnalyticsScreen",{lat:latitude, lng:longitude})}>
            <Text style={commonStyles.backButtonText}>Confirm</Text>
          </TouchableOpacity>
          <MapView style={styles.map} region={region}>
            {marker && <Marker coordinate={marker} />}
          </MapView>
          <TouchableOpacity style={commonStyles.backButtonContainer} onPress={() => navigation.goBack()}>
            <Text style={commonStyles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
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
  },
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '95%',
    elevation: 5,
    zIndex: 1,
  },
  textInputContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    width:'95%',
  },
  textInput: {
    height: 40,
    color: '#5d5d5d',
    fontSize: 16,
  },
  map: {
    width: '100%',
    height: '60%',
    borderRadius: 10,
    zIndex: 0,
  },
  row:{
    width:'95%',
    
  }
});

export default SearchScreen;
